"use client";
import { useProfile } from "../context/ProfileContext";
export default function Final()
{
    const {profile}=useProfile();
    return(
        <div className=" min-h-screen  bg-blue-200 justify-center flex items-center">
      <div className="  w-[600px] border-2 rounded-3xl border-blue-950 items-center h-auto ">
      <h1 className="text-center text-2xl font-bold mb-4"> Welcome to your profile</h1>
      <div className="flex flex-col">
        <div>
            {profile.name}
        </div>
         <div>
            {profile.email}
        </div>
         <div>
            {profile.age}
        </div>
         <div>
            {profile.address}
        </div>
         <div>
            {profile.password}
        </div>

      </div>
      </div></div>
    );
}