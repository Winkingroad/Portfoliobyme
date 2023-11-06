import React from 'react';

//countup

import CountUp from 'react-countup';

// intersection observer hook

import {useInView} from 'react-intersection-observer';
// motion 
import { motion } from 'framer-motion';

//variant

import { fadeIn } from '../variants';

//import test

import Image from '../assets/Yash Srivastava.pdf';


const About = () => {
  const [ref, inView] =useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref}>

    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-hard-light bg-top'>
        </motion.div>
        {/*text*/}
        <motion.div
        variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
         className='flex-1'>
        <h2 className='h2 text-purple-400'>About me.</h2>
        <h3 className='h3 mb-4 text-slate-700'>
          Hello there
        </h3>
        <p className='mb-6 text-slate-200'>
        I am a master of many trades, a true polymath, with a boundless curiosity for the world and all that it contains. I am a technology enthusiast, ever eager to explore the latest advancements in the field, and a skilled web developer, able to bring my ideas to life with code. My knowledge of machine learning is vast and ever-growing, and my background in finance and project management gives me a unique perspective on how to apply these technologies to solve real-world problems.
        </p>
        {/*stats*/}
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={3} duration={3}/> :null}
            </div>
            <div className='font-primary text-sm tracking-[2px] text-slate-900'>
               Years in<br/>
               Tech
              
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={12} duration={3}/> :null}
              +
            </div>
            <div className='font-primary text-sm tracking-[2px] text-slate-900'>
               Skills<br/>
               Learned
              
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={10} duration={4}/> :null}
              +
            </div>
            <div className='font-primary text-sm tracking-[2px] text-slate-900'>
               Projects<br/>
               Completed
              
            </div>
          </div>
        </div>
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'><a   href={Image} download={'resume'}>Resume/CV</a></button>
          <a className='text-gradient btn-link'  href='# '>My Portfolio </a>
        </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
