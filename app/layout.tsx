import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import './globals.css';

export const metadata: Metadata = {
   title: 'NPDM',
   description: 'NPDM - Proximamente',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es">
         <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
         </body>
      </html>
   );
}
