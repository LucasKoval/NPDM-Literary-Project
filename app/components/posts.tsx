import Chapter1 from './chapters/chapter1';
import Chapter2 from './chapters/chapter2';
import { PostContainer } from './posts/posts-styles';

export default function Posts() {
   return (
      <PostContainer>
         <Chapter1 />
         <Chapter2 />
      </PostContainer>
   );
}
