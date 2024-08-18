import { Orbitron } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import { FloatingNav } from "@/Components/FloatingNav";


const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Jp-lang",
  description: "japanese langauge learning site for noobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
     <body className={`${orbitron.className} bg-[#070508] text-white`}  >
        
        <FloatingNav navItems={[
            {name:'Home', link:'/'},
            {name:'Hiragana', link:'/hiragana'},
            {name:'Katakana', link:'/katakana'},
            {name:'Kanji', link:'/kanji'},
          ]} /> 
        {children} 
        <Footer/> 
    </body>
    </html>
  );
}
