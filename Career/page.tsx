import Link from "next/link";

export default function Career(){
    return(
        <div>
            <h1>this is CAREER page</h1>
            <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/About-Us"><li>About</li></Link>
            <Link href="/Career">
            <li>Career</li>
            </Link>
          </ul>
        
        </div>
    )
}