import type { Metadata } from "next";
import "./globals.css";
import { GrainOverlay } from "@/components/GrainOverlay";
import { PasswordGate } from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Private Anniversary Screening",
  description: "A private cinematic anniversary timeline."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <PasswordGate>{children}</PasswordGate>
        <GrainOverlay />
      </body>
    </html>
  );
}
