"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Era } from "@/data/eras";

export function ProfileCard({ era, index }: { era: Era; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 * index, duration: 0.65, ease: "easeOut" }}
    >
      <Link href={`/era/${era.id}`} className="group block text-center">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="relative mx-auto aspect-square w-32 overflow-hidden rounded border-4 border-transparent bg-zinc-800 transition duration-200 group-hover:border-white sm:w-36 md:w-44"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#3a3a3a,#161616_55%,#0a0a0a)]" />
          <img
            src={era.profileImage}
            alt={`${era.title} profile`}
            className="relative h-full w-full object-cover opacity-95 transition duration-300 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.opacity = "0";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 opacity-70" />
        </motion.div>
        <p className="mt-3 text-lg text-[#808080] transition group-hover:text-white sm:text-xl">{era.title}</p>
      </Link>
    </motion.div>
  );
}
