import React from 'react';
import { Images } from '../../../assets';
import HoverOverlay from './HoverOverlay';

const TrendingContainer = () => {
  return (
    <div className="p-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
        
        {/* Large Video Card */}
        <div className="md:col-span-4 ">
          <HoverOverlay 
            overlayColor="bg-orange-600/50" 
            text="Watch Full Video"
          >
            <div className="bg-gray-200 rounded-3xl overflow-hidden aspect-video h-[394px] w-full">
              <img src={Images.YT1} className="w-full h-full object-cover" alt="Video thumbnail" />
            </div>
          </HoverOverlay>
        </div>

        {/* Billboard */}
        <div className="md:col-span-2">
          <HoverOverlay 
            overlayColor="bg-purple-600/50" 
            text="Explore Billboard"
          >
            <div className="bg-gray-300 rounded-3xl overflow-hidden h-full">
              <img src={Images.billboard} className="w-full h-full object-cover" alt="Billboard" />
            </div>
          </HoverOverlay>
        </div>

        {/* Second Video */}
        <div className="md:col-span-3">
          <HoverOverlay 
            overlayColor="bg-orange-600/50" 
            text="Trending Now"
          >
            <div className="bg-gray-200 rounded-3xl overflow-hidden aspect-video">
              <img src={Images.YT2} className="w-full h-full object-cover" alt="Video thumbnail" />
            </div>
          </HoverOverlay>
        </div>

        {/* Testimonial Card - No Overlay */}
        <div className="md:col-span-3 bg-[#e8f3ee] p-8 rounded-3xl flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
            <span className="font-bold">LOREM IPSUM</span>
          </div>
          <p className="text-gray-600 italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
        </div>

        {/* Blog Cards */}
        <div className="md:col-span-2">
          <HoverOverlay 
            overlayColor="bg-orange-600/50" 
            text="Oil Makes You Gain Weight"
          >
            <div 
              className="aspect-square rounded-3xl"
              style={{
                backgroundImage: `url(${Images.blog1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </HoverOverlay>
        </div>

        <div className="md:col-span-2">
          <HoverOverlay 
            overlayColor="bg-teal-600/50" 
            text="Healthy Living Tips"
          >
            <div 
              className="aspect-square rounded-3xl"
              style={{
                backgroundImage: `url(${Images.blog2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </HoverOverlay>
        </div>

        <div className="md:col-span-2">
          <HoverOverlay 
            overlayColor="bg-emerald-700/50" 
            text="Your New Super Power"
          >
            <div 
              className="aspect-square rounded-3xl"
              style={{
                backgroundImage: `url(${Images.blog3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </HoverOverlay>
        </div>

      </div>
    </div>
  );
};

export default TrendingContainer;


