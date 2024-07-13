"use client";
import { Moon, Sun } from "react-feather";
import { useContext } from "react";
import { contextTheme } from "@/context/contextProvider";
import Link from "next/link";

export default function Header() {
  const { dark, toggleTheme } = useContext(contextTheme);

  return (
    <header
      className={`${
        dark
          ? ` bg-neutral-800 text-white shadow-gray-300`
          : `bg-white shadow-slate-500 text-neutral-800`
      } z-50 top-0 sticky shadow-sm`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className=" text-base sm:text-3xl font-bold">
          Hola, soy Arturo Pacheco
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#projects" className="hover:text-slate-500">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-slate-500">
                Contacto
              </Link>
            </li>
            <button
              onClick={() => toggleTheme(dark)}
              className={`ml-4 transition-transform duration-200 ease-out hover:scale-125`}
            >
              {dark ? <Sun /> : <Moon />}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
