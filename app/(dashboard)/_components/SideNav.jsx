"use client"
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex,setActiveIndex] = useState(0);

  return (
    <div>
      <div className="p-2 border-b">
        <Image src="/logo.png" width={60} height={60} />
      </div>
      <div className=" flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button onClick={()=>setActiveIndex(index)} className={`w-full flex gap-2 p-4 px-6 hover:bg-gray-100 text-gray-700 ${activeIndex==index?'bg-purple-50 text-primary':null}, `}>
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
