import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared-page/Navbar";
import Footer from "@/components/shared-page/Footer";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart | Summer Store",
  description:
    "Shop quality products at best prices. Fast delivery, secure payment, and trusted service at SunCart.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Navbar></Navbar>
        <main className="flex-1">{children}</main>
        <Footer></Footer>
        <ToastContainer />
      </body>
    </html>
  );
}
