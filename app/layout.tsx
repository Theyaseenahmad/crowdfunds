import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Separator from "@/components/Separator";

export const metadata: Metadata = {
  title: "CrowdFunds",
  description: "A platform to support your favourite creators",
  icons: "/ico.png", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#39337b] to-purple-900 min-h-screen ">
        <SessionWrapper>
          <Navbar></Navbar>
          {children}
          <center><Separator></Separator></center>
          <Footer></Footer>
        </SessionWrapper>
      </body>
    </html>
  );
}
