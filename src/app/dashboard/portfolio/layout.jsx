import Link from 'next/link'
import React from 'react'

export default function Portfoliolayout({children}) {
  return (
    <div>
        <section className={`h-screen grid grid-cols-1 
            xsm:
            lg:grid-rows-11 bg-red-500 lg:pb-16 lg:pt-10 lg:pl-14 lg:pr-28`}>
            <div className={`bg-purple-500 
                lg:row-span-2`}></div>
            <div className={`bg-purple-600 
                lg:row-span-1`}>
                <ul className={`grid 
                    lg:grid-cols-4 h-full `}>
                  <Link href={`/dashboard/portfolio/`}><li tabIndex={`0`} className={`bg-indigo-500 lg:p-5 lg:text-center uppercase  focus:text-white focus:bg-black`}>All</li></Link>  
                   <Link href={`/dashboard/portfolio/Graphics`}> <li tabIndex={`0`} className={`bg-indigo-700 lg:p-5 lg:text-center uppercase focus:text-white focus:bg-black`}>Graphic designs</li></Link> 
                   <Link href={`/dashboard/portfolio/Web`}><li tabIndex={`0`} className={`bg-indigo-800 lg:p-5 lg:text-center uppercase focus:text-white focus:bg-black`}>Web designs</li></Link> 
                   <Link href={`/dashboard/portfolio/Photography`}><li tabIndex={`0`} className={`bg-indigo-900 lg:p-5 lg:text-center uppercase focus:text-white focus:bg-black`}>Photographs</li></Link> 
                </ul>
            </div>
            <div className={`bg-purple-700 lg:row-span-8 pt-1`}>
                {children}


            </div>
        </section>
    </div>
  )
}
