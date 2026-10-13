"use client";

import dynamic from "next/dynamic";

const PremiumCursor = dynamic(() => import("./PremiumCursor").then((m) => m.PremiumCursor), { ssr: false });
const FloatingActions = dynamic(() => import("./FloatingActions").then((m) => m.FloatingActions), { ssr: false });

export function LazyExtras() {
  return (
    <>
      <PremiumCursor />
      <FloatingActions />
    </>
  );
}
