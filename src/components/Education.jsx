// ─────────────────────────────────────────────
//  Education.jsx  —  Hierarchy / Tree UI
// ─────────────────────────────────────────────
import { useEffect, useRef } from "react";
import FadeUp        from "./FadeUp";
import { S, LIME }   from "../styles/styles";
import { EDUCATION, OWNER } from "../data/portfolioData";

/* ── Category grouping ── */
const CATEGORIES = [
  { label: "Degree",        count: "1 institution",  indices: [0] },
  { label: "SSC & HSC",   count: "School & Intermiddiate",    indices: [1, 2] },
  { label: "Certifications", count: "1 academy",      indices: [3] },
];

/* ── SVG connector lines ── */
function TreeConnectors({ rootRef, l1Refs, l2Refs, wrapRef }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const wrap = wrapRef.current;
    if (!svg || !wrap) return;

    const wRect = wrap.getBoundingClientRect();

    function rel(el) {
      const r = el.getBoundingClientRect();
      return {
        cx:  r.left - wRect.left + r.width / 2,
        top: r.top  - wRect.top,
        bot: r.top  - wRect.top + r.height,
      };
    }

    function makePath(x1, y1, x2, y2, delay) {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", `M${x1},${y1} C${x1},${y1+40} ${x2},${y2-40} ${x2},${y2}`);
      p.setAttribute("stroke", `${LIME}40`);
      p.setAttribute("stroke-width", "1");
      p.setAttribute("fill", "none");
      p.setAttribute("stroke-dasharray", "300");
      p.setAttribute("stroke-dashoffset", "300");
      p.style.animation = `eduLine 0.8s ease ${delay}s forwards`;
      svg.appendChild(p);
    }

    svg.innerHTML = "";
    svg.setAttribute("height", wRect.height);

    const root = rel(rootRef.current);
    const l1   = l1Refs.current.map(r => r && rel(r));
    const l2   = l2Refs.current.map(r => r && rel(r));

    // root → each l1
    l1.forEach((n, i) => n && makePath(root.cx, root.bot, n.cx, n.top, 0.1 + i * 0.1));

    // l1 → l2 by category
    CATEGORIES.forEach((cat, ci) => {
      cat.indices.forEach((li, i) => {
        l2[li] && l1[ci] && makePath(l1[ci].cx, l1[ci].bot, l2[li].cx, l2[li].top, 0.35 + ci * 0.1 + i * 0.05);
      });
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{ position: "absolute", top: -40, left: 0, width: "100%", pointerEvents: "none", overflow: "visible" }}
    />
  );
}

/* ── Leaf card ── */
function LeafCard({ item, idx }) {
  return (
    <FadeUp delay={0.4 + idx * 0.08}>
      <div
        style={leafCard}
        onMouseEnter={e => { e.currentTarget.style.borderColor = `${LIME}44`; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a2a3a";   e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div style={leafStripe} />
        <div style={{ fontSize: 18, marginBottom: 8 }}>{item.icon}</div>
        <div style={leafDegree}>{item.degree}</div>
        <div style={leafInst}>
          <span style={leafDot} />
          {item.institution}
        </div>
        <div style={leafBadge}>{item.year}</div>
        <div style={leafGrade}>{item.grade}</div>
        <div style={pillsWrap}>
          {item.highlights.map(h => <span key={h} style={pill}>{h}</span>)}
        </div>
      </div>
    </FadeUp>
  );
}

/* ── Main section ── */
export default function Education() {
  const wrapRef = useRef(null);
  const rootRef = useRef(null);
  const l1Refs  = useRef(CATEGORIES.map(() => null));
  const l2Refs  = useRef(EDUCATION.map(() => null));

  return (
    <section id="education" style={S.section}>

      <style>{`@keyframes eduLine { to { stroke-dashoffset: 0; } }`}</style>

      <FadeUp>
        <div style={S.sectionHeader}>
          <span style={S.sectionTag}>// education_&_certifications</span>
          <h2 style={S.sectionTitle}>Education</h2>
          <p style={S.sectionSub}>Academic foundation and industry-recognized certifications.</p>
        </div>
      </FadeUp>

      <div ref={wrapRef} style={{ position: "relative" }}>

        {/* ── ROOT ── */}
        <FadeUp>
          <div ref={rootRef} style={rootNode}>
            <div style={rootIcon}>🎓</div>
            <div>
              <div style={rootTitle}>{OWNER.name}</div>
              <div style={rootSub}>4 credentials</div>
            </div>
          </div>
        </FadeUp>

        {/* ── LEVEL 1 categories ── */}
        <FadeUp delay={0.15}>
          <div style={l1Row}>
            {CATEGORIES.map((cat, i) => (
              <div key={cat.label} ref={el => l1Refs.current[i] = el} style={l1Node}>
                <div style={l1Dot} />
                <div style={l1Label}>{cat.label}</div>
                <div style={l1Count}>{cat.count}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ── SVG Lines ── */}
        <TreeConnectors rootRef={rootRef} l1Refs={l1Refs} l2Refs={l2Refs} wrapRef={wrapRef} />

        {/* ── LEVEL 2 leaf cards ── */}
        <div style={leafGrid}>
          {EDUCATION.map((item, i) => (
            <div key={item.degree} ref={el => l2Refs.current[i] = el}>
              <LeafCard item={item} idx={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Styles ── */
const rootNode = {
  display: "flex", alignItems: "center", gap: 12,
  background: "#0d1520", border: `0.5px solid ${LIME}55`,
  borderRadius: 12, padding: "14px 20px",
  width: "fit-content", margin: "0 auto 48px",
  position: "relative", zIndex: 1,
};
const rootIcon  = { width: 44, height: 44, borderRadius: 10, background: `${LIME}15`, border: `0.5px solid ${LIME}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 };
const rootTitle = { fontFamily: "'Syne', sans-serif", fontSize: ".95rem", fontWeight: 700, color: "#e0eef5" };
const rootSub   = { fontSize: 11, color: LIME, letterSpacing: ".08em", marginTop: 2 };

const l1Row  = { display: "flex", gap: 16, justifyContent: "center", marginBottom: 40 };
const l1Node = { flex: 1, maxWidth: 180, background: "#0d1520", border: "0.5px solid #1a3a2a", borderRadius: 10, padding: "12px 14px", textAlign: "center", position: "relative", zIndex: 1 };
const l1Dot  = { width: 8, height: 8, borderRadius: "50%", background: LIME, boxShadow: `0 0 6px ${LIME}88`, margin: "0 auto 8px" };
const l1Label = { fontFamily: "'Syne', sans-serif", fontSize: ".82rem", fontWeight: 700, color: "#e0eef5", lineHeight: 1.3 };
const l1Count = { fontSize: 10, color: LIME, letterSpacing: ".1em", marginTop: 4 };

const leafGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, position: "relative", zIndex: 1 };

const leafCard = {
  background: "#0a1018", border: "0.5px solid #1a2a3a", borderRadius: 10,
  padding: 14, position: "relative", overflow: "hidden",
  transition: "border-color .2s, transform .2s",
};
const leafStripe  = { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${LIME}55, transparent)` };
const leafDegree  = { fontFamily: "'Syne', sans-serif", fontSize: ".78rem", fontWeight: 700, color: "#e0eef5", lineHeight: 1.3, marginBottom: 6 };
const leafInst    = { fontSize: 10, color: LIME, letterSpacing: ".04em", marginBottom: 8, display: "flex", alignItems: "center", gap: 5 };
const leafDot     = { width: 4, height: 4, borderRadius: "50%", background: LIME, flexShrink: 0 };
const leafBadge   = { display: "inline-block", fontSize: 10, color: `${LIME}cc`, background: `${LIME}0a`, border: `0.5px solid ${LIME}33`, borderRadius: 20, padding: "2px 8px", letterSpacing: ".06em", marginBottom: 8 };
const leafGrade   = { fontSize: 11, color: "#e0eef5", fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: 8 };
const pillsWrap   = { display: "flex", flexWrap: "wrap", gap: 4 };
const pill        = { fontSize: 9, color: "#4a7a5a", border: "0.5px solid #1a3a2a", borderRadius: 3, padding: "2px 6px", background: "#0a1410" };
