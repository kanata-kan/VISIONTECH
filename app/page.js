import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Home/Hero';
import Main from './components/Services/Main';
import Header from './components/header/header';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='divider' />
      <About />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
    </div>
  );
}
