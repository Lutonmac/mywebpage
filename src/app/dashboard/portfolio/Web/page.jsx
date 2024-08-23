import React from 'react'

export default function page() {
  const obj = {a: 1, b: 2, c: 3};
const kays = Object.keys(obj);
const mapped = kays.map((key)=> ({[key]: obj[key] }))
const displayInfo = mapped.map((infoma)=> (
  <div>
    {infoma.a} 
    
  </div>
))





  return (
    <div className={`lg:h-full `}>
    <section className={`lg:grid lg:h-full lg:px-48 lg:py-5 lg:gap-5 lg:grid-cols-2`}>
        <div className={`bg-purple-200`}>
        {displayInfo}
        </div>
        <div className={`bg-purple-300`}>{}</div>
        <div className={`bg-purple-400`}></div>
        <div className={`bg-purple-500`}></div>

    </section>
    </div>
  )
}
