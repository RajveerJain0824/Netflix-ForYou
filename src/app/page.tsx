"use client";

import { motion } from "framer-motion";
import { eras } from "@/data/eras";
import { NetflixLogo } from "@/components/NetflixLogo";
import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#141414] text-white">
      <header className="fixed left-0 right-0 top-0 z-10 flex items-center px-6 py-6 sm:px-14">
        <NetflixLogo />
      </header>
      <section className="flex min-h-screen flex-col items-center justify-center px-5 pb-10 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 text-center text-[2.4rem] font-normal leading-tight text-zinc-100 sm:mb-10 sm:text-[3.7rem]"
        >
          Who&apos;s watching?
        </motion.h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 md:gap-10">
          {eras.map((era, index) => (
            <ProfileCard key={era.id} era={era} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
