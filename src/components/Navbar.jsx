// ─────────────────────────────────────────────
//  Navbar.jsx
// ─────────────────────────────────────────────
import { S } from "../styles/styles";
import { NAV_LINKS, OWNER } from "../data/portfolioData";

export default function Navbar() {
  return (
    <nav style={S.nav}>
      <div style={S.navBrand}>
        <span style={S.brandDot} />
        <span style={S.brandText}>{OWNER.name}</span>
      </div>
      <div style={S.navLinks}>
        {NAV_LINKS.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={S.navLink}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
