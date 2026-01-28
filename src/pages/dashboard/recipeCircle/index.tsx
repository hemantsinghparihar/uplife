import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '../../../utils/utils';
import { Images } from '../../../assets';

const RecipeCircle = () => {
  const [activeId, setActiveId] = useState(null);
  const centerRef = useRef(null);
  const itemsRef = useRef([]);

  const recipes = [
    { id: 1, title: "Midday Fuel", subtitle: "Power Through Noon", img: Images.dish1, side: "left", row: "top" },
    { id: 2, title: "Post-Recovery", subtitle: "Restore with Care", img: Images.dish2, side: "left", row: "middle" },
    { id: 3, title: "Evening Treat", subtitle: "Tasty, Light, Lovely", img: Images.dish3, side: "left", row: "bottom" },

    { id: 4, title: "Morning Boost", subtitle: "Energize Your Day", img: Images.dish4, side: "right", row: "top" },
    { id: 5, title: "Weekend Bliss", subtitle: "Guilt-Free Joy", img: Images.dish5, side: "right", row: "middle" },
    { id: 6, title: "Pre-Workout", subtitle: "Fuel Before Move", img: Images.dish6, side: "right", row: "bottom" },
  ];

  const handleRecipeClick = (id, index) => {
    if (activeId === id) {
      resetItem(index);
      setActiveId(null);
      return;
    }

    if (activeId !== null) {
      const prevIndex = recipes.findIndex(r => r.id === activeId);
      resetItem(prevIndex);
    }

    moveToCenter(index);
    setActiveId(id);
  };

  const moveToCenter = (index) => {
    const item = itemsRef.current[index];
    const center = centerRef.current;

    const itemRect = item.getBoundingClientRect();
    const centerRect = center.getBoundingClientRect();

    const dx = centerRect.left + centerRect.width / 2 - (itemRect.left + itemRect.width / 2);
    const dy = centerRect.top + centerRect.height / 2 - (itemRect.top + itemRect.height / 2);

    gsap.to(item, {
      x: dx,
      y: dy,
      scale: 3,
      zIndex: 50,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(item.querySelector('.recipe-text'), { opacity: 0, duration: 0.3 });
  };

  const resetItem = (index) => {
    const item = itemsRef.current[index];
    gsap.to(item, {
      x: 0,
      y: 0,
      scale: 1,
      zIndex: 1,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(item.querySelector('.recipe-text'), { opacity: 1, duration: 0.3 });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#5E8F8A] flex flex-col md:flex-row items-center justify-center overflow-hidden">

        <div className="md:hidden w-full overflow-x-auto px-4 mb-8">
        <div className="flex gap-6 w-max">
            {recipes.map((recipe, index) => (
            <div
                key={recipe.id}
                ref={el => itemsRef.current[index] = el}
                className="flex-shrink-0 flex flex-col items-center text-white w-[180px]"
            >
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-3">
                <img
                    src={recipe.img}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                />
                </div>

                <div className="text-center">
                <p className="text-[18px] font-[400] font-poppins">
                    {recipe.title}
                </p>
                <p className="text-[12px] font-[300] opacity-70">
                    {recipe.subtitle}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>


   
      <div>
        <div
        ref={centerRef}
        className="relative md:w-[550px] md:h-[550px] w-[327px] h-[327px] rounded-full border border-dashed border-white/40 flex items-center justify-center"
      >
        <div className="text-center text-white ">
          <h2 className=" text-[28px] md:text-[48px] font-[400] leading-[35px] md:leading-[60px] font-poppins leading-snug">
            Your Favourite Dish,<br />Served Healthier
          </h2>
          <p className="text-[14px] font-[300] font-poppins opacity-70 mt-2">
            Click on the dish to view here
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-6">
        <button className={cn(
            "text-[18px] text-center text-[#2D2D2D] font-[400] font-poppins",
            "rounded-[6.75px] px-[24px] py-[10px] bg-white"
            )}>
            Explore All Recipes
        </button>
      </div>
      </div>
      


    <div className="hidden md:block">

      {recipes.map((recipe, index) => (
        <div
          key={recipe.id}
          ref={el => itemsRef.current[index] = el}
        //   onClick={() => handleRecipeClick(recipe.id, index)}
          className={cn(
            " absolute  cursor-pointer flex flex-col items-center text-white",
            recipe.side === "left" && "left-[80px] text-right",
            recipe.side === "right" && "right-[80px] text-left",

            recipe.row === "top" && "top-[40px]",
            recipe.row === "middle" && "top-1/2 -translate-y-1/2",
            recipe.row === "bottom" && "bottom-[40px]",
          )}
        >
            <div className={cn("w-[150px] h-[150px] rounded-full flex items-center justify-center")}>

                <img
                    src={recipe.img}
                    alt={recipe.title}
                    className="w-full h-full rounded-full  "
                />
            </div>

          <div className="recipe-text">
            <p className=" text-[24px] font-[400] font-poppins leading-normal">{recipe.title}</p>
            <p className="  text-[14px] font-[300] font-poppins opacity-70 leading-normal">{recipe.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
      
    </div>
  );
};

export default RecipeCircle;

