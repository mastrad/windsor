"use client";
import React, { useEffect, useRef } from 'react';

// Brand data (copied from your original brands file)
export const brands = [
  {
    id: 1,
    src: "/assets/images/brands/World-Taekwondo-Logo.png",
    alt: "World Taekwondo",
  },
  {
    id: 2,
    src: "/assets/images/brands/British-Taekwondo-logo.png",
    alt: "British Taekwondo",
  },
  {
    id: 3,
    src: "/assets/images/brands/Kukkiwon-logo.png",
    alt: "Kukkiwon",
  },
  {
    id: 4,
    src: "/assets/images/brands/London-Taekwondo-logo.png",
    alt: "London Taekwondo",
  },
];

const ScrollingLogos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const logosContainer = container.querySelector('.logos-container');
    
    // Clone the logos to create a seamless loop
    const originalLogos = logosContainer.innerHTML;
    logosContainer.innerHTML = originalLogos + originalLogos;
    
    let scrollPosition = 0;
    
    const animate = () => {
      scrollPosition += 0.5;
      const firstSetWidth = logosContainer.clientWidth / 2;
      if (scrollPosition >= firstSetWidth) {
        scrollPosition = 0;
      }
      
      logosContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Inline styles to guarantee horizontal layout
  const wrapperStyle = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  };

  const logosContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  };

  const logoItemStyle = {
    display: 'inline-block',
    marginLeft: '2rem',
    marginRight: '2rem',
    flexShrink: 0
  };

  return (
    <div className="scrolling-logos-wrapper" ref={containerRef} style={wrapperStyle}>
      <div className="logos-container" style={logosContainerStyle}>
        {brands.map((brand) => (
          <div key={brand.id} className="logo-item" style={logoItemStyle}>
            <img
              src={brand.src}
              alt={brand.alt}
              style={{ width: '165px', height: '48px', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;