// ─────────────────────────────────────────────
//  Experience.jsx
// ─────────────────────────────────────────────
import FadeUp        from "./FadeUp";
import { S }         from "../styles/styles";
import { TIMELINE }  from "../data/portfolioData";

function TimelineItem({ item, isLast }) {
  return (
    <div style={S.tlItem}>
      <div style={S.tlLeft}>
        <span style={S.tlYear}>{item.year}</span>
        <div className="tl-dot" style={S.tlDot} />
        {!isLast && <div style={S.tlLine} />}
      </div>
      <div style={S.tlRight}>
        <h3 style={S.tlRole}>{item.role}</h3>
        <div style={S.tlCompany}>{item.company}</div>
        <p style={S.tlDesc}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={S.section}>
      <FadeUp>
        <div style={S.sectionHeader}>
          <span style={S.sectionTag}>// work_history</span>
          <h2 style={S.sectionTitle}>Experience</h2>
        </div>
      </FadeUp>

      <div style={S.timeline}>
        {TIMELINE.map((item, i) => (
          <FadeUp key={item.company} delay={i * 0.15}>
            <TimelineItem item={item} isLast={i === TIMELINE.length - 1} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
