// ─────────────────────────────────────────────
//  Contact.jsx
// ─────────────────────────────────────────────
import { useState }  from "react";
import FadeUp        from "./FadeUp";
import { S }         from "../styles/styles";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="contact" style={S.section}>
      <FadeUp>
        <div style={S.sectionHeader}>
          <span style={S.sectionTag}>// get_in_touch</span>
          <h2 style={S.sectionTitle}>Let's Build Together</h2>
          <p style={S.sectionSub}>
            Open to senior data engineering roles, consulting, and speaking opportunities.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.15}>
        <form onSubmit={handleSubmit} style={S.contactForm}>
          <div style={S.formRow}>
            <input style={S.input} type="text"  placeholder="Your name"      value={form.name}    onChange={update("name")}    required />
            <input style={S.input} type="email" placeholder="Email address"  value={form.email}   onChange={update("email")}   required />
          </div>
          <textarea
            style={{ ...S.input, minHeight: 120, resize: "vertical" }}
            placeholder="Describe your data challenge..."
            value={form.message}
            onChange={update("message")}
            required
          />
          <button
            type="submit"
            style={{ ...S.btnPrimary, width: "100%", opacity: sent ? 0.8 : 1, transition: "all 0.3s" }}
          >
            {sent ? "✓ Message Sent — I'll respond within 24h" : "Send Message →"}
          </button>
        </form>
      </FadeUp>
    </section>
  );
}
