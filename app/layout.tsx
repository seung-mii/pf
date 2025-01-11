import type { Metadata } from "next";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton"; 
import Footer from "../components/Footer";
import "./globals.css";
import MeteorEffect from "@/components/MeteorEffect";

export const metadata: Metadata = {
  title: "Shin Seung Mi Portfolio",
  description: "Frontend Developer",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MeteorEffect />
        <div id="top"></div>
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}