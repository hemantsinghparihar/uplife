import gsap from 'gsap';
import { useRef, useState } from 'react';
import { Images } from '../../../assets';
import { cn } from '../../../utils/utils';

const CardAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const verticalRef = useRef<(HTMLDivElement | null)[]>([]);

  // The Animation Logic
  const animateCards = (index) => {
    setActiveIndex(index);
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "expo.out" }
    });

    cardsRef.current.forEach((card, i) => {
      const isTarget = i === index;
      
      // 1. Animate Card Width (Flex)
      tl.to(card, { flex: isTarget ? 5 : 1 }, 0);

      // 2. Animate Horizontal Content (Fade & Slide)
      tl.to(contentRef.current[i], {
        opacity: isTarget ? 1 : 0,
        y: isTarget ? 0 : 20,
        display: isTarget ? 'flex' : 'none'
      }, 0);

      // 3. Animate Vertical Title (Fade & Slide)
      tl.to(verticalRef.current[i], {
        opacity: isTarget ? 0 : 1,
        scale: isTarget ? 0.8 : 1,
        display: isTarget ? 'none' : 'flex'
      }, 0);
    });
  };

  const handleMouseEnter = (index) => animateCards(index);
  
  // Resets to the first card when mouse leaves the entire container
  const handleMouseLeave = () => animateCards(0);

  const cardData = [
    { title: "Lighter meals, sustained energy", desc: "Eating lighter, balanced meals helps keep your body active...", img: Images.menEating },
    { title: "Support your digestion", desc: "Healthy digestion keeps your body calm and settled...", img: Images.girlWithCup },
    { title: "Mindful habits, calmer life", desc: "Small shifts lead to big changes...", img: Images.menPresenting },
    { title: "Consistent choices, limitless life", desc: "Consistent choices lead to a better life...", img: Images.yoga },
    { title: "Build Daily balance", desc: "Balance is the key to a healthy lifestyle...", img: Images.menWriting },
    { title: "Lifelong care, lasting wellness", desc: "Invest in your health for a better future...", img: Images.groupTalking },
  ];

  return (
    <div 
      className={cn(
        "flex w-[700px] md:w-full h-[279px] md:h-[550px] gap-4",
        " px-4 md:px-0",
        "snap-x snap-mandatory scrollbar-hide"
      )} 
      onMouseLeave={handleMouseLeave} // Trigger reset here
    >
      {cardData.map((card, index) => (
        <div
          key={index}
          ref={(el) => { cardsRef.current[index] = el; }}
          onMouseEnter={() => handleMouseEnter(index)}
          className={cn(
            "relative overflow-hidden rounded-[18px] cursor-pointer bg-neutral-900",
            index === 0 ? "flex-[5]" : "flex-[1]"
          )}
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Horizontal Content - Ref added for GSAP */}
          <div 
            ref={(el) => { contentRef.current[index] = el; }}
            className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            <h3 className="font-poppins text-white text-2xl font-normal mb-4 leading-tight">
              {card.title}
            </h3>
            <p className="font-poppins text-white/70 text-sm max-w-[350px]">
              {card.desc}
            </p>
          </div>

          {/* Vertical Title - Ref added for GSAP */}
          <div 
            ref={(el) => { verticalRef.current[index] = el; }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: index === 0 ? 0 : 1 }}
          >
            <span className="font-poppins text-white text-lg whitespace-nowrap -rotate-90 origin-center tracking-wider uppercase">
              {card.title.split(',')[0]}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardAccordion;

