// ─────────────────────────────────────────────
//  Footer.jsx
// ─────────────────────────────────────────────
import { S }      from "../styles/styles";
import { OWNER }  from "../data/portfolioData";

export default function Footer() {
  return (
    <footer style={S.footer}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#2a4a5a" }}>
        {OWNER.email}
      </span>
      <span style={{ color: "#2a4a5a", fontSize: 12 }}>
        © {new Date().getFullYear()} · Built with React + passion for data
      </span>
    </footer>
  );
}
