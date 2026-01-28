import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '../../../utils/utils';
import { Images } from '../../../assets';
const AnimatedPopup = () => {
const [selectedGoal, setSelectedGoal] = useState(null);
  
  const overlayRef = useRef();
  const modalRef = useRef();
  const imageRef = useRef();

  // GSAP Entrance Animation
  const openPopup = (goal) => {
    setSelectedGoal(goal);
    
    const tl = gsap.timeline();

    // 1. Show the overlay
    tl.to(overlayRef.current, { 
      display: 'flex', 
      opacity: 1, 
      duration: 0.4 
    });

    // 2. Pop the modal forward
    tl.fromTo(modalRef.current, 
      { scale: 0.8, y: 50, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.2" // Start slightly before overlay finishes
    );

    // 3. Slide the product image in from the right
    tl.fromTo(imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  };

  const closePopup = () => {
    const tl = gsap.timeline({
      onComplete: () => setSelectedGoal(null)
    });

    tl.to(modalRef.current, { scale: 0.9, opacity: 0, duration: 0.3, ease: "power2.in" });
    tl.to(overlayRef.current, { opacity: 0, display: 'none', duration: 0.3 });
  };

  const goals = [
    { 
        id: 1,
        title: "GUT HEALTH",
        desc: "Happy gut, Healthier you so that you live life to the fullest, everyday.",
        img: Images.gutHealth ,
        bgImg: Images.gutHealth 
    },
    {
        id: 2,
        title: "WEIGHT MANAGEMENT",
        desc: "Savour the goodness with smart management.",
        img: Images.weights,
        bgImg: Images.weights
    },
    {
        id: 3,
        title: "ACTIVE LIFESTYLE",
        desc: "Stay active, feel unstoppable and make every moment count. Click to read more",
        img: Images.peopleOnCouch,
        bgImg: Images.peopleOnCouch
    },
  ];

  return (
    <div className="py-8 md:py-20 pl-[24px] md:pl-0 ">
      {/* Grid of Cards */}
      <div 
      className={cn(
          "flex gap-6",
          "overflow-x-auto pb-4 scrollbar-hide", 
          "snap-x snap-mandatory",                
          "md:justify-center md:overflow-visible"
      )}
      >
        {goals.map((goal) => (
            <div
            className={cn("rounded-[20px]")}
             style={{
                backgroundImage:`url(${goal?.bgImg})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                position:'relative'
             }}
            >
                <div 
            key={goal.id}
            onClick={() => openPopup(goal)}
            className="w-[299px] h-[218px] md:w-[380px] md:h-[277px] rounded-[20px] overflow-hidden cursor-pointer relative group border border-white/10"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-2xl font-poppins uppercase">{goal.title}</h3>
              <p className="text-white/60 text-sm italic">Click to read more</p>
            </div>
          </div>
            </div>
          
        ))}
      </div>

      {/* GSAP MODAL OVERLAY */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[100] hidden items-center justify-center w-[100%] md:w-full mx-auto"
      >
        <div className=" jiraya absolute inset-0" onClick={closePopup} />

        {/* Modal Box */}
        <div 
            className={cn("w-[100%] md:w-full")}
            style={{
                backgroundImage:`url(${selectedGoal?.bgImg})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                position:'relative'
            }}
        
        >
            <div className="absolute inset-0 bg-black/60 z-0"></div>

             <div 
                ref={modalRef}
                className={cn(
                  "relative w-[100%] md:w-full  md:h-[500px] bg-transparent border border-white/10  overflow-hidden shadow-2xl",
                  "flex  flex-col md:flex-row"
                
                )}
                >
                {/* Close Icon */}
                <button 
                    onClick={closePopup}
                    className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl z-50 transition-colors"
                >
                    ✕
                </button>

                {/* Left Content */}
                <div className="flex-1 p-16 flex flex-col justify-center">
                    <h2 className="text-white text-6xl font-poppins mb-6 leading-tight uppercase">
                    {selectedGoal?.title}
                    </h2>
                    <p className="text-white/70 text-lg font-poppins mb-10 max-w-md">
                    {selectedGoal?.desc}
                    </p>
                    <button className="w-fit px-10 py-3 border border-white rounded-full text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Explore more →
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="flex-1  flex items-center justify-center p-10 relative">
                    <img 
                    ref={imageRef}
                    src={selectedGoal?.img} 
                    alt="Product" 
                    className="max-h-[80%] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                    />
                </div>
            </div>
          
           
        </div>
        
      </div>
    </div>
  );
};

export default AnimatedPopup
