// app/layout.js
'use client';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 p-6 bg-gray-100">{children}</main>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
