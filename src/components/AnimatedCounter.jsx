// ─────────────────────────────────────────────
//  AnimatedCounter.jsx  —  Count-up on scroll
// ─────────────────────────────────────────────
import { useState, useEffect } from "react";
import { useInView } from "../hooks/hooks";

export default function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView]     = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end      = parseInt(target);
    const duration = 1500;
    const step     = Math.ceil(end / (duration / 16));
    const timer    = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}
