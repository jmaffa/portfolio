import { Rosarivo, DM_Serif_Display, Playfair_Display } from "next/font/google";
import "./globals.css";

const rosarivo = Rosarivo({
  subsets: ["latin"],
  weight: ["400"],
});

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Joe Maffa Portfolio",

  description: "05/2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
