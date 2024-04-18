'use client';

import { useState, useEffect } from 'react';
import { CountdownSection, CountdownTitle } from './countdown-timer-styles';
import { Break } from './posts/posts-styles';

const CountdownTimer: React.FC = () => {
   const targetDate = new Date('2024-04-21T04:00:00').getTime();
   const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

   useEffect(() => {
      const interval = setInterval(() => {
         const newTimeLeft = targetDate - Date.now();
         setTimeLeft(newTimeLeft);

         if (newTimeLeft <= 0) {
            clearInterval(interval);
         }
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, [targetDate]);

   const formatTime = (time: number): string => {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
   };

   return (
      <CountdownSection>
         <CountdownTitle>
            EPODOS <Break className="mobile" />
            se libera en <Break className="mobile" /> {formatTime(timeLeft)}
         </CountdownTitle>
      </CountdownSection>
   );
};

export default CountdownTimer;
