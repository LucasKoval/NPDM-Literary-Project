'use client';

import { useState, useEffect } from 'react';
import { CountdownSection, CountdownTitle } from './countdown-timer-styles';
import { Break } from './posts/posts-styles';

const CountdownTimer: React.FC = () => {
   const currentDate = new Date();
   const targetDate = new Date('2024-09-01T16:00:00');
   const targetDateTime = new Date('2024-09-01T16:00:00').getTime();
   const nextPostDate: any = new Date('2024-09-01T16:00:00');
   /* Next date to this one: 2024-09-01T16:00:00 */
   const [timeLeft, setTimeLeft] = useState(targetDateTime - Date.now());
   const [newPostTitle, setNewPostTitle] = useState('ESCRITOR'); // Current Post Title here
   let showNewPost: boolean = false;

   if (currentDate >= targetDate) {
      showNewPost = true;
   }

   useEffect(() => {
      let newTimeLeft: any;

      const interval = setInterval(() => {
         newTimeLeft = targetDateTime - Date.now();
         setTimeLeft(newTimeLeft);

         if (newTimeLeft <= 0) {
            newTimeLeft = nextPostDate - Date.now();
            setTimeLeft(newTimeLeft);
            setNewPostTitle('ESCRITOR'); // New Post Title here
            /* Next title to this one: ESCRITOR */

            clearInterval(interval);
         }
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, [targetDateTime]);

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
