"use client"
import React, { useEffect, useState } from 'react'
import { lex } from "../../dashboard/component/lex.jsx";
import { Kanit } from "@next/font/google";


const kanit = Kanit({subsets: ["latin"], weight: ["400"]})
export default function page() {

  const [data, setData] = useState("")

    useEffect(()=>{
        async function myData(){
            const response = await lex()
            setData(response)
        }
        myData()
        
    },[])
  const bigReume = {
    createResume(){
      if( data && data.resume && data.resume.education && data.resume.education.length > 0 ) {
     
       return  ( <div key={data.resume.education[0].id}>
            {data.resume.education[0].institution}
          </div> )
      } else{
        return (<div>Page Loading...</div>)
      }
        
      
     
    }
  
  }

  return (
    <div className={``}>
    <article className={` grid-cols-1 
        xsm:bg-lime-800 xsm:grid xsm:grid-cols-1 xsm:grid-rows-12 
        md:grid md:pb-16 md:pt-20 md:pr-32 md:pl-20 md:gap-0 md:grid-rows-8
       lg:bg-transparent lg:pb-16 lg:pt-20 lg:pr-32 lg:pl-20 lg:gap-0 lg:grid h-screen lg:grid-rows-8`}>
       <div className={`
        xsm:row-span-1 
        md:row-span-1
        lg:row-span-2 bg-red-400`}>
          <h2 className={`text-center lg:p-8 lg:text-[70px] ${kanit.className}`}>Resume</h2>
        </div>
       <div className={`
        xsm:row-span-6 xsm:grid xsm:grid-cols-1 
        md:row-span-3 md:grid md:grid-cols-3 md:grid-rows-4
        lg:row-span-3 lg:grid lg:grid-cols-3 lg:grid-rows-4 bg-red-500`}>
          <div className={`
            md:row-span-1 md:col-span-3
            lg:row-span-1 lg:col-span-3 bg-purple-300 p-2 text-[30px]  ${kanit.className}`}>Education </div>
          <div className={`md:row-span-3
            lg:row-span-3  bg-purple-400`}> 
             <div>{bigReume.createResume()}</div>

            <div>
         
          </div> 
          </div>
          <div className={`md:row-span-3
            lg:row-span-3 bg-purple-500`}>one</div>
          <div className={`md:row-span-3
            lg:row-span-3 bg-purple-600`}> te</div>

       </div>
       <div className={`
        xsm:row-span-5 xsm:grid-cols-1  xsm:grid
        md:grid md:grid-cols-3 md:grid-rows-4 md:row-span-3
        lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:row-span-3 bg-red-800`}>
           <div className={`
            md:row-span-1 md:col-span-3
            lg:row-span-1 lg:col-span-3 bg-blue-300`}> </div>
          <div className={`
            md:row-span-3
            lg:row-span-3  bg-blue-400`}>hell</div>
          <div className={`md:row-span-3
            lg:row-span-3 bg-blue-500`}>one</div>
          <div className={`md:row-span-3
            lg:row-span-3 bg-blue-600`}>4</div>
          
        </div>
    </article>
</div>
  )
}
