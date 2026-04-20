// ─────────────────────────────────────────────
//  styles.js  —  Design tokens + style objects
// ─────────────────────────────────────────────

export const LIME   = "#a3e635";
export const BG     = "#060a0f";
export const SURFACE = "#0d1520";
export const BORDER  = "0.5px solid #1a2a3a";

// ── Global CSS injected once in App ──
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=IBM+Plex+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes blink {
    0%,100% { opacity: 1; } 50% { opacity: 0; }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes glowPulse {
    0%,100% { box-shadow: 0 0 8px #a3e63522; }
    50%     { box-shadow: 0 0 28px #a3e63555; }
  }
  @keyframes morphBlob {
    0%,100% { border-radius: 40% 60% 55% 45% / 50% 45% 55% 50%; }
    50%     { border-radius: 55% 45% 42% 58% / 46% 56% 44% 54%; }
  }
  @keyframes floatBadge {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(-6px); }
  }

  .nav-link:hover        { color: #a3e635 !important; }
  .proj-card:hover       { border-color: #a3e63555 !important; transform: translateY(-6px) !important; }
  .proj-card:hover .proj-metric { color: #a3e635 !important; }
  .skill-bar-fill        { transition: width 1.2s cubic-bezier(.4,0,.2,1) !important; }
  .tl-dot:hover          { background: #a3e635 !important; transform: scale(1.4) !important; }
  input:focus, textarea:focus { border-color: #a3e63588 !important; outline: none; }
  input::placeholder, textarea::placeholder { color: #3a4a5a; }
  ::-webkit-scrollbar       { width: 4px; }
  ::-webkit-scrollbar-track { background: #060a0f; }
  ::-webkit-scrollbar-thumb { background: #a3e63544; border-radius: 2px; }
`;

// ── Shared style objects ──
export const S = {
  /* Root */
  root: {
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
    background: BG,
    color: "#c8dde8",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  /* Navbar */
  nav: {
    position: "sticky", top: 0, zIndex: 100,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "1rem 3rem",
    background: "rgba(6,10,15,0.92)",
    backdropFilter: "blur(16px)",
    borderBottom: BORDER,
  },
  navBrand:  { display: "flex", alignItems: "center", gap: 10 },
  brandDot:  { width: 8, height: 8, borderRadius: "50%", background: LIME, boxShadow: `0 0 8px ${LIME}` },
  brandText: { fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#e0eef5", letterSpacing: "0.02em" },
  navLinks:  { display: "flex", gap: "2rem" },
  navLink:   { fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a7a8a", textDecoration: "none" },

  /* Hero */
  hero: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    minHeight: "90vh", alignItems: "center",
    padding: "4rem 3rem", gap: "3rem",
  },
  heroEyebrow: { display: "flex", alignItems: "center", gap: 8, marginBottom: "1.4rem" },
  eyebrowDot:  { width: 6, height: 6, borderRadius: "50%", background: LIME, boxShadow: `0 0 6px ${LIME}` },
  eyebrowText: { fontSize: 11, color: LIME, letterSpacing: "0.18em", textTransform: "uppercase" },
  heroName: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(2.4rem,4.5vw,4rem)", fontWeight: 800,
    color: "#e0eef5", lineHeight: 1.05,
    marginBottom: "0.5rem", letterSpacing: "-0.02em",
  },
  typewriterRow: { display: "flex", alignItems: "center", gap: 2, marginBottom: "1.5rem", minHeight: "2.2rem" },
  typewriterText: { fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: LIME },
  cursor:         { fontSize: "1.3rem", color: LIME, fontWeight: 300, animation: "blink 1s step-end infinite" },
  heroDesc: { fontSize: "0.9rem", color: "#5a7a8a", lineHeight: 1.8, maxWidth: 460, marginBottom: "2rem" },
  heroBtns: { display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" },
  btnPrimary: {
    background: LIME, color: BG, border: "none",
    padding: "12px 26px", fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13, fontWeight: 500, borderRadius: 4, cursor: "pointer",
    letterSpacing: "0.04em",
  },
  btnGhost: {
    background: "transparent", color: LIME, border: `0.5px solid ${LIME}`,
    padding: "12px 26px", fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13, borderRadius: 4, cursor: "pointer", letterSpacing: "0.04em",
  },
  techStack: { display: "flex", flexWrap: "wrap", gap: 8 },
  techPill:  { fontSize: 11, color: "#3a6a7a", border: "0.5px solid #1a3a4a", borderRadius: 20, padding: "4px 12px", letterSpacing: "0.08em" },

  /* Profile image */
  imageWrapper:       { position: "relative", width: 340, height: 400, display: "flex", alignItems: "center", justifyContent: "center" },
  profileImg:         { width: 290, height: 350, objectFit: "cover", objectPosition: "center top", borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%", border: `2.5px solid ${LIME}66`, position: "relative", zIndex: 2, animation: "morphBlob 7s ease-in-out infinite", display: "block" },
  imgPlaceholder:     { width: 290, height: 350, borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%", background: "#0d1510", border: `2px solid ${LIME}44`, flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 },
  placeholderInitials:{ fontFamily: "'Syne', sans-serif", fontSize: "4rem", fontWeight: 800, color: LIME, lineHeight: 1, marginBottom: "0.6rem" },
  placeholderLabel:   { fontSize: 13, color: "#c0ddc0", fontWeight: 500, marginBottom: "0.3rem" },
  placeholderHint:    { fontSize: 10, color: "#3a5a3a", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em" },
  imgRingOuter: { position: "absolute", inset: -16, borderRadius: "42% 58% 57% 43% / 52% 47% 53% 48%", border: `0.5px solid ${LIME}28`, zIndex: 1, animation: "glowPulse 4s ease-in-out infinite" },
  imgRingInner: { position: "absolute", inset: -32, borderRadius: "48% 52% 44% 56% / 46% 54% 46% 54%", border: `0.5px solid ${LIME}11`, zIndex: 0 },
  floatBadge: { position: "absolute", display: "flex", alignItems: "center", gap: 6, background: "#0d1510", border: `0.5px solid ${LIME}44`, borderRadius: 20, padding: "6px 12px", zIndex: 3, whiteSpace: "nowrap" },
  badgeDot:   { width: 6, height: 6, borderRadius: "50%", background: LIME, boxShadow: `0 0 6px ${LIME}`, display: "inline-block", flexShrink: 0 },
  badgeText:  { fontSize: 11, color: LIME, letterSpacing: "0.06em" },

  /* Shared section */
  section:       { position: "relative", zIndex: 1, padding: "5rem 3rem", borderTop: "0.5px solid #0d1a26" },
  sectionHeader: { marginBottom: "3rem" },
  sectionTag:    { display: "block", fontSize: 12, color: LIME, letterSpacing: "0.15em", marginBottom: "0.6rem" },
  sectionTitle:  { fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#e0eef5", marginBottom: "0.5rem", letterSpacing: "-0.02em" },
  sectionSub:    { fontSize: 14, color: "#3a6a7a", lineHeight: 1.7 },

  /* Projects */
  projectsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" },
  projectCard:  { background: SURFACE, border: BORDER, borderRadius: 12, padding: "1.4rem", transition: "border-color 0.25s, transform 0.25s", cursor: "default" },
  projTop:    { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" },
  projIcon:   { fontSize: 22 },
  projMetric: { fontSize: 11, color: "#3a6a7a", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em", transition: "color 0.3s" },
  projTitle:  { fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#d0e8f0", marginBottom: "0.5rem" },
  projDesc:   { fontSize: 12, color: "#4a6a7a", lineHeight: 1.7, marginBottom: "1rem" },
  projTags:   { display: "flex", flexWrap: "wrap", gap: 6 },
  tag:        { fontSize: 10, color: "#3a6a7a", border: "0.5px solid #1a3a4a", borderRadius: 3, padding: "3px 8px", letterSpacing: "0.05em" },

  /* Skills */
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" },
  skillCard:  { background: SURFACE, border: "0.5px solid", borderRadius: 10, padding: "1rem 1.2rem", transition: "border-color 0.3s" },
  skillTop:   { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  skillName:  { fontSize: 13, color: "#c0dde8" },
  skillCat:   { fontSize: 10, color: LIME, letterSpacing: "0.1em", textTransform: "uppercase" },
  skillBarBg: { width: "100%", height: 3, background: "#0d1a26", borderRadius: 2, overflow: "hidden", marginBottom: 6 },
  skillPct:   { fontSize: 11, color: "#3a6a7a" },

  /* Timeline */
  timeline: { display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: 720 },
  tlItem:   { display: "flex", gap: "2rem", alignItems: "flex-start" },
  tlLeft:   { display: "flex", flexDirection: "column", alignItems: "center", minWidth: 110, paddingTop: 4 },
  tlYear:   { fontSize: 11, color: LIME, letterSpacing: "0.1em", marginBottom: 8, textAlign: "center" },
  tlDot:    { width: 10, height: 10, borderRadius: "50%", background: "#1a3a4a", border: `0.5px solid ${LIME}`, transition: "background 0.3s, transform 0.3s", cursor: "pointer" },
  tlLine:   { width: 1, flex: 1, background: "#1a2a3a", marginTop: 4, minHeight: 40 },
  tlRight:  { flex: 1, paddingBottom: "1rem" },
  tlRole:   { fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#d0e8f0", marginBottom: 4 },
  tlCompany:{ fontSize: 12, color: LIME, marginBottom: 8, letterSpacing: "0.05em" },
  tlDesc:   { fontSize: 13, color: "#4a6a7a", lineHeight: 1.7 },

  /* Contact */
  contactForm: { maxWidth: 600, display: "flex", flexDirection: "column", gap: "1rem" },
  formRow:     { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  input:       { background: SURFACE, border: "0.5px solid #1a2a3a", borderRadius: 8, padding: "12px 14px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: "#c0dde8", width: "100%", transition: "border-color 0.2s" },

  /* Footer */
  footer: { position: "relative", zIndex: 1, padding: "1.5rem 3rem", borderTop: "0.5px solid #0d1a26", display: "flex", justifyContent: "space-between", alignItems: "center" },
};
