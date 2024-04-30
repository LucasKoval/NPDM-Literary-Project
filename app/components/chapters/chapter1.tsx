'use client';

import { useState, useEffect } from 'react';
import Post1 from '../posts/post1';
import Post2 from '../posts/post2';
import Post3 from '../posts/post3';
import Post4 from '../posts/post4';
import Post5 from '../posts/post5';
import Post6 from '../posts/post6';
import Post7 from '../posts/post7';
import Post8 from '../posts/post8';

export default function Chapter1() {
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

   return (
      <>
         <Post1 />
         <Post2 />
         <Post3 />
         <Post4 />
         <Post5 />
         <Post6 />
         {showNewPost && <Post7 />}
         {showNewPost && <Post8 />}
      </>
   );
}
