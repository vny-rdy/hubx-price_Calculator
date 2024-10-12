import { useLayoutEffect,useRef } from 'react'
import gsap from 'gsap'


import Navbar from './components/Navbar.jsx'
import DashBoard from './components/DashBoard.jsx';

function App() {
  const comp =useRef(null);
  useLayoutEffect(() => { 
    let ctx =gsap.context(() => { 
      const t1=gsap.timeline()
      t1.from('#intro-slider',{

        delay: 0.3,

      }).from(["#title-1",'#title-2','#title-3'],{
        opacity:0,
        y:"+=30",
        stagger:0.5,
      }).to(["#title-1","#title-2","#title-3"],{
        opacity:0,
        y:"-=30",
        delay:0.3,
        stagger:0.5,
      }).to("#intro-slider",{
        xPercent: '-100',
        duration:1.2,
      }).from("#welcome",{
        // y: '+=30',
        opacity:0,
        duration:0.5,
        // ease: 'power2.inOut',
      })
     },comp)
    
    return () =>  ctx.revert()
   },[]);

  return (
    <div className='relative' ref={comp}>
      <div 
      id='intro-slider' className=' h-screen p-10 bg-green-100 absolute top-0 left-0 font-serif z-10 w-full flex flex-col gap-10 tracking-tight m-auto text-center'>
        <h1 id='title-1' className='text-9xl max-lg:text-5xl'>Talent Hubx</h1>
        <h1 id='title-2' className='text-9xl max-lg:text-5xl'>Internship</h1>
        <h1 id='title-3' className='text-9xl max-lg:text-5xl'>Assignment</h1>
      </div>
    <div className=' bg-white'>

        <Navbar/>
        <DashBoard/>

  
    </div>
    </div>


  )
}

export default App
