import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PaTuristear",
  description: "Tours en tu ciudad preferida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-primary'}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
