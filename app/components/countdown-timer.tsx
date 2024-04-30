'use client';

import { useState, useEffect } from 'react';
import { CountdownSection, CountdownTitle } from './countdown-timer-styles';
import { Break } from './posts/posts-styles';

const CountdownTimer: React.FC = () => {
   const currentDate = new Date();
   const newPostDate = new Date('2024-05-01T16:00:00');
   const nextPostDate: any = new Date('2024-05-16T22:00:00');
   const targetDate = new Date('2024-05-01T16:00:00').getTime();
   const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
   const [newPostTitle, setNewPostTitle] = useState('PILOTO y OUT');
   let showNewPost: boolean = false;

   if (currentDate >= newPostDate) {
      showNewPost = true;
   }

   useEffect(() => {
      let newTimeLeft: any;

      const interval = setInterval(() => {
         newTimeLeft = targetDate - Date.now();
         setTimeLeft(newTimeLeft);

         if (newTimeLeft <= 0) {
            newTimeLeft = nextPostDate - Date.now();
            setTimeLeft(newTimeLeft);
            setNewPostTitle('EGOL');

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
            {newPostTitle} <Break className="mobile" />
            se libera en <Break className="mobile" /> {formatTime(timeLeft)}
         </CountdownTitle>
      </CountdownSection>
   );
};

export default CountdownTimer;
