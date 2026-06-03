"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SecretEasterEgg() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-20 h-3 w-3 rounded-full bg-netflix-red/40 shadow-glow transition hover:scale-150 hover:bg-netflix-red"
        aria-label="Hidden blooper reel"
      />
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.9, rotate: 2 }}
              className="max-w-xl border border-netflix-red/40 bg-zinc-950 p-8 text-center shadow-glow"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-netflix-red">Hidden Blooper Reel</p>
              <h2 className="text-3xl font-black text-white">Future seasons teaser unlocked.</h2>
              <p className="mt-4 text-zinc-400">Coming soon: more trips, more jokes, better lighting, and at least one scene nobody can explain.</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
