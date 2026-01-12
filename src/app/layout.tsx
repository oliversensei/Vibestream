import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PlayerProvider } from '@/contexts/PlayerContext';
import Sidebar from '@/components/layout/Sidebar';
import Player from '@/components/layout/Player';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'VibeStream',
  description: 'A sleek music player concept app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PlayerProvider>
          <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <main className="flex-1 overflow-y-auto">{children}</main>
              <Player />
            </div>
          </div>
          <Toaster />
        </PlayerProvider>
      </body>
    </html>
  );
}
