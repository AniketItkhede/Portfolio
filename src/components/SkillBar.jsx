// ─────────────────────────────────────────────
//  SkillBar.jsx  —  Animated progress bar
// ─────────────────────────────────────────────
import { useInView } from "../hooks/hooks";
import { S, LIME }   from "../styles/styles";

export default function SkillBar({ level }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} style={S.skillBarBg}>
      <div
        className="skill-bar-fill"
        style={{
          height:     "100%",
          width:      inView ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${LIME}, #6cb81a)`,
          borderRadius: 2,
          transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
        }}
      />
    </div>
  );
}
