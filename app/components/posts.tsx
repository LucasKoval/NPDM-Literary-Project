import Post1 from './posts/post1';
import Post2 from './posts/post2';
import Post3 from './posts/post3';
import Post4 from './posts/post4';
import Post5 from './posts/post5';
import { PostContainer } from './posts/posts-styles';

export default function Posts() {
   return (
      <PostContainer>
         <Post1 />
         <Post2 />
         <Post3 />
         <Post4 />
      </PostContainer>
   );
}
