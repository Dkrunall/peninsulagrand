"use client";

import { LazyMotion } from "framer-motion";

// Animation features load after first paint so they stay off the critical path
const loadFeatures = () => import("./motionFeatures").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
