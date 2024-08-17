import '../css/App.css';
import '../css/Navbar.css';
import { Navbar } from './sub-modules/Navbar';
import { FoodTypes } from './FoodTypes';
import {useEffect, useRef, useState, useMemo} from 'react';
import italianFoodImg from '../resources/italian-food.jpg';
import mexicanFoodImg from '../resources/mexican-food.jpg';
import greekFoodImg from '../resources/greek-food.jpg';
import japaneseFoodImg from '../resources/noodles.jpeg';

export default function App() {

    const refDark = useRef(null);
    const isInDark= useIsInViewport(refDark);
    const types = [
      {
        image: italianFoodImg,
        title: "Italian Food",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum enim ac mattis rhoncus. Donec ut placerat orci. Integer convallis lacinia nisi et vestibulum. Phasellus scelerisque dolor neque. Ut ac."
      },
      {
        image: mexicanFoodImg,
        title: "Mexican Food",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum enim ac mattis rhoncus. Donec ut placerat orci. Integer convallis lacinia nisi et vestibulum. Phasellus scelerisque dolor neque. Ut ac."
      },
      {
        image: greekFoodImg,
        title: "Greek Food",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum enim ac mattis rhoncus. Donec ut placerat orci. Integer convallis lacinia nisi et vestibulum. Phasellus scelerisque dolor neque. Ut ac."
      },
      {
        image: japaneseFoodImg,
        title: "Japanese Food",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum enim ac mattis rhoncus. Donec ut placerat orci. Integer convallis lacinia nisi et vestibulum. Phasellus scelerisque dolor neque. Ut ac."
      }
    ]
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
        <FoodTypes types={types}/>
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