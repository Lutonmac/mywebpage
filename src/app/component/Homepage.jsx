import React from 'react'
import styles from "../styles.module.css";
import { Playfair } from "@next/font/google";
import Link from 'next/link';

const playfair = Playfair({subsets: ['latin'], weight: ['700']})
export default function Homepage() {
  return (
    <div>
        <section className={`
            xsm:h-screen xsm:grid
            sm: 
            md:grid md:grid-cols-2 md:grid-rows-1 
            lg:grid lg:grid-cols-2 lg:grid-rows-1   ${styles.bgimg}
            `}>
                <div className={`md:pt-32 md:px-10
                    lg:bg-white  lg:px-14 `}>
                <article className={`
                xsm:grid xsm:grid-cols-1 xsm:grid-rows-4 xsm:p-10
                md:grid md:grid-cols-1 md:grid-rows-3 md:p-10
                 lg:grid lg:grid-cols-1 lg:gap-0 lg:grid-rows-2 
                `}>
                       <div className={`
                       xsm:row-span-1  xsm:p-2
                        lg:row-span-1  `}>
                        <p className={`xsm:text-[40px]  lg:px-5 lg:text-[40px] ${playfair.className}`}>Hi There!</p>
                        <p className={`xsm:text-[50px] md:text-[40px] lg:px-5 lg:text-[50px] ${playfair.className}`}>I&apos;m <span className={`text-yellow-300 `}>Gideon</span> </p>
                        <div className={`lg:p-5`}>
                        <p className={`xsm:w-[15rem] xsm:bg-yellow-600 xsm:text-center
                            lg:px-5 lg:bg-yellow-600 lg:w-[15rem] `}>Web developer | Engineer</p>
                        </div>
                       
                       </div>
                       <div className={`xsm:row-span-2  xsm:p-2
                        lg:row-span-1 `}>
                            <p className={`lg:px-5 lg:py-1`}>I&apos;m Gideon Owadara, a web developer and engineer 
                                passionate about crafting innovative digital solutions.
                                 With expertise in HTML, CSS, JavaScript, and engineering principles, 
                                 I create responsive websites and robust applications.</p>
                                 <div className={`lg:row-span-1 lg:py-3 lg:px-5`}>
                       <Link href={`/dashboard`} > <button className={`xsm:bg-yellow-600 xsm:uppercase xsm:p-2
                            lg:px-3 lg:py-1 lg:uppercase lg:bg-yellow-600 lg:text-white rounded-lg`}>more about me</button>
                            </Link>
                       </div>
                       </div>
                      
                       
                       <div>

                       </div>
            </article>
                </div>
            
            
        </section>
    </div>
  )
}
