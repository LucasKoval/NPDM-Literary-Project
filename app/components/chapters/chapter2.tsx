'use client';

import { useState, useEffect } from 'react';
import Post9 from '../posts/post9';
import Post10 from '../posts/post10';
import Post11 from '../posts/post11';
import Post12 from '../posts/post12';
import Post13 from '../posts/post13';
import Post14 from '../posts/post14';

export default function Chapter2() {
   let currentDate = new Date();
   let newPostDate = new Date('2024-06-02T16:00:00');
   let targetDate = new Date('2024-06-02T16:00:00').getTime();
   /* Next date to this one: 2024-06-06T16:00:00 */
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

   return (
      <>
         <Post9 />
         <Post10 />
         <Post11 />
         <Post12 />
         <Post13 />
         <Post14 />
         {/* {showNewPost && <Post14 />} */}
      </>
   );
}
