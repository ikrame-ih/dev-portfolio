import { rateLimit } from "./_lib/rateLimit.js";
import {
  clampText,
  escapeHtml,
  getClientIp,
  isHoneypotTripped,
} from "./_lib/security.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;
const MIN_FILL_MS = 2500; // reject instant submits

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  res.setHeader("Cache-Control", "no-store");

  if (isHoneypotTripped(req.body)) {
    return res.status(200).json({ ok: true }); // bots get a fake ok
  }

  const ip = getClientIp(req);
  const contactLimit = await rateLimit({
    key: `contact:${ip}`,
    limit: 5,
    windowSec: 60 * 60,
  });
  if (contactLimit.limited) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return res.status(503).json({ error: "email_not_configured" });
  }

  const { name, email, message, startedAt } = req.body ?? {};
  const safeName = clampText(name, MAX_NAME);
  const safeEmail = clampText(email, MAX_EMAIL);
  const safeMessage = clampText(message, MAX_MESSAGE);

  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ error: "missing_fields" });
  }
  if (!EMAIL_RE.test(safeEmail)) {
    return res.status(400).json({ error: "invalid_email" });
  }

  if (typeof startedAt === "number" && Date.now() - startedAt < MIN_FILL_MS) {
    return res.status(400).json({ error: "too_fast" });
  }

  const payload = {
    from,
    to: [to],
    reply_to: safeEmail,
    subject: `Portfolio contact — ${safeName.replace(/[\r\n]+/g, " ")}`,
    text: `${safeMessage}\n\n— ${safeName} (${safeEmail})`,
    html: `<p>${escapeHtml(safeMessage).replace(/\n/g, "<br>")}</p><p>— <strong>${escapeHtml(safeName)}</strong> (<a href="mailto:${encodeURIComponent(safeEmail)}">${escapeHtml(safeEmail)}</a>)</p>`,
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("resend_error", response.status, detail);

      let resendMessage = "";
      try {
        const parsed = JSON.parse(detail);
        resendMessage = parsed.message || parsed.error || "";
      } catch {
        resendMessage = detail;
      }

      if (
        resendMessage.includes("only send testing emails to your own email")
      ) {
        return res.status(502).json({
          error: "resend_testing_limit",
          hint: "CONTACT_TO_EMAIL must match the email on your Resend account while using onboarding@resend.dev.",
        });
      }

      if (response.status === 401 || response.status === 403) {
        return res
          .status(502)
          .json({ error: "resend_auth", hint: resendMessage });
      }

      return res
        .status(502)
        .json({ error: "send_failed", hint: resendMessage });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact_send_error", err);
    return res.status(502).json({ error: "send_failed" });
  }
}
