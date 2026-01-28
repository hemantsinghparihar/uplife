import React from 'react';

const HoverOverlay = ({ 
  overlayColor = 'bg-black/60', 
  text, 
  textColor = 'text-white',
  children 
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
      {children}
      
      {/* Overlay - hidden by default, visible on hover */}
      <div className={`
        absolute inset-0 ${overlayColor} 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 
        flex items-center justify-center p-6
      `}>
        <h3 className={`
          ${textColor} font-bold text-xl md:text-2xl 
          uppercase text-center leading-tight
          transform translate-y-4 group-hover:translate-y-0
          transition-transform duration-300
        `}>
          {text}
        </h3>
      </div>
    </div>
  );
};

export default HoverOverlay;
