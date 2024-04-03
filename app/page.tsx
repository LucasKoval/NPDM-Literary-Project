import TempLayout from '@/app/components/temp-layout';
import ProjectContainer from '@/app/components/project-container';
import CountdownTimer from '@/app/components/countdown-timer';

export default function Home() {
   return (
      <main>
         {/* <TempLayout /> */}
         <ProjectContainer />
         <CountdownTimer />
      </main>
   );
}
