
import Navigation from './component/Navigation'
import DashboardPage from './page'

export default function DashboardLayout({children}) {
  return (
    <main className={``}>
      
      <section className={`grid 
        md:grid-cols-12 md:grid-rows-6
        lg:grid-cols-12 lg:grid-rows-6 h-screen`}>
        <div className={`xsm:hidden
                    md:hidden md:col-span-2 md:row-span-2 
                   lg:grid lg:col-span-2 lg:row-span-2  bg-cyan-300`}>
          <Navigation />
        </div>
        <div className={`
          md:col-span-10 md:row-span-4
          lg:col-span-10 lg:row-span-4  h-screen `}>
          {children}
        </div>
      </section>
            
       
          
    </main>
  )
}
