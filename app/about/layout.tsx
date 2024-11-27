import Header from "../../components/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton"; 
import Footer from "../../components/Footer";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="top"></div>
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}