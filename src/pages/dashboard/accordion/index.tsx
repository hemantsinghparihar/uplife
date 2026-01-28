import React, { useState } from 'react'
import { cn } from '../../../utils/utils'

interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full")}>
      {data.map((item, index) => (
        <div key={item.id} 
        className={cn("flex flex-col md:flex-row gap-4 w-full px-[16px] py-4 border-b border-gray-200  ",
            openAccordionIndex === index ? "rounded-t-[23.195px] bg-[#D9EBE2]" : "rounded-[0]"
        )}>
          <div>
            <h1 className={cn("text-[rgba(60, 60, 67, 0.50)] md:text-black font-poppins text-[24px] md:text-[41px] font-[400] md:font-[700] leading-[46px] flex gap-4 w-full")}>
              0{item.id}
            </h1>
          </div>
          
          <div className={cn("w-full")}>
            <div 
              className={cn("flex  items-center justify-between w-full cursor-pointer ")} 
              onClick={() => handleToggle(index)}
            >
              <h1 className={cn("text-[23px] font-[400] text-black leading-[28px] font-poppins w-[90%] md:w-full")}>
                {item.title}
              </h1>
              
              <button 
                className={cn(
                  "rounded-full w-[32px] h-[32px] bg-[#F3F5F6] flex justify-center items-center transition-transform duration-300",
                  openAccordionIndex === index && "rotate-45 bg-black md:bg-[#20695F]"
                )}
              >
                <div className={cn(
                    "text-black text-[24px] font-[700] leading-[26px]",
                    openAccordionIndex === index && "text-white"
                    )}>
                  +
                </div>
              </button>
            </div>
            
            {/* Animated content */}
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openAccordionIndex === index ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
              )}
            >
              <p className={cn("text-[rgba(60,60,67,0.85)] text-[12px] md:text-[17px] font-[400] leading-[28px] font-poppins")}>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion




// import React, { useState } from 'react'
// import { cn } from '../../../utils/utils'

// const Accordion = ({currIndex,item}:any) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleToggle=(currIndex:number)=>{

//     }
//   return (
//     <div className={cn("flex gap-4 w-full py-4")}>
//         <div>
//            <h1
//              className={cn(" text-black font-poppins text-[41px] font-[700] leading-[46px] flex gap-4 w-full ")}
//            >
//                 0{item.id}
//             </h1>
//         </div>
//         <div className={cn("w-full")}>
//             <div className={cn("flex gap-4 items-center justify-between w-full")}>
//                 <h1
//                 className={cn("text-[23px] font-[400] text-black leading-[28px] font-poppins")}
//                 >
//                     {item.title}
//                 </h1>
//                 <button 
//                 className=
//                 {
//                     cn("rounded-full w-[32px] h-[32px] bg-[#F3F5F6]   flex  justify-center")
//                 }
//                 onClick={() => handleToggle(currIndex)}
//                 >
//                     <div
//                     className={cn("text-black text-[24px] font-[700] leading-[26px]")}
//                     >
//                         {isOpen ? "x" : "+"}
//                     </div>
                  
//                 </button>
//             </div>
            
//             {isOpen && (
//                 <p 
//                 className={cn("text-[rgba(60, 60, 67, 0.85) text-[17px] font-[400] leading-[28px] font-poppins")}
//                 >
//                     {item.description}
//                 </p>
//             )}
//         </div>
//     </div>
//   )
// }

// export default Accordion