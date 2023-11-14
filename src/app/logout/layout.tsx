import "@/app/globals.css";
import { Inter } from "next/font/google";
import NavAuthCompo from "@/Components/nav-auth-compo";

import NavAnonymCompo from "@/Components/nav-anonym-compo";

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
  return (
    <>
      <NavAuthCompo />
      <section>
        {children}
      </section>
    </>
  );
}
