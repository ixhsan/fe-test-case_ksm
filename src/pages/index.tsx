import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import List from "@/components/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen px-6 md:px-12 py-8 ${inter.className}`}>
      <NavBar />
      <List />
    </main>
  );
}
