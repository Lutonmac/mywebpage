import Image from 'next/image'
import React from 'react'
import gideon from "../../../../public/Gideon3.jpg";
import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
       <section className={`grid
          md:grid-rows-6
         lg:grid-rows-6  h-screen`}>
        <div className={`
            md:row-span-2
            lg:row-span-2 bg-red-500`}>
            <Image src={gideon} alt='image-of-me' width={200} height={200} className={`md:w-full lg:w-full`} />
        </div>
        <div className={`
          md:row-span-4
          lg:row-span-4 bg-neutral-500`}>
            <ul className={`lg:text-center lg:py-16`}>
               <Link href={`/`} ><li tabIndex={`0`}  className={`lg:p-5 lg:focus:text-white`}>Home</li></Link> 
               <Link href={`/dashboard`}><li tabIndex={`0`}  className={`lg:p-5 lg:focus:text-white`}>About me</li></Link> 
               <Link href={`/dashboard/resume`}> <li tabIndex={`0`}  className={`lg:p-5 lg:focus:text-white`}>Resume</li></Link>
               <Link href={`/dashboard/portfolio`}><li  tabIndex={`0`} className={`lg:p-5 lg:focus:text-white`}>Portfolio</li></Link> 
                
               <Link href={`/dashboard/Testimonial`}><li tabIndex={`0`} className={`lg:p-5 lg:focus:text-white`}>Testimonial</li></Link> 
               <Link href={`/dashboard/contact`}> <li tabIndex={`0`} className={`lg:p-5 lg:focus:text-white`}>Contact</li></Link>
            </ul>
        </div>
       </section>
    </div>
  )
}
