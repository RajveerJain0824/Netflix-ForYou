"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function NetflixLogo({ secret = true }: { secret?: boolean }) {
  const router = useRouter();

  return (
    <Link
      href="/"
      onClick={(event) => {
        if (!secret) return;
        event.preventDefault();
        router.push("/secret");
      }}
      className="text-3xl font-black tracking-[0.04em] text-netflix-red drop-shadow-[0_0_14px_rgba(229,9,20,0.28)] sm:text-4xl"
      aria-label="Netflix-style anniversary home"
    >
      NETFLIX
    </Link>
  );
}
