// ─────────────────────────────────────────────
//  Hero.jsx
// ─────────────────────────────────────────────
import { useState } from "react";
import { useTypewriter } from "../hooks/hooks";
import { S, LIME }       from "../styles/styles";
import { ROLES, TECH_PILLS, OWNER } from "../data/portfolioData";

/* ── SVG icons (inline, no external lib needed) ── */
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const ResumeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

/* ── Social link button ── */
function SocialBtn({ href, icon, label, download = false }) {
  return (
    <a
      href={href}
      target={download ? "_self" : "_blank"}
      rel="noopener noreferrer"
      download={download}
      style={socialLink}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${LIME}88`;
        e.currentTarget.style.color       = LIME;
        e.currentTarget.style.background  = `${LIME}0d`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#1a2a3a";
        e.currentTarget.style.color       = "#5a7a8a";
        e.currentTarget.style.background  = "transparent";
      }}
    >
      {icon}
      <span style={{ fontSize: 11, letterSpacing: "0.06em" }}>{label}</span>
    </a>
  );
}

export default function Hero() {
  const typewritten = useTypewriter(ROLES);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" style={S.hero}>

      {/* ── Left: Text Content ── */}
      <div style={{ animation: "slideInLeft 0.9s ease forwards" }}>
        <div style={S.heroEyebrow}>
          <span style={S.eyebrowDot} />
          <span style={S.eyebrowText}>{OWNER.tagline}</span>
        </div>

        <h1 style={S.heroName}>{OWNER.name}</h1>

        <div style={S.typewriterRow}>
          <span style={S.typewriterText}>{typewritten}</span>
          <span style={{ ...S.cursor, animation: "blink 1s step-end infinite" }}>|</span>
        </div>

        <p style={S.heroDesc}>{OWNER.bio}</p>

        {/* ── CTA Buttons ── */}
        <div style={S.heroBtns}>
          <a href="#projects">
            <button style={S.btnPrimary}>View Projects →</button>
          </a>
          <a href="#contact">
            <button style={S.btnGhost}>Let's Talk</button>
          </a>
        </div>

        {/* ── Social Links Row ── */}
        <div style={socialRow}>
          <SocialBtn
            href={OWNER.linkedin}
            icon={<LinkedInIcon />}
            label="LinkedIn"
          />
          <SocialBtn
            href={OWNER.github}
            icon={<GitHubIcon />}
            label="GitHub"
          />
          <SocialBtn
            href={OWNER.resume}
            icon={<ResumeIcon />}
            label="Resume"
            download
          />
          {/* Divider + email */}
          <span style={divider} />
          <span style={emailText}>{OWNER.email}</span>
        </div>

        {/* ── Tech Pills ── */}
        <div style={{ ...S.techStack, marginTop: "1.4rem" }}>
          {TECH_PILLS.map((t) => (
            <span key={t} style={S.techPill}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── Right: Profile Photo ── */}
      <div style={{ animation: "slideInRight 0.9s ease forwards", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={S.imageWrapper}>
          <div style={S.imgRingOuter} />
          <div style={S.imgRingInner} />

          {!imgError ? (
            <img
              src={OWNER.photo}
              alt={OWNER.name}
              style={S.profileImg}
              onError={() => setImgError(true)}
            />
          ) : (
            <div style={{ ...S.imgPlaceholder, display: "flex" }}>
              <div style={S.placeholderInitials}>
                {OWNER.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div style={S.placeholderLabel}>Your Photo Here</div>
              <div style={S.placeholderHint}>Set OWNER.photo in portfolioData.js</div>
            </div>
          )}

          <div style={{ ...S.floatBadge, top: "6%", right: "-14%" }}>
            <span style={S.badgeDot} />
            <span style={S.badgeText}>Open to Work</span>
          </div>
          <div style={{ ...S.floatBadge, bottom: "12%", left: "-16%" }}>
            <span style={S.badgeDot} />
            <span style={S.badgeText}>1+ yrs exp</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Styles ── */
const socialRow = {
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  flexWrap: "wrap",
};

const socialLink = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "7px 14px",
  border: "0.5px solid #1a2a3a",
  borderRadius: 6,
  color: "#5a7a8a",
  textDecoration: "none",
  fontFamily: "'IBM Plex Mono', monospace",
  background: "transparent",
  transition: "border-color 0.2s, color 0.2s, background 0.2s",
  cursor: "pointer",
};

const divider = {
  width: "0.5px",
  height: 18,
  background: "#1a2a3a",
  flexShrink: 0,
};

const emailText = {
  fontSize: 11,
  color: "#3a5a6a",
  fontFamily: "'IBM Plex Mono', monospace",
  letterSpacing: "0.04em",
};