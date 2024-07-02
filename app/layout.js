import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container mx-auto p-4'>
          <Header />
          <div className='divider' />
          {children}
          <div className='divider' />
          <Footer />
        </div>
      </body>
    </html>
  );
}
