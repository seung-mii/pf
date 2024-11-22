import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shin Seung Mi Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}