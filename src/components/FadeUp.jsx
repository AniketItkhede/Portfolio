// ─────────────────────────────────────────────
//  FadeUp.jsx  —  Scroll-triggered fade-in wrapper
// ─────────────────────────────────────────────
import { useInView } from "../hooks/hooks";

export default function FadeUp({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
