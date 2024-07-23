"use client"
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { link } from "fs";
import { Separator } from "@/components/ui/separator"
export default function Nav() {
    return(
        <header>
       <nav>
            <ul className="text-4xl flex justify-between items-center p-4 w-full">
      <li className="flex-1 flex justify-center">
        <Button variant="link" className="text-4xl px-2"><a href="/">About</a></Button>
        <Button variant="link" className="text-4xl px-2"><a href="/">Work</a></Button>
        <Button variant="link" className="text-4xl px-2"><a href="/">Contact</a></Button>
      </li>

      <li className="flex-1 text-center">
        <p className="text-4xl font-bold">Rutra</p>
      </li>

      <li className="flex-1 flex justify-center">
        <a className="text-4xl px-2" href="https://www.linkedin.com"><FaLinkedin /></a>
        <a className="text-4xl px-2" href="https://www.github.com/ArturC03"><FaGithub /></a>
      </li>
    </ul>
    </nav>
        </header>
    )
}