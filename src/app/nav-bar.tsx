import { cookies } from 'next/headers'
import NavAuthCompo from "@/Components/nav-auth-compo";
import NavAnonymCompo from "@/Components/nav-anonym-compo";

export function NavBar() {
    const id = cookies().get("id")
    if (id) {
        return <NavAuthCompo />
    } else {
        return <NavAnonymCompo />
    }
}
