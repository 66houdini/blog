/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import Post from "./post";
import IndexPage from "./api/IndexPage";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <IndexPage />
      </main>
    </>
  );
}
