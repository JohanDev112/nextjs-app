import "./css/globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: 'MarketLane Ventures',
    default: 'MarketLane Ventures - Tu mejor opción en línea!'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full text-darkText">
        <Layout>
          <Header/>
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
