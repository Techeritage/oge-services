import "./globals.css";
import "animate.css";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Oge Professional Services - Financial & Business Solutions in Lagos, Ogun, Ibadan",
  description: "Oge Professional Services offers expert financial and business services across Lagos, Ogun State, and Ibadan. Empowering businesses with tailored solutions for sustainable growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
