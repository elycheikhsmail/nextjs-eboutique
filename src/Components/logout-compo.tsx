"use client";
import axios from "axios";
import { useRouter } from "next/navigation"; 

// router.push("/")

export default function LoginCompo() {
  const router = useRouter();
  async function logout() {
    // localStorage.removeItem("token");
     await axios.get('/api/logout')
     .then(
      _ =>{
        router.push("/")
        //location.assign("/");
        
      }
     ).catch(e => console.log(e))
  }

  return (
    <div className="container mx-auto px-4 my-10 flex items-center flex-col">
      <p className="text-center text-3xl mb-4">
        are you sure that you want to logout
      </p>
      <button
        className="mt-4 bg-secondary text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={async (ev) => {
          ev.preventDefault();
          await logout();
        }}
      >
        yes, i am sure
      </button>
    </div>
  );
}
 
