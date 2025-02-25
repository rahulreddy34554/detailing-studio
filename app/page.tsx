import { Navbar } from "@/components";
import HeroSlider from "@/components/HeroSlider";
import Popup from "@/components/Popup";
import Image from "next/image";

export default function Home() {
  return (
   
      <main className="overflow-hidden">
        <Popup/>
       <HeroSlider/>
      </main>
     
  );
}
