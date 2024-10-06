import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "Space Guard - NASA Space Weather Monitoring WebApp",
  description:
    "Real-time space weather updates from NASA’s DONKI API, offering accurate data on solar activity and geomagnetic storms in a user-friendly platform for researchers and enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
