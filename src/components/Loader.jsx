import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState,useRef,useEffect } from 'react';

function Loader() {
  const [grow, setGrow] = useState(0);
  const loadingRef = useRef(null);

  useEffect(() => {
    // Set up the interval to update the value
    const interval = setInterval(() => {
      setGrow(prevGrow => {
        if (prevGrow < 100) {
          return prevGrow + 1;
        } else {
          clearInterval(interval); // Clear the interval once grow reaches 100
          return 100; // Ensure grow is exactly 100
        }
      });
    }, 70); // Update every 100ms (0.1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once after the initial render

  useEffect(() => {
    // Update the span's text content using useRef
    if (loadingRef.current) {
      loadingRef.current.textContent = grow;
    }
  }, [grow,]);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from('#loading_no',{
      opacity:0,
      y:400,
    });

    tl.from('#loading_text', {
      opacity:0,
      x:-500,
    });
    tl.from('#loaders', {
      y: 300,
      duration: .65,
      opacity:0,
    });
    tl.from('#loaders1', {
      y: 300,
      duration: .65,
      opacity:0,
    });
    tl.from('#loaders2', {
      y: 300,
      duration: .65,
      opacity:0,
    });
    tl.from('#loaders3', {
      y: 300,
      duration: .65,
      opacity:0,
    });
    tl.from('#loaders4', {
      y: 300,
      duration: .7,
      opacity:0,
    });
    tl.from('#loaders5', {
      y: 300,
      duration: .7,
      opacity:0,
    });
    tl.from('#loaders6', {
      y: 300,
      duration: .7,
      opacity:0,
    });
    tl.to('#cover',{
      opacity:1,
      y:0,
      delay:1.2,
    })
    
  });

  return (
    <>
    
      <div id='wrapper' className='w-full h-screen bg-black'>
        <div id='loader-container' className=' h-40 w-3/4 top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute flex leading-none justify-center items-center '>
          <div id="loaders" className='h-36 w-44'>
          </div>
          <div id="loaders1" className='h-36 w-44'>
          </div>
          <div id="loaders2" className='h-[9.5vw] w-[11.9vw] mr-7 ml-4'>
          </div>
          <div id="loaders3" className='h-[10vw] w-[12.7vw] mr-4'>
          </div>
          <div id="loaders4" className='h-36 w-44 mr-3'>
          </div>
          <div id="loaders5" className='h-36 w-44 mr-3'>
          </div>
          <div id="loaders6" className='h-36 w-44'>
          </div>
        </div>
        <div id='text-container' className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8'>
          <h3 id="loading_text" className='text-white text-5xl text-center italic'>YOUR WEB EXPERIENCE IS LOADING...</h3>
          <h4 id='loading_no' className='text-white text-center text-4xl mt-2'><span><i ref={loadingRef} >0 </i> </span><i>  - 100</i></h4>
        </div>
        <div id='cover' className='w-full h-screen bg-black opacity-0'>
        </div>
      </div> 

    </> 
  )
}

export default Loader;
