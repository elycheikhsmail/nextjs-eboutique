//import "./globals.css";
import "@/app/globals.css";
import { Inter } from "next/font/google"; 
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "location immobiliers",
  description: "le premier site mauritaniens pour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (   <html lang="en">
  <body className={`${inter.className} bg-primary`}>
     
      {children}
     
  </body>
</html>
  );
} 
