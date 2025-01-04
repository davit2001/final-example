import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
  params: { session }
}: {
  children: React.ReactNode;
  params: any
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
      </body>
    </html>
  );
}
