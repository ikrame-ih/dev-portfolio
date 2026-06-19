const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return res.status(503).json({ error: "email_not_configured" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "missing_fields" });
  }
  if (!EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "invalid_email" });
  }

  const payload = {
    from,
    to: [to],
    reply_to: email.trim(),
    subject: `Portfolio contact — ${name.trim()}`,
    text: `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`,
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
      return res.status(502).json({ error: "send_failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact_send_error", err);
    return res.status(502).json({ error: "send_failed" });
  }
}
