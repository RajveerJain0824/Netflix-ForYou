"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NetflixLogo } from "@/components/NetflixLogo";

export default function SecretPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-5 sm:px-12">
        <NetflixLogo secret={false} />
        <Link href="/" className="rounded-sm border border-white/20 px-4 py-2 text-sm text-zinc-300 transition hover:border-white hover:text-white">
          Back
        </Link>
      </header>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(229,9,20,.28),transparent_32%),linear-gradient(180deg,#050505,#141414)]" />
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-netflix-red">End Credits</p>
          <h1 className="text-5xl font-black sm:text-7xl">Thank you for watching.</h1>
          <p className="mt-6 text-3xl font-bold text-zinc-200 sm:text-5xl">Renewed for another season.</p>
          <p className="mx-auto mt-8 max-w-xl text-zinc-500">Secret page unlocked by the logo. Add your private bloopers, letters, or future-season promises here.</p>
        </motion.div>
      </section>
    </main>
  );
}
