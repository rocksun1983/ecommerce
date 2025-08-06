import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paged App",
  description: "Paged E-Commerce app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* Navbar */}
          <div className="bg-[#ff3399] ">
            <Navbar />
          </div>

          {children}

          {/* Footer */}
          
        </AuthProvider>
        <footer className="bg-white md:bg-[#ff3399]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
