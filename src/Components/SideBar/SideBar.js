import React, { useState } from "react"
import arrow from "../../Assets/left-arrow2.png"
import { FaGuilded } from "react-icons/fa"
import { FaInnosoft } from "react-icons/fa"
import { FaSlack } from "react-icons/fa"

const SideBar = () => {
  const [open, setOpen] = useState(true)
  const Menu = [
    { title: "Room-list", icon: "<FaInnosoft />" },
    { title: "Add-Room", icon: "<FaSlack/>" },
  ]
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-indigo-600 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <div
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          >
            <FaGuilded color="white" size={40} />
          </div>

          <h1
            className={`text-white origin-left font-medium text-l duration-300 ${
              !open && "scale-0"
            }`}
          >
            Diu Student Conduct
          </h1>
        </div>
        <ul className="pt-6">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
            <FaInnosoft color="white" size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Room-list
            </span>
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
            <FaInnosoft color="white" size={20} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Add-Room
            </span>
          </li>
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default SideBar
