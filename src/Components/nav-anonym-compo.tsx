import "../app/globals.css"; 
import ApplicationLogo from "./ApplicationLogo";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";



export default function NavAnonymCompo() {
    return <nav className="h-20 bg-white">
        <div className="container mx-auto px-7 flex justify-between items-center h-full">
            <ApplicationLogo />
            <ul className="flex gap-2 font-bold">
                <li className="text-secondary flex items-center">
                    <Link href="/">
                        <AiFillHome className="text-xl" />
                    </Link>
                </li>
                <li className="hover:text-secondary">
                    <Link href="/article/search"> recherch</Link>
                </li>
                <li className="hover:text-secondary">
                    <Link href="/auth/Register">register</Link>
                </li>
               
                <li className="hover:text-secondary">
                    <Link href="/auth/Login">login</Link>
                </li>
              
            </ul>
        </div>
    </nav>
}