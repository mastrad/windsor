"use client";

import React, { useEffect, useRef } from 'react';

// Your existing brands data
export const brands = [
  {
    id: 1,
    src: "/assets/images/brands/world-taekwondo_165x48.svg",
    alt: "World Taekwondo",
  },
  {
    id: 2,
    src: "/assets/images/brands/british-taekwondo_165x48.svg",
    alt: "British Taekwondo",
  },
  {
    id: 3,
    src: "/assets/images/brands/kukkiwon_165x48.svg",
    alt: "Kukkiwon",
  },
  {
    id: 4,
    src: "/assets/images/brands/london-taekwondo_165x48.svg",
    alt: "London Taekwondo",
  },
];

// Original static component (keeping for backward compatibility)
export const Brands = () => {
  return (
    <div className="brands-static d-flex flex-wrap align-items-center justify-content-center gap-4">
      {brands.map((brand) => (
        <div key={brand.id} className="brand-item">
          <img src={brand.src} alt={brand.alt} />
        </div>
      ))}
    </div>
  );
};

// New scrolling component
const ScrollingLogos = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Make sure we have the container and the logos are loaded
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const logosContainer = container.querySelector('.logos-container');
    
    // Clone the logos to create a seamless loop
    const originalLogos = logosContainer.innerHTML;
    logosContainer.innerHTML = originalLogos + originalLogos;
    
    // Set the animation parameters
    let scrollPosition = 0;
    
    // Animation function
    const animate = () => {
      scrollPosition += 0.5; // Adjust for speed
      
      // Reset when first set of logos is out of view
      const firstSetWidth = logosContainer.clientWidth / 2;
      if (scrollPosition >= firstSetWidth) {
        scrollPosition = 0;
      }
      
      // Apply the transform
      logosContainer.style.transform = `translateX(-${scrollPosition}px)`;
      
      requestAnimationFrame(animate);
    };
    
    // Start the animation
    const animationId = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="scrolling-logos-wrapper overflow-hidden" ref={containerRef}>
      <div className="logos-container flex gap-8 py-4">
        {brands.map((brand) => (
          <div key={brand.id} className="logo-item flex-shrink-0">
            <img 
              src={brand.src} 
              alt={brand.alt} 
              style={{ width: '165px', height: '48px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Default export is the scrolling version
export default ScrollingLogos;