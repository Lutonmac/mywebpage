"use client"
import React, { useEffect, useState } from 'react'
import { lex } from "../component/lex.jsx";
import { Kanit } from "@next/font/google";
import { SiSimilarweb } from "react-icons/si";
import { GrSettingsOption } from "react-icons/gr";
import { SiPowerpages } from "react-icons/si";




const kanit = Kanit({subsets: ["latin"], weight: ["700"]})
export default function Aboutme() {
    const [data, setData] = useState("")

    useEffect(()=>{
        async function myData(){
            const response = await lex()
            setData(response)
        }
        myData()
        
    },[])

       

   
  return (
    <div className={``}>
        <article className={` grid-cols-1 
            xsm:grid xsm:grid-cols-1 xsm:grid-rows-12 xsm:gap-2
          lg:pb-16 lg:pt-20 lg:pr-32 lg:pl-20 lg:gap-0  h-screen lg:grid-rows-6`}>
            <div className={`
                 xsm:row-span-1 xsm:bg-yellow-600 xsm:py-0
                lg:row-span-1 lg:bg-transparent flex justify-center text-[40px] border-2 border-slate-300 py-5 uppercase ${kanit.className}`}>
                        <h2>About me</h2>
                </div>
            <div className={`
                 xsm:row-span-1 xsm:bg-gray-700
                lg:row-span-1 lg:bg-transparent px-5 py-2`}>{
                    data && data.aboutMe? (
                        <div>
                            <p className={`text-[30px]`}>I&apos;m <span className={` ${kanit.className}`}>{data.aboutMe.name}</span>, Front end developer | Engineer</p>
                            <p>{data.aboutMe.summary} </p>
                        </div>
                    )

                    : (
                        <div>Page Loading...</div>
                    )
                }</div>
            <div className={`
            xsm:row-span-10 xsm:grid-cols-1 xsm:grid xsm:bg-slate-700 xsm:gap-2
            lg:row-span-4 lg:grid lg:grid-cols-3 lg:bg-transparent lg:gap-0
                `}>
                    <div className={`
                        xsm:grid xsm:grid-cols-1 xsm:bg-purple-400 xsm:gap-2
                        lg:grid lg:grid-cols-2 lg:col-span-2  lg:bg-transparent lg:gap-0`}>
                        <div className={`
                            xsm:bg-slate-100
                            lg:bg-black text-center h-full `}>
                                <div className={`h-full p-10`}>
                                    <p className={`text-[50px] text-yellow-300  `}>3+</p>
                                <p className={`text-white uppercase`}>years of experience</p>
                                </div>
                                
                                 </div>
                        <div className={`
                            xsm:bg-slate-300
                            lg:bg-black`}>
                                <div className={`h-full p-10 text-center`}>
                                    <p className={`text-[50px] text-yellow-300`}>20+</p>
                                    <p className={`uppercase text-white`}>project done</p>
                                </div>
                            </div>
                        <div className={`xsm:bg-gray-900
                            lg:bg-black text-center`}>
                                <div className={`h-full p-10`}>
                                    <p className={`text-[50px] text-yellow-300`}>200+</p>
                                    <p className={`text-white uppercase`}>Happy clients</p>
                                </div>
                            </div>
                        <div className={`xsm:bg-gray-600
                            lg:bg-black`}>
                                 <div className={`h-full p-10 text-center`}>
                                    <p className={`text-[50px] text-yellow-300`}>20K</p>
                                    <p className={`text-white uppercase`}>followers</p>
                                </div>
                            </div>

                    </div>
                    <div className={`
                        xsm:grid  xsm:bg-blue-700 xsm:grid-cols-1 xsm:grid-rows-8 xsm:gap-2
                        lg:grid lg:grid-rows-8 lg:col-span-1 lg:bg-transparent lg:gap-0`}>
                            <div className={`xsm:bg-pink-400 xsm:row-span-1
                                lg:row-span-1 lg:bg-transparent p-2`}>
                                  <p className={`capitalize`}>what i do? </p>
                                </div>
                            <div className={`
                                 xsm:grid xsm:grid-rows-3 xsm:bg-red-900 xsm:row-span-7 xsm:gap-2
                                 lg:grid lg:grid-rows-3 lg:row-span-7 lg:bg-transparent lg:gap-0`}>
                                <aside className={`
                                    xsm:bg-red-500 xsm:grid xsm:grid-cols-1 xsm:row-span-1 xsm:gap-2
                                    lg:bg-transparent lg:grid lg:grid-cols-3 lg:gap-0`}>
                                    <div className={`
                                        xsm:bg-sky-200
                                        lg:bg-transparent lg:col-span-1 `}>
                                            <p className={`p-5 text-purple-900`}>
                                            <SiSimilarweb size={70} />
                                            </p>

                                        </div>
                                    <div className={`
                                         xsm:bg-sky-300
                                         lg:bg-transparent lg:col-span-2 p-2 `}>
                                            <h3 className={`uppercase font-bold`}>front design</h3>
                                            <p>Building and optimizing user interfaces for web applications.</p>
                                         </div>
                                </aside>
                                <aside className={`
                                    xsm:bg-red-600 xsm:grid xsm:grid-cols-1 xsm:row-span-1 xsm:gap-y-2
                                    lg:bg-transparent lg:grid lg:grid-cols-3 lg:gap-0`}>
                                    <div className={`
                                         xsm:bg-sky-400 xsm:col-span-1
                                         lg:bg-transparent lg:col-span-1`}>
                                        <p className={`p-5 text-purple-900`}>
                                            <SiPowerpages size={70}/>
                                        </p>
                                         </div>
                                    <div className={`
                                        xsm:bg-sky-500 xsm:col-span-2
                                        lg:bg-transparent lg:col-span-2 p-2`}>
                                               <h3 className={`uppercase font-bold`}>Web design</h3>
                                               <p>Building and optimizing user interfaces for web applications.</p>
                                        </div>
                                </aside>
                                <aside className={`
                                     xsm:bg-purple-700  xsm:grid-cols-1 xsm:grid xsm:gap-y-2
                                     lg:bg-transparent lg:grid lg:grid-cols-3`}>
                                    <div className={`
                                        xsm:bg-sky-600 xsm:col-span-1
                                        lg:bg-transparent lg:col-span-1 `}>
                                            <p className={`p-5 text-purple-900`}>
                                            <GrSettingsOption size={70}/>

                                            </p>
                                        </div>
                                    <div className={`
                                        xsm:bg-sky-700 xsm:col-span-2
                                        lg:bg-transparent lg:col-span-2 p-2`}>
                                               <h3 className={`uppercase font-bold`}>Engineering</h3>
                                               <p>Building and optimizing user interfaces for web applications.</p>
                                        </div>
                                </aside>
                            </div>
                    </div>
                </div>
        </article>
    </div>
  )
}
