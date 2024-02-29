export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-20">
         <div className="flex-col z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
            <div>
               <h1 className="flex w-full justify-center text-4xl text-center font-serif pb-6 pt-6 sm:pt-0">
                  Nuestros Padres <br className="block sm:hidden" /> Deben Morir
               </h1>
            </div>

            <div>
               <p className="flex w-full justify-center p-2 text-lg font-sans">
                  Apertura: 1/4/2024
               </p>
            </div>
         </div>
      </main>
   );
}
