import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PaTuristear",
  description: "Tours en tu ciudad preferida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
