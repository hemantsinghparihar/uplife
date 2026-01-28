import { Icons, Images, Videos } from '../../assets'
import Footer from '../../components/common/footer'
import SwiperCarousel from '../../components/common/SwiperCarousel'
import { cn } from '../../utils/utils'
import Accordion from './accordion'
import AnimatedPopup from './animatedPopup'
import CardAccordion from './cardAccordion'
import TrendingContainer from './trendingContainer'
import RecipeCircle from './recipeCircle'

const Dashboard = () => {
  const wellnessCards = [
    { id: 1, title: 'Card 1', img: Images.family, desc: 'Description 1' },
    { id: 2, title: 'Card 2', img: Images.family, desc: 'Description 2' },
    { id: 3, title: 'Card 3', img: Images.family, desc: 'Description 3' },
    { id: 4, title: 'Card 4', img: Images.family, desc: 'Description 4' },
  ];

 const accordionData = [
    {
        id:1,
        title:"What makes India Gate Uplife oils different from other cooking oils?",
        description:"India Gate Uplife oils are specially crafted to provide the perfect balance of taste and wellness. Our unique formulations include Gut Pro with digestive benefits and Lite for lighter cooking options. Each oil is made with high-quality ingredients and contains natural antioxidants and anti-inflammatory properties that support overall health while enhancing the flavor of your favorite dishes."
    },
     {
        id:2,
        title:"How does Gut Pro oil benefit digestive health?",
        description:"India Gate Uplife oils are specially crafted to provide the perfect balance of taste and wellness. Our unique formulations include Gut Pro with digestive benefits and Lite for lighter cooking options. Each oil is made with high-quality ingredients and contains natural antioxidants and anti-inflammatory properties that support overall health while enhancing the flavor of your favorite dishes."
    },
     {
        id:3,
        title:"Is India Gate Uplife Lite suitable for weight management?",
        description:"India Gate Uplife oils are specially crafted to provide the perfect balance of taste and wellness. Our unique formulations include Gut Pro with digestive benefits and Lite for lighter cooking options. Each oil is made with high-quality ingredients and contains natural antioxidants and anti-inflammatory properties that support overall health while enhancing the flavor of your favorite dishes."
    },
      {
        id:4,
        title:"What cooking methods work best with Uplife oils?",
        description:"India Gate Uplife oils are specially crafted to provide the perfect balance of taste and wellness. Our unique formulations include Gut Pro with digestive benefits and Lite for lighter cooking options. Each oil is made with high-quality ingredients and contains natural antioxidants and anti-inflammatory properties that support overall health while enhancing the flavor of your favorite dishes."
    }
 ]


  return (
    <div className='bg-white'>
      <section
       className={cn("relative w-full h-[100vh] md:h-[110vh] overflow-hidden")}
        // style={{
        //        backgroundImage:`url(${Images.heroBg})`,
        //        backgroundSize:'cover',
        //        backgroundRepeat:'no-repeat',
        //        backgroundPosition:'center',
        //        width:'100%',
        //        height:'110vh',
       
        //      }}
       >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={Videos.heroBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={cn("w-full h-[88%] md:h-[88%] relative z-10  ")}>
            <div 
            className={
              cn(
                "flex flex-col items-center md:flex-row md:items-center h-full w-full justify-center md:justify-between",
      "px-0 md:px-[44px] gap-8"

              )}>
                <div className='w-[287px] h-[245px] md:w-[466px] md:h-[400px]'><img src={Images.uplifeHeading} alt="UpLife Heading" /></div>
                <div className={cn("flex flex-col md:items-end gap-[6px] md:w-[658px] p-[10px] rounded-[10px] bg-black/30 backdrop-blur-[5px]")}>
                    <h1 className={cn("font-poppins text-[21px] font-[400] md:text-[40px]  text-white md:text-right leading-normal")}>
                        Life at pace with your ambitions
                    </h1>
                    <h6 className={cn("font-poppins text-base font-normal text-white md:text-right leading-normal")}>
                        Scientifically crafted solutions that make healthy living liberating.
                    </h6>
                </div>

            </div>
            
            <div className={cn("flex justify-end px-2 md:px-[37px] py-2 ")}>
                <div className={cn("w-[54px] h-[54px] md:w-[80px] md:h-[80px] ")}>
                    <img  className={cn("w-full h-full")} src={Images.whatsapp} alt="" />
                </div>
            </div>
        </div>

        

      </section>

      <section className={cn("pl-[24px] md:px-[47px]  py-[64px] flex flex-col gap-[60px] ")}>
        <h1 className={cn("text-black font-poppins text-[24px] md:text-[42px] font-[400] leading-[32px] md:leading-normal text-center")}>
            Wellness designed for your life
        </h1>
        <div className={cn("overflow-x-auto md:overflow-visible")}>
          <CardAccordion />
        </div>
        
      </section>

      <section>
        <h1 className={cn("text-[#2D2D2D] font-poppins text-[24px] md:text-[44px] font-[400] leading-normal text-center")}>
            Complex Goals. Simplified Solutions. Live Uplife
        </h1>
        <div 
        className={cn("")}
        >
            <AnimatedPopup/>
        </div>
      </section>

      <section
       className={cn("w-full md:px-[110px] py-[53px] md:h-[533px] " )}
      >
        <div  
        className={cn("bg-[#8D8D8D] w-full h-full md:px-[196px]")}
        >
            <div  className={cn("flex flex-col h-full px-[14px] md:px-[52px] justify-center items-center bg-white  ")}>
                <h4
                className={cn("text-[#2D2D2D] text-center font-poppins text-[17.43px] font-normal")}
                >
                    From the house of
                </h4>
                <h3
                className={cn("text-[#457E7F] text-center font-poppins text-[30.5px] italic font-medium")}>
                    From the house of
                </h3>
                <h1
                className={cn("text-[#2D2D2D] text-[37px] text-center font-poppins font-[600] leading-normal")}>
                    Basmati Rice Brand
                </h1>
                <span className={cn("text-center")}>
                  A journey rooted in tradition and refined with modern excellence.India Gate continues to define what quality means for families everywhere.
                </span>
            </div>
        </div>
      </section>

      <section className={cn("flex justify-center items-center md:px-[127px] px-[24px] py-[67px]")}>
        <div className={cn("w-full h-full " )}>
          <img src={Images.bannerImg} alt="" />
        </div>
      </section>

      {/* <section>
        <RecipeCircle/>
      </section> */}
 
      <section>
        <h1 className={cn("text-black md:text-[64px] text-[30px] font-poppins font-[400] leading-normal md:text-center ")}>
          What’s Trending At Uplife
          </h1>
        <TrendingContainer/>
      </section>

      <section
      className='py-[31px]'>
        <div 
                    className={cn("w-full md:h-[348px] ")}
                    style={{
                        backgroundImage:`url(${Images.groupTalkingHorizontal})`,
                        backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center',
                        position:'relative',
                        // height:'348px'
                    }}
                
                >
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
        
                     <div 
                        className="relative md:w-[90%] w-full h-full bg-transparent border border-white/10 flex overflow-hidden shadow-2xl"
                        >
                        
                        <div className="p-4 pt-[180px] md:p-16 flex flex-col justify-center items-center md:items-start">
                            <h2 className="text-white text-[22px] md:text-[44px] font-[400] font-poppins mb-6 leading-[34px] md:leading-normal text-center md:text-left ">
                            Real Stories, Real Wellness Wins
                            </h2>
                            <p className="text-white/70 text-[13px]  md:text-[18px] font-[300] font-poppins mb-10 max-w-md text-center md:text-left">
                           Discover inspiring transformation journeys, expert wellness tips, and delicious healthy recipes from families across India. Get practical insights that make your health goals achievable.
                            </p>
                            <button 
                            className="w-fit px-10 py-[5px] md:py-3 border border-white rounded-full text-white text-[14px] md:text-[20px] font-[400] font-poppins  tracking-widest cursor-pointer"
                            >
                            Explore more →
                            </button>
                        </div>
        
                        {/* Right Image Section */}
                        {/* <div className="flex-1  flex items-center justify-center p-10 relative">
                           
                        </div> */}
                    </div>
                  
                   
                </div>
      </section>

      <section className='py-[54px] px-[16px] md:px-[64px]'>
        <div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
                <h1>
                  Frequently Asked Questions  
                </h1>   
                <div className='search bar'>
                  <input type="text" placeholder="Search" className='md:w-[300px] h-[40px] '/>
                </div>            
          </div>

          <div>
              <Accordion data={accordionData} />
                             
          </div>

          <div className='flex justify-center items-center py-4 md:py-8'>
                    <button 
                        className="w-fit px-10 py-[5px] md:py-3 border border-black rounded-full text-black text-[14px] md:text-[20px] font-[400] font-poppins  tracking-widest cursor-pointer"
                        >
                        View More →
                        </button>
          </div>

        </div>
      </section>

      <section className='w-full '>
        <div>
          <div
        className=' pl-[24px] md:pl-[64px] md:pr-[64px] pb-[140px]' 
        style={{
            backgroundImage:`url(${Images.subtract})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            // backgroundPosition:'center',
            position:'relative',
            width:'100%',
            minHeight:'408px',
            // paddingLeft:'64px',
            // paddingRight:'64px',
            // paddingBottom:'140px'
        }}
        >
          <div className='pt-[80px]'>
            <h1 
              className={cn("text-white font-poppins  text-[27px] md:text-[48px] font -[300] md:font-[400] leading-[34px] md:leading-normal")}>
              Wellness That Fits Life
            </h1>
            <p 
            className={cn("text-white text-[14px] md:text-[26px] font-poppins font-[300] leading-normal")}
            >Everyday vitality made simple, guided by research and real life.</p>
          </div>  

          {/* carousel coponent comes here  */}


        <SwiperCarousel
            data={wellnessCards}
            slidesPerView={3}
            autoplay={false}
            renderItem={(item) => (
              <div
               style={{
                  backgroundImage:`url(${item.img})`,
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat',
                  // backgroundPosition:'center',
                  position:'relative',
                  borderRadius:'26px',
                 
              }}
              >
                <div 
                className={cn("absolute top-0 left-0 w-full h-full flex items-center justify-center")}
                >
                  <img src={Icons.play} alt="" />
                </div>
                <div className="bg-white/10  border border-white/20 p-6 rounded-[26px] text-white h-[250px] flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              </div>
              
            )}
          />

          <div className='absolute bottom-0 left-0 bg-[#457E7F] h-[100px] w-full'>

          </div> 
          {/* <img src={Images.subtract} alt="" /> */}

        </div>
        
        </div>
        
      </section>

      <Footer/>
    </div>
  )
}

export default Dashboard
