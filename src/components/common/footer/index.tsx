import { cn } from '../../../utils/utils'
import { Images } from '../../../assets'

const Footer = () => {
  return (
    <div className={cn("w-full md:h-[533px] bg-[#457E7F] md:px-[64px] px-[31px]")}>
        <div className={cn("flex flex-col md:flex-row justify-between items-center ")}>
            <div className={cn("w-[81px] h-[94px] md:w-[104px] md:h-[120px]")}>
              <img className={cn("w-full h-full")} src={Images.uplifeLogo} alt="" />
            </div>
            <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-[44px] gap-y-[30px] md:gap-[30px]")}>
                <h4 className={cn("text-white font-poppins text-[18px] md:text-[20px] font-[300] leading-normal")}>
                    About Uplife
                </h4>

                <h4 className={cn("text-white font-poppins text-[18px] md:text-[20px] font-[300] leading-normal")}>
                    Product Range
                </h4>

                <h4 className={cn("text-white font-poppins text-[18px] md:text-[20px] font-[300] leading-normal")}>
                    Recipe Collection
                </h4>

                <h4 className={cn("text-white font-poppins text-[18px] md:text-[20px] font-[300] leading-normal")}>
                   Blogs
                </h4>

                <h4 className={cn("text-white font-poppins text-[18px] md:text-[20px] font-[300] leading-normal")}>
                    Health Benefits
                </h4>

                <h4 className={cn("text-white font-poppins text-[18px] md:text-[20px] font-[300] leading-normal")}>
                    Store Locator
                </h4>

                <h4 className={cn("text-white font-poppins text-[18px] md:text-[20px] font-[300] leading-normal")}>
                    Customer Support
                </h4>


            </div>
        </div>

        <div className={cn("w-full flex justify-between items-center mt-[57px] md:mt-0")}>
            <div className={cn("")}>
                <h2 className={cn('text-white font-poppins text-[17px] md:text-[24px] font-[400] leading-normal')}>
                    Join the fitness movement
                </h2>
                <h4 className={cn("text-[#E9E9E9] font-poppins text-[12px] md:text-[18px] font-[300]")}>
                    Sign up to stay updated
                </h4>
                <div className={cn('flex justify-between items-center border-b-[1px] border-[#FFFFFF] py-[11px] mt-[21px]')}>
                    <p className={cn("text-[#E9E9E9] font-poppins text-[14px] font-light")}>Email address</p>
                    <span className={cn("text-[#E9E9E9] font-poppins text-[14px] font-light")}>→</span>
                </div>
            </div>
            <div className='hidden md:block'>
                <p className={cn("text-white font-poppins text-base font-light")}>
                    Customer Care
                    <br />
                    Toll-free: 1800-XXX-XXXX
                    <br />
                    Email: 
                    <span className={cn("text-white font-poppins text-base font-light underline decoration-solid underline-offset-auto")}>
                        care@uplifeindia.com
                    </span>
                </p>

            </div>
        </div>

        <div className={cn("flex flex-col md:flex-row justify-center md:justify-between items-center mt-[30px]")}>
                <div className={cn('hidden md:block text-[#E9E9E9] font-poppins text-sm font-light')}>
                From the house of India Gate - World's No.1 Basmati Rice Brand Privacy 
                <p>Policy | Terms of Service | Nutrition Information</p>
                
                </div>

                <div className={cn("flex gap-[30px]")}>
                    <div>
                        <img src={Images.facebook} alt="" />
                    </div>
                    <div>
                        <img src={Images.twitter} alt="" />
                    </div>
                    <div>
                        <img src={Images.instagram} alt="" />
                    </div>
                    <div>
                        <img src={Images.youtube} alt="" />
                    </div>
                </div>

                <div className='block md:hidden text-[#E9E9E9] text-[12px] font-light font-poppins text-center pt-4'>
                    Copyright © 2025 IndiaGate Foods | All Rights Reserved
                </div>
        </div>
      
    </div>
  )
}

export default Footer;