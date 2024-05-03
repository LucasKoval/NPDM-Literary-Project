import Posts from '@/app/components/posts';
import CountdownTimer from '@/app/components/countdown-timer';
import ScrollPosition from '@/app/components/scroll-position';
import TempLayout from '@/app/components/temp-layout';

export default function Home() {
   return (
      <main id="project-container">
         {/* <TempLayout /> */}
         <Posts />
         <CountdownTimer />
         <ScrollPosition />
      </main>
   );
}
