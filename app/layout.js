import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local"

const ProductSans = localFont({
  src: "./fonts/ProductSans-Regular.ttf",
  variable: "--font-product-sans",
  weight: "100 900",
});

export const metadata = {
  title: "ShortLink - Custom URL Shortener",
  description: "Make custom short URLs with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-orange-100 ${ProductSans.className}`}>
        {/* <Background/> */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
