import React from 'react';

import Image from '../assets/avatar.png';

import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';





import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import{ fadeIn } from '../variants';
const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78] flex items-center' id='home'>
    
    <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
      {/*text*/}
      <div className='flex-1 text-center font-secondary lg:text-left' >
        <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-slate-700 text-[55px] font-bold leading-[0.8] lg:text-[70px] '>Yash <span>Srivastava
        </span>
        
        </motion.h1>
        <motion.div variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] '>
         <span className=' text-violet-900 mr-3'> I am a</span>
         <TypeAnimation sequence={['Developer',2000,'Desginer',2000,'Tech Enthusiast',2000]}
         speed={[50]}
         className='text-accent'
         wrapper='span'
         repeat={Infinity}/>
        </motion.div>
        
        
        <motion.p variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className=' text-slate-700 mb-8 max-w-lg mx-auto lg:mx-0 '>
        I'm a polymath with a passion for technology, skilled in web development and knowledgeable in machine learning. My background in finance and project management helps me apply these skills to solve real-world problems.
        </motion.p>
        <motion.div variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-10 mx-auto lg:mx-0'>
          <button className='btn btn-lg font-primary'><a href="tel:+918423652938">Contact me</a></button>
          <a href='#' className='text-gradient btn-link font-primary'>My portfolio</a>
        </motion.div>
        

        {/*socials*/}
        <motion.div variants={fadeIn('up',0.8)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className=' text-slate-200 flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
        <a href="https://www.linkedin.com/in/yash-srivastava-2b9817238">
  <FaLinkedin />
</a>
          <a href='https://github.com/Winkingroad'>
            <FaGithub />
          </a>
          <a href='https://www.instagram.com/_yash.srivastava/'>
            <FaInstagram />
          </a>
        </motion.div>
        </div>
        
      {/*image*/}
      <motion.div variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[340px] mx-auto'>
        <img src={Image} alt='' />
      </motion.div>
      </div>
    </div>

  </section>;
};

export default Banner;
