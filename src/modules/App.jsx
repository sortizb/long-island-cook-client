import '../css/App.css';
import '../css/Navbar.css';
import { Navbar } from './sub-modules/Navbar';
import {useEffect, useRef, useState, useMemo} from 'react';

export default function App() {

    const refDark = useRef(null);
    const isInDark= useIsInViewport(refDark);

  return (
    <>
      <Navbar isInDark={isInDark}/>
      <section className="slide-1" id='home'>
        <div className='header-container'>
          <h1 className='header slideToTop'>Long Island Cook</h1>
          <h3 className='slogan fadeInDelayed'>Eat healthier & Learn to Cook</h3>
        </div>
      </section>
      <section className='slide-2' id='food-types' ref={refDark}>
      </section>
    </>
    
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}