// ─────────────────────────────────────────────
//  Skills.jsx  —  Both sections visible on one page
// ─────────────────────────────────────────────
import { useState }                from "react";
import FadeUp                      from "./FadeUp";
import SkillBar                    from "./SkillBar";
import { S, LIME }                 from "../styles/styles";
import { SKILLS, SOFTWARE_SKILLS } from "../data/portfolioData";

/* ── Single skill card ── */
function SkillCard({ skill, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        style={{
          ...S.skillCard,
          borderColor: hovered ? `${LIME}44` : "#1a2a3a",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={S.skillTop}>
          <span style={S.skillName}>{skill.name}</span>
          <span style={S.skillCat}>{skill.cat}</span>
        </div>
        <SkillBar level={skill.level} />
        <span style={S.skillPct}>{skill.level}%</span>
      </div>
    </FadeUp>
  );
}

/* ── Divider with centered label ── */
function SectionDivider({ tag, title, delay = 0 }) {
  return (
    <FadeUp delay={delay}>
      <div style={dividerWrap}>
        <div style={dividerLine} />
        <div style={dividerCenter}>
          <span style={dividerTag}>{tag}</span>
          <h3 style={dividerTitle}>{title}</h3>
        </div>
        <div style={dividerLine} />
      </div>
    </FadeUp>
  );
}

/* ── Main Skills section ── */
export default function Skills() {
  return (
    <section id="skills" style={S.section}>

      {/* ── Section header ── */}
      <FadeUp>
        <div style={S.sectionHeader}>
          <span style={S.sectionTag}>// tech_stack</span>
          <h2 style={S.sectionTitle}>Skills & Tools</h2>
          <p style={S.sectionSub}>
            Data infrastructure expertise paired with full-stack software development.
          </p>
        </div>
      </FadeUp>

      {/* ════ DATA ENGINEERING ════ */}
      <SectionDivider
        tag="// data_engineering"
        title="Data Engineering"
        delay={0.05}
      />
      <div style={{ ...S.skillsGrid, marginBottom: "3.5rem" }}>
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={i * 0.06} />
        ))}
      </div>

      {/* ════ SOFTWARE DEVELOPMENT ════ */}
      <SectionDivider
        tag="// software_development"
        title="Software Development"
        delay={0.05}
      />
      <div style={S.skillsGrid}>
        {SOFTWARE_SKILLS.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={i * 0.06} />
        ))}
      </div>

    </section>
  );
}

/* ── Divider styles ── */
const dividerWrap = {
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
  marginBottom: "1.8rem",
};

const dividerLine = {
  flex: 1,
  height: "0.5px",
  background: "linear-gradient(to right, transparent, #1a2a3a, transparent)",
};

const dividerCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  flexShrink: 0,
};

const dividerTag = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 10,
  color: `${LIME}99`,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

const dividerTitle = {
  fontFamily: "'Syne', sans-serif",
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#e0eef5",
  letterSpacing: "0.02em",
  border: `0.5px solid ${LIME}33`,
  borderRadius: 6,
  padding: "4px 18px",
  background: `${LIME}08`,
  whiteSpace: "nowrap",
};
