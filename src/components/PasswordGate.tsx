"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NetflixLogo } from "./NetflixLogo";

const STORAGE_KEY = "anniversary-netflix-access";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAllowed(localStorage.getItem(STORAGE_KEY) === "granted");
    setReady(true);
  }, []);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const expected = process.env.NEXT_PUBLIC_SITE_PASSWORD;

    if (!expected || password === expected) {
      localStorage.setItem(STORAGE_KEY, "granted");
      setAllowed(true);
      return;
    }

    setError("Wrong episode code. Try again.");
  };

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#141414] text-white">
        <div className="text-3xl font-black tracking-[0.04em] text-netflix-red">NETFLIX</div>
      </main>
    );
  }
  if (allowed) return <>{children}</>;

  return (
    <main className="min-h-screen overflow-hidden bg-netflix-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(229,9,20,.25),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,.08),transparent_28%)]" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="absolute left-6 top-6 sm:left-12 sm:top-10">
          <NetflixLogo secret={false} />
        </div>
        <motion.form
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          onSubmit={submit}
          className="w-full max-w-md border border-white/10 bg-black/70 p-8 shadow-2xl backdrop-blur-xl"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-netflix-red">Private Screening</p>
          <h1 className="mb-6 text-3xl font-semibold">Enter the password</h1>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="NEXT_PUBLIC_SITE_PASSWORD"
            className="mb-4 w-full rounded-sm border border-white/15 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-netflix-red"
          />
          {error ? <p className="mb-4 text-sm text-red-300">{error}</p> : null}
          <button className="w-full rounded-sm bg-netflix-red px-5 py-3 font-bold text-white transition hover:bg-red-700">
            Start Watching
          </button>
          {!process.env.NEXT_PUBLIC_SITE_PASSWORD ? (
            <p className="mt-4 text-xs text-zinc-500">No password is set yet, so any entry will unlock locally.</p>
          ) : null}
        </motion.form>
      </div>
    </main>
  );
}
