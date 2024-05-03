'use client';

import { useEffect } from 'react';

const ScrollPosition = () => {
   const handleScroll = () => {
      localStorage.setItem('scrollPosition', window.scrollY.toString());
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      const savedScrollPosition = localStorage.getItem('scrollPosition');

      if (savedScrollPosition) {
         window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return null;
};

export default ScrollPosition;
