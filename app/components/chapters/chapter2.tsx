import Post9 from '../posts/post9';

export default function Chapter2() {
   const currentDate = new Date();
   const newPostDate = new Date('2024-05-01T16:00:00');
   let showNewPost = false;

   if (currentDate >= newPostDate) {
      showNewPost = true;
   }

   return (
      <>
         <Post9 />
         {/* {showNewPost && <Post9 />} */}
      </>
   );
}
