"use client";
import "./globals.css";
import { useContext } from "react";
import Proyectos from "../components/Projects";
import { contextTheme } from "@/context/contextProvider";
import Description from "@/components/Description";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { dark } = useContext(contextTheme);
  return (
    <main
      className={`${
        dark ? ` bg-neutral-800 text-white` : `from-white  text-neutral-800`
      } min-h-full `}
    >
      <Description />
      <Proyectos />
      <Contact />
      <Footer />
    </main>
  );
}
