import React from 'react'

export default function page() {
  return (
    <div>
        <section className={`lg:grid lg:grid-cols-1 lg:h-screen lg:gap-5 lg:pt-14 lg:pb-20 lg:pl-14 lg:pr-32  lg:grid-rows-6 bg-lime-900`}>
           <div className={`lg:row-span-1 bg-gray-300`}></div>
           <div className={`lg:row-span-4 lg:grid lg:grid-cols-1 lg:gap-10 lg:grid-rows-3`}>
            <aside className={`lg:row-span-1 bg-teal-300`}></aside>
            <aside className={`lg:row-span-2 lg:grid lg:gap-10 lg:grid-cols-2 `}>
                <div className={`bg-red-400 lg:grid lg:grid-cols-2`}>
                  <div className={`bg-indigo-500`}></div>
                  <div className={`bg-pink-500`}></div>
                </div>
                <div className={`bg-red-700 lg:grid lg:grid-cols-2`}>
                  <div className={`bg-indigo-500`}></div>
                  <div className={`bg-purple-500`}></div>
                </div>
            </aside>
           </div>
           <div className={`lg:row-span-1 bg-gray-600`}></div>
        </section>
    </div>
  )
}
