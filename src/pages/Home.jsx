import React from 'react'
import { LayoutDashboard, StickyNote, Layers, UserRoundSearch, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/sidebar/sidebar.jsx";
import { useTranslation } from 'react-i18next';
import Card from "../components/card/Card.jsx";
import SwiperComponent from "../components/swiper/Swiper.jsx";

function Home() {
  const { t, i18n } = useTranslation("global");

  const changeLanguage = (lang = string) => {
    i18n.changeLanguage(lang)
  }
  
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text={t("sidebar.start")} active />
          <SidebarItem icon={<StickyNote size={20} />} text={t("sidebar.projects")} alert />
          <SidebarItem icon={<Layers size={20} />} text={t("sidebar.experience")} />
          <hr className="my-3 border-gray-600" />
          <SidebarItem icon={<UserRoundSearch size={20} />} text={t("sidebar.contact")} />
        </Sidebar>
        <div className="w-full text-center pt-10">
          <div className="space-x-2 text-right justify-end mr-10">
            <button className="bg-transparent duration-500 hover:bg-indigo-700 text-gray-300 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded" onClick={() => changeLanguage("en")}>
              En
            </button>
            <button className="bg-transparent duration-500 hover:bg-red-700 text-gray-300 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded" onClick={() => changeLanguage("es")}>
              Es
            </button>
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold text-white">{t("home.title")}</h1>
            <p>{t("home.body")}</p>
            <p>{t("home.text")}</p>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
              <Card />
              <Card />
              <Card />
              <Card />
            </div> */}
          </div>
          
          <h1 className="text-3xl font-bold text-white">{t("Projects.title")}</h1>
          {/* maneja el centrado del contenedor */}
          <div className="flex justify-center">
            {/* maneja el tamaño del contenedor */}
            <div className='w-full md:w-5/6'>
              {/* contenedor */}
              <div className="h-[28rem] lg:h-96 w-full md:container place-content-center py-5 pb-20 px-5 lg:px-20">
                <SwiperComponent />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home