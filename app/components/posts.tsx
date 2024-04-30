import Post1 from './posts/post1';
import Post2 from './posts/post2';
import Post3 from './posts/post3';
import Post4 from './posts/post4';
import Post5 from './posts/post5';
import Post6 from './posts/post6';
import Post7 from './posts/post7';
import Post8 from './posts/post8';
import { PostContainer } from './posts/posts-styles';

export default function Posts() {
   const currentDate = new Date();
   const newPostDate = new Date('2024-05-01T16:00:00');
   let showNewPost = false;

   if (currentDate >= newPostDate) {
      showNewPost = true;
   }

   return (
      <PostContainer>
         <Post1 />
         <Post2 />
         <Post3 />
         <Post4 />
         <Post5 />
         <Post6 />
         <Post7 />
         <Post8 />
         {/* {showNewPost && <Post7 />} */}
         {/* {showNewPost && <Post8 />} */}
      </PostContainer>
   );
}
