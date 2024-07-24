import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import Map from "@/components/Map";
import { RxDotFilled } from "react-icons/rx";
import { TbSchool } from "react-icons/tb";
import { FaSchool } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa"
import { LiaToolsSolid } from "react-icons/lia";
export default function Home() {
  return (
    <main className="absolute justify-items-center text-left text-wrap left-80 right-80 top-40 py-4">
        <h1 className="">Who's Rutra?</h1>
        <p> 
          I'm a crazy <b>17 year old </b>with a big passion for tech and programming who's always looking for new technologies and projects to work on. <br/>
          Right now I am looking to develop on any <b>C#</b>, <b>Next.js</b>, <b>PHP</b> or <b>GO</b> project.
        </p>

    <Separator className="my-4"/>

    <h1 className=""><TbSchool/>&nbsp; Studies</h1>
      <ul>
        <li>

        <HoverCard>
      <HoverCardTrigger asChild>
       <Button variant="link" className="px-6 text-lg"><RxDotFilled/> 2013-2017 - Escola Básica do Cedro</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-full h-full">
        <div className="flex justify-between space-x-4">
         <div className="justify-items-center text-center space-y-1">
            <Map center={[41.1134732918017, -8.609806539380813]} zoom={20} text="This is where I learned to read and write :)" width="20rem" height="20rem"/>
            <Separator className="my-2"/>
            <h3 className="text-xl font-normal ">My Primary School</h3>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
        </li>
        
        <li>
        <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="px-6 text-lg"><RxDotFilled/> 2017-2022 - Escola EB 2/3 Soares dos Reis</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-full h-full">
        <div className="flex justify-between space-x-4">
         <div className="justify-items-center text-center space-y-1">
            <Map center={[41.11010028578019, -8.598619602014631]} zoom={17} text="We can forget what happened here &nbsp; -_-" width="20rem" height="20rem"/>
            <Separator className="my-2"/>
            <h3 className="text-xl font-normal">Middle School</h3>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
        </li>

        <li>
        <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="px-6 text-lg"><RxDotFilled/> 2022-2025 - Colégio de Gaia</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-full h-full">
        <div className="flex justify-between space-x-4">
         <div className="justify-items-center text-center space-y-1">
            <Map center={[41.12563672177117, -8.609255932012234]} zoom={18} text="Finnally school is fun again :)" width="20rem" height="20rem"/>
            <Separator className="my-2"/>
            <h3 className="text-xl font-normal">High School</h3>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
        </li>
      </ul>

    <Separator className="my-4"/>
    
    <h1><LiaToolsSolid /> &nbsp; Work</h1>
    <div className="flex flex-1 w-full h-auto justify-between justify-items-center">
      <div className="projectCard w-80 h-80"></div>
      <div className="projectCard w-80 h-80"></div>
    </div>
   </main>
  );
}
