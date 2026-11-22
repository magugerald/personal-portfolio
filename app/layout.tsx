import SessionProviders from "@/providers/SessionProviders";
import "./css/globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Gerald Magu",
    default: "Gerald Magu | Real Estate, Data & Technology",
  },
  description:
    "Gerald Magu is a real estate professional and data analyst exploring the intersection of business, technology and digital ventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-white text-gray-900`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {/* <Header /> */}

          <SessionProviders>{children}</SessionProviders>
          <Footer />
        </div>
      </body>
    </html>
  );
}
