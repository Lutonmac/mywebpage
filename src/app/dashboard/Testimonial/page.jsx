import React from 'react'

export default function page() {
  return (
    <div>
        <section className={`
            lg:grid lg:grid-cols-1 lg:grid-rows-6 lg:h-screen lg:pt-14 lg:gap-5 lg:pb-20 lg:pl-16 lg:pr-32 lg:bg-purple-800 `}>
            <div className={`bg-blue-600 lg:row-span-1`}></div>
            <div className={`bg-blue-700 
                lg:row-span-5 lg:grid lg:grid-cols-2 h-full lg:grid-rows-2 `}>
                    <div className={`bg-neutral-400 
                        lg:grid  lg:grid-cols-3 lg:grid-rows-4 h-full`}>
                        <div className={`
                            lg:row-span-3 lg:col-span-1 bg-yellow-600`}> </div>
                        <div className={`
                            lg:row-span-3 lg:col-span-2 bg-yellow-400`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-1 bg-yellow-200`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-2 bg-yellow-900`}></div>
                    </div>
                    <div className={`bg-neutral-500 
                        lg:grid lg:grid-cols-3 lg:grid-rows-4`}>
                        <div className={`
                            lg:row-span-3 lg:col-span-1 bg-yellow-600`}></div>
                        <div className={`
                            lg:row-span-3 lg:col-span-2 bg-yellow-400`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-1 bg-yellow-200`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-2 bg-yellow-900`}></div>
                    </div>
                    <div className={`bg-neutral-700 
                        lg:grid lg:grid-cols-3 lg:grid-rows-4`}>
                        <div className={`
                            lg:row-span-3 lg:col-span-1 bg-yellow-600`}></div>
                        <div className={`
                            lg:row-span-3 lg:col-span-2 bg-yellow-400`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-1 bg-yellow-200`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-2 bg-yellow-900`}></div>
                    </div>
                    <div className={`bg-neutral-900 
                        lg:grid lg:grid-cols-3 lg:grid-rows-4`}>
                        <div className={`
                            lg:row-span-3 lg:col-span-1 bg-yellow-600`}></div>
                        <div className={`
                            lg:row-span-3 lg:col-span-2 bg-yellow-400`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-1 bg-yellow-200`}></div>
                        <div className={`
                            lg:row-span-1 lg:col-span-2 bg-yellow-900`}></div>
                    </div>
                </div>
            
        </section>
    </div>
  )
}
