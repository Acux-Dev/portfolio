import React from 'react'
import { LayoutDashboard, StickyNote, Layers, UserRoundSearch, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/sidebar/sidebar.jsx";

function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Inicio" active />
          <SidebarItem icon={<StickyNote size={20} />} text="Projectos" alert />
          <SidebarItem icon={<Layers size={20} />} text="Experiencia" />
          <hr className="my-3 border-gray-600" />
          <SidebarItem icon={<UserRoundSearch size={20} />} text="Contacto" />
        </Sidebar>
        <div className="w-full align-middle text-center pt-10">
          <div className="">
            <h1>Acux</h1>
            <p>Portfolio</p>
            <p>Prueba despliegue en vercel</p>
          </div>
          <h1 className="text-3xl font-bold underline text-red-500">
            Prueba Tailwind despliegue
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home


