"use client"
import { useRouter } from "next/navigation";

import { useProfile } from "../context/ProfileContext";

export default function Editpage()
{
  const {profile,setProfile}=useProfile();
  const router =useRouter();
  const handleChange=(e)=>{
    setProfile({...profile,[e.target.name]:e.target.value});
  };
  return(
    <div className=" min-h-screen  bg-blue-200 justify-center flex items-center">
      <div className="  w-[600px] border-2 rounded-3xl border-blue-950 items-center h-auto ">
      <h1 className="text-center text-2xl font-bold mb-4"> Edit Profile</h1>
      <form className="flex flex-col space-y-3 p-4 rounded-xl">
        <input type="text"
        name="name"
        placeholder="Name"
        className="p-2 rounded-2xl rounded border"
        value={profile.name}
        onChange={handleChange}/>

         <input type="text"
        name="age"
        placeholder="Age"
        className="p-2 rounded-2xl border"
        value={profile.age}
        onChange={handleChange}/>

         <input type="text"
        name="address"
        placeholder="Adress"
        className="p-2 rounded-2xl border"
        value={profile.address}
        onChange={handleChange}/>
         <input type="text"
        name="password"
        placeholder="Password"
        className="p-2 rounded-2xl border"
        value={profile.password}
        onChange={handleChange}/>
      </form>
      <div className="flex flex-row ">
      <button className="mt-6 bg-gray-600 hover:bg-blue-700 text-white p-2 rounded-lg w-full"
      onClick={()=>router.push("/")}>BBack to home</button>
      <button className="mt-6 bg-gray-600 hover:bg-blue-700 text-white p-2 rounded-lg w-full"
      onClick={()=>router.push("/final")}>Next</button>

      </div>
    </div>
    </div>
  );

}
