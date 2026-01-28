import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icons, Images } from '../../../assets'
import { cn } from '../../../utils/utils'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const headRoutes = [
    { name: "Home", path: "/" },
    { name: "Our Products", path: "/products" },
    { name: "FAQs", path: "/faq" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact us", path: "/contact" },
  ]

  return (
    <>
      <nav className={cn(
        'fixed top-0 inset-x-0 z-50',
        'flex items-center justify-between',
        'px-6 md:px-[44px] py-2 bg-transparent',
        'w-full'
      )}>
       
        <div
          style={{
            backgroundImage: `url(${Images.uplifeLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '86px',
            height: '80px',
          }}
        />

        
        <div className="hidden md:flex gap-[24px] justify-end flex-1">
          {headRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) => cn(
                "group flex items-center justify-center py-[7px] px-[16px] transition-all rounded-[30.421px] border-white bg-black/50 backdrop-blur-[5px]",
                isActive ? 'border-[0.8px] border-white' : 'hover:border-[0.8px] hover:border-white'
              )}
            >
              <span className="text-white font-poppins text-[16px] group-hover:text-bright-blue transition-colors">
                {route.name}
              </span>
            </NavLink>
          ))}
        </div>

        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden z-[60] w-[34px] h-[34px] flex items-center justify-center rounded-[3.579px] border-[0.716px] border-white bg-[#2d2d2d40]'
        >
          <img className='w-5 h-5' src={isOpen ? Icons.cancel : Icons.menu} alt="menu" />
        </button>

      
        <div className={cn(
          "fixed inset-0 bg-black/90 backdrop-blur-lg transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {headRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-poppins"
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Header



// import { NavLink } from 'react-router-dom'
// import { Icons, Images } from '../../../assets'
// import { cn } from '../../../utils/utils'

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)
// const headRoutes=[
//     {
//         name:"Home",
//         path:"/"
//     },
//     {
//         name:"Our Products",
//         path:"/products"
//     },
//     {
//         name:"FAQs",
//         path:"/faq"
//     },
//     {
//         name:"Blogs",
//         path:"/blogs"
//     },
//     {
//         name:"Contact us",
//         path:"/contact"
//     },

// ]

//   return (
//     <div className={cn(
//         'fixed top-0 inset-x-0 z-50', 
//         'flex items-center justify-between', 
//         'px-[44px] py-2 bg-transparent', 
//         'w-full ' 
//         )}>
//       <div 
//       //   className={cn("w-[86px] height-[100px]")}
//         style={{
//           backgroundImage:`url(${Images.uplifeLogo})`,
//           backgroundSize:'cover',
//           backgroundRepeat:'no-repeat',
//           backgroundPosition:'center',
//           width:'86px',
//           height:'100px',
//           // boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.55)'

//         }}
//         >
//           {/* <img src={Images.uplifeLogo} alt="" /> */}
//       </div>
//       <div className={cn(" w-[60%] ")}>
//         <div className={cn("flex gap-[24px] w-full justify-end ")}>
//             {
//                 headRoutes?.map((route)=>(
//                 <NavLink to={route.path} className={({ isActive }) => `
//                 group flex items-center justify-center py-[7px] px-[16px]  max-w-[141px] transition-all ] rounded-[30.421px] 
//                 border-white bg-black/50 backdrop-blur-[5px]
//                 ${isActive ? 'border-[0.8px]  border-white' : 'hover:border-[0.8px]  hover:border-white'}
//                 `}>
//                     {({ isActive }) => (
//                         <>                        
//                             <span className={`
//                                 font-medium transition-colors font-poppins text-[16px] leading-[16px] font-[400] 
//                                 ${isActive ? 'text-white' : 'text-white group-hover:text-bright-blue'}
//                             `}>
//                                 {route.name}
//                             </span>
//                         </>
//                     )}
                    
                    
//             </NavLink>
//                 ))
//             }

            
//         </div>
//       </div>

//       <div className='menu block md:hidden'>
//         <div className='w-[34px] h-[34px] rounded-[3.579px] border-[0.716px] border-solid border-white bg-[#2d2d2d40]'>
//           <img className='w-full h-full' src={Icons.menu} alt="" />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Header
