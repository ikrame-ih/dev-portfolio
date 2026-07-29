import { useState, useRef } from "react";
import { toast } from "sonner";
import { useContent, useUi } from "@/i18n/LocaleContext";

const SendFailedToast = ({ email, prefix }) => (
  <span>
    {prefix}{" "}
    <a
      href={`mailto:${email}`}
      className="underline underline-offset-2 hover:opacity-80"
    >
      {email}
    </a>
    .
  </span>
);

export function useContactForm() {
  const { PROFILE } = useContent();
  const ui = useUi();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formStartedAt = useRef(Date.now());

  const showSendFailedToast = () => {
    toast.error(
      <SendFailedToast
        email={PROFILE.email}
        prefix={ui.contact.sendFailedPrefix}
      />,
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = ui.contact.nameRequired;
    if (!form.email.trim()) nextErrors.email = ui.contact.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = ui.contact.emailInvalid;
    }
    if (!form.message.trim()) nextErrors.message = ui.contact.messageRequired;

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      toast.error(ui.contact.fillAll);
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: form.website,
          startedAt: formStartedAt.current,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const code = typeof data.error === "string" ? data.error : "";

        if (code === "rate_limited") {
          toast.error(ui.contact.rateLimited);
        } else if (code === "too_fast") {
          toast.error(ui.contact.tooFast);
        } else if (code === "invalid_email") {
          toast.error(ui.contact.emailInvalid);
        } else if (code === "missing_fields") {
          toast.error(ui.contact.fillAll);
        } else {
          showSendFailedToast();
        }
        return;
      }
      setSent(true);
      toast.success(ui.contact.sent);
      setForm({ name: "", email: "", message: "", website: "" });
      formStartedAt.current = Date.now();
    } catch {
      showSendFailedToast();
    } finally {
      setSubmitting(false);
    }
  };

  return { form, errors, submitting, sent, handleChange, handleSubmit };
}
