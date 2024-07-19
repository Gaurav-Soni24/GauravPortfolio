import "./globals.css";
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // specify the font weights you need
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
