"use client"
import React, { useState } from 'react'
import { FaFolder } from "react-icons/fa6";
import { IoMdHome, IoIosSend } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import  styles  from "../styles.module.css";
import Link from 'next/link';


export default function NavBar() {
    const [showNav, setShowNav] = useState(true)
    const handleNav = ()=> {
        if (!showNav) {
            setShowNav(true)
        }
        else if(showNav){
            setShowNav(false)
        }
        else{
            !showNav
        }
    }
  return (
    <div>
        <nav className={``}>
            <div className={`hidden
                xsm:flex bg-blue-500 sm:hidden p-7`} onClick={handleNav}>
            <RxHamburgerMenu size={35} />
            </div>
            <ul className={showNav ?`
                 text-black z-10 
                 xsm:hidden
                 sm:grid  sm:justify-end sm:absolute sm:right-[10px]  sm:p-10
                 md:grid md:absolute md:p-10 md:mt-[12rem] md:z-10 md:justify-end 
                 lg:grid  lg:absolute lg:p-10 lg:mt-32  lg:z-10 lg:justify-end lg:right-0 
                 `: `${styles.navBar}`}>
                <Link href={`/`} title='Home'><li className={`p-5  `}><IoMdHome size={40}  /></li></Link>  
               <Link href={`/dashboard`}><li className={`p-5`}><IoPerson size={40} /> </li></Link> 
                <li className={`p-5`}><HiSpeakerphone size={40}  /></li>
                <li className={`p-5`}><FaFolder size={40}  /></li>
                <li className={`p-5`}><IoIosSend size={40} /></li>
                
             
            </ul>
        </nav>
    </div>
  )
}
