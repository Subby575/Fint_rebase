import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
<link rel="icon" href="@/Images/image.png" />
export const metadata = {
  title: "Fint",
  description: "Money Management Made Easy ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
