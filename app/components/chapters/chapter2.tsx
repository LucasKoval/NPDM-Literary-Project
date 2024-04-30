'use client';

import { useState, useEffect } from 'react';
import Post9 from '../posts/post9';

export default function Chapter2() {
   let currentDate = new Date();
   let newPostDate = new Date('2024-05-01T16:00:00');
   let targetDate = new Date('2024-05-01T16:00:00').getTime();
   const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
   const [showNewPost, setShowNewPost] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         let newTimeLeft = targetDate - Date.now();
         setTimeLeft(newTimeLeft);

         if (newTimeLeft <= 0) {
            setShowNewPost(true);
         }
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, [showNewPost]);

   return <>{showNewPost && <Post9 />}</>;
}
