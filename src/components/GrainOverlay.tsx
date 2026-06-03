export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(255,255,255,.8) 0 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,.45) 0 1px, transparent 1px)",
        backgroundSize: "37px 37px, 53px 53px"
      }}
    />
  );
}
