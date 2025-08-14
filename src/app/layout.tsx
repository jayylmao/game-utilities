import './globals.css';
import '@iconify-icon/react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.className} flex justify-center items-center min-h-screen select-none`}>
      <head>
        <title>Game Utilities</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
