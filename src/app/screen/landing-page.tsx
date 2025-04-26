'use client';

import React from 'react';

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
  const gradientStyles = {
    background:
      'radial-gradient(at 71% 37%, rgb(252, 252, 252) 0px, rgba(0, 0, 0, 0) 70%) no-repeat scroll 74.02% 50% / 200% padding-box border-box, radial-gradient(at 60% 30%, rgb(255, 110, 127) 0px, rgba(0, 0, 0, 0) 50%) no-repeat scroll 74.02% 50% / 200% padding-box border-box, radial-gradient(at 20% 30%, rgb(109, 213, 237) 0px, rgba(0, 0, 0, 0) 80%) no-repeat scroll 74.02% 50% / 200% padding-box border-box, radial-gradient(at 40% 30%, rgb(191, 233, 255) 0px, rgba(0, 0, 0, 0) 90%) no-repeat scroll 74.02% 50% / 200% padding-box border-box, radial-gradient(at 80% 50%, rgb(109, 237, 149) 0px, rgba(0, 0, 0, 0) 70%) no-repeat scroll 74.02% 50% / 200% padding-box border-box, rgba(0, 0, 0, 0) radial-gradient(at 20% 30%, rgb(109, 213, 237) 0px, rgba(0, 0, 0, 0) 90%) no-repeat scroll 74.02% 50% / 200% padding-box border-box',
    backgroundSize: '200%',
    animation: 'color 10s linear infinite',
    width: '100%',
    height: '100%',
  };
  const color = `
    @keyframes color {
      0% {
        background-position-x: 100%;
      }
      50% {
        background-position-x: 0%;
      }
      100% {
        background-position-x: 100%;
      }
    }
  `;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(color));
  document.head.appendChild(style);

  return (
    <div className='relative min-h-screen overflow-hidden bg-transparent'>
      <div className='relative z-30' style={gradientStyles}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
