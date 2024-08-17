import Hero from "@/Components/Hero";
import Grids from "@/Components/Grids";
import MagicBtn from "@/Components/ui/MagicBtn";
import { FloatingMenu } from "@/Components/FlotingMenu";



export default function Home() {
  return (
    <div className=" ">

      
      


      <Hero/>

      <FloatingMenu />

      <Grids/>
      <div className="my-10">
        <a className="text-center " href="/hiragana">
      {/* <MagicBtn 
      title='Explore'
      /> */}
      </a>
      </div>
      
      

      
    </div>
  );
}
