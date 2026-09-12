"use client";

import { motion } from "framer-motion";
import { eras } from "@/data/eras";
import { NetflixLogo } from "@/components/NetflixLogo";
import { ProfileCard } from "@/components/ProfileCard";

export function ProfileSelection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#141414] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_12%,rgba(229,9,20,.16),transparent_28%),linear-gradient(180deg,#090909,#141414_42%,#090909)]" />
      <header className="fixed left-0 right-0 top-0 z-10 flex items-center px-6 py-6 sm:px-14">
        <NetflixLogo />
      </header>
      <section className="relative flex min-h-screen flex-col items-center justify-center px-5 pb-10 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 text-center text-xs font-black uppercase tracking-[0.32em] text-netflix-red"
        >
          Private Screening
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 text-center text-[2.3rem] font-normal leading-tight text-zinc-100 sm:mb-10 sm:text-[3.7rem]"
        >
          Who&apos;s watching?
        </motion.h1>
        <div className="grid w-full max-w-5xl grid-cols-2 gap-x-5 gap-y-9 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 md:gap-10">
          {eras.map((era, index) => (
            <ProfileCard key={era.id} era={era} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
