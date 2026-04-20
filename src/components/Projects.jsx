// ─────────────────────────────────────────────
//  Projects.jsx
// ─────────────────────────────────────────────
import FadeUp          from "./FadeUp";
import { S }           from "../styles/styles";
import { PROJECTS }    from "../data/portfolioData";

function ProjectCard({ project }) {
  return (
    <div className="proj-card" style={S.projectCard}>
      <div style={S.projTop}>
        <span style={S.projIcon}>{project.icon}</span>
        <span className="proj-metric" style={S.projMetric}>{project.metric}</span>
      </div>
      <h3 style={S.projTitle}>{project.title}</h3>
      <p style={S.projDesc}>{project.desc}</p>
      <div style={S.projTags}>
        {project.tags.map((t) => (
          <span key={t} style={S.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={S.section}>
      <FadeUp>
        <div style={S.sectionHeader}>
          <span style={S.sectionTag}>// selected_work</span>
          <h2 style={S.sectionTitle}>Engineering Projects</h2>
          <p style={S.sectionSub}>Production systems serving millions of records daily</p>
        </div>
      </FadeUp>

      <div style={S.projectsGrid}>
        {PROJECTS.map((project, i) => (
          <FadeUp key={project.title} delay={i * 0.1}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
