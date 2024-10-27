import Link from "next/link";

export default function AboutUs() {
  return (
    <div>
        <h1>----this is About us page----</h1>

     <ul>
{/* 
            <Link href="/Sumaira">
            <li>Sumaira</li>
            </Link> */}

            
    <Link href="/About-Us/Sumaira/Education"><li>SUMAIRA</li></Link>
           
            <Link href="/"><li>Home</li></Link>
        
            <Link href="/Career">
            <li>Career</li>
            </Link>

            
          </ul>
          
         {/* <h1>About us</h1> */}

    </div>
  );
}
// create a folder in app directory with name career
// create a file with name "page.tsx"
// create a function of tsx with default export