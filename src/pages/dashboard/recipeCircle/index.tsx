import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '../../../utils/utils';
import { Images } from '../../../assets';

const RecipeCircle = () => {
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const itemsRef = useRef([]);

  const recipes = [
    { id: 1, title: "Midday Fuel", img: Images.dish1, pos: "top-left" },
    { id: 2, title: "Morning Boost", img: Images.dish3, pos: "top-right" },
    { id: 3, title: "Evening Snack", img: Images.dish3, pos: "bottom-left" },
    { id: 4, title: "Dinner Delight", img: Images.dish4, pos: "bottom-right" },
    { id: 5, title: "Dessert Time", img: Images.dish5, pos: "top-center" },
    { id: 6, title: "Late Night Treat", img: Images.dish6, pos: "bottom-center" },
  ];

  const handleRecipeClick = (id, index) => {
    if (activeId === id) {
      // If clicking the one already in center, send it back
      reverseAnimation(index);
      setActiveId(null);
      return;
    }

    // If another one is active, send it back first
    if (activeId !== null) {
      const prevIndex = recipes.findIndex(r => r.id === activeId);
      reverseAnimation(prevIndex);
    }

    // Move new one to center
    moveToCenter(index);
    setActiveId(id);
  };

  const moveToCenter = (index) => {
    const item = itemsRef.current[index];
    const center = centerRef.current;

    // Calculate the distance between the item and the center
    const itemRect = item.getBoundingClientRect();
    const centerRect = center.getBoundingClientRect();

    const deltaX = (centerRect.left + centerRect.width / 2) - (itemRect.left + itemRect.width / 2);
    const deltaY = (centerRect.top + centerRect.height / 2) - (itemRect.top + itemRect.height / 2);

    gsap.to(item, {
      x: deltaX,
      y: deltaY,
      scale: 3, // Adjust based on your center circle size relative to small icons
      duration: 0.8,
      ease: "power3.inOut",
      zIndex: 50,
    });

    // Fade out the text labels of the specific item
    gsap.to(item.querySelectorAll('.recipe-text'), { opacity: 0, duration: 0.3 });
  };

  const reverseAnimation = (index) => {
    const item = itemsRef.current[index];
    gsap.to(item, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.inOut",
      zIndex: 1,
    });
    gsap.to(item.querySelectorAll('.recipe-text'), { opacity: 1, duration: 0.3 });
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#4A7C6B] flex items-center justify-center overflow-hidden">
      
      {/* Center Circle Placeholder */}
      <div 
        ref={centerRef}
        className="w-[300px] h-[300px] border-2 border-dashed border-white/30 rounded-full flex items-center justify-center"
      >
        <div className="text-center text-white p-10 z-0">
          <h2 className="text-3xl font-poppins">Your Favourite Dish, Served Healthier</h2>
          <p className="text-sm opacity-60">Click on the dish to view here</p>
        </div>
      </div>

      {/* Recipe Items */}
      <div className="absolute inset-0 pointer-events-none">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            ref={el => itemsRef.current[index] = el}
            onClick={() => handleRecipeClick(recipe.id, index)}
            className={cn(
                "absolute pointer-events-auto cursor-pointer flex flex-col items-center",
                recipe.pos === "top-left" && "top-20 left-20",
                recipe.pos === "top-right" && "top-20 right-20",
                recipe.pos === "bottom-left" && "bottom-20 left-20",
                recipe.pos === "bottom-right" && "bottom-20 right-20",
                recipe.pos === "top-center" && "top-20 left-1/2 -translate-x-1/2",
                recipe.pos === "bottom-center" && "bottom-20 left-1/2 -translate-x-1/2",
                // add other positions...
            )}
          >
            <img src={recipe.img} className="w-20 h-20 rounded-full shadow-xl" alt={recipe.title} />
            <div className="recipe-text mt-2 text-center text-white">
              <p className="font-bold">{recipe.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCircle;
