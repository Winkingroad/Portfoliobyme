import React from 'react';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants';


const Contact = () => {
  return <section className=' mt-48 py-16 lg:selection'id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}} className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium tracing-wide mb-2 '>
              Get in Touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br/> together </h2>
          </div>
        </motion.div>
        <motion.form
        variants={fadeIn('left',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
         className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6'>
          <a href='https://github.com/Winkingroad' className='bg-transparent border-b py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all text-center font-bold text-[24px] lg:text-[32px]' type='text' >GitHub</a>
          <a href='mailto:yash.srivastava1102@gmail.com' className='bg-transparent border-b py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all text-center font-bold text-[24px] lg:text-[32px]' type='text' >Mail me</a>
          <a href='https://www.linkedin.com/in/yash-srivastava1102/' className='bg-transparent border-b py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all text-center font-bold text-[24px] lg:text-[32px]' type='text' >LinkedIn</a>
          
        </motion.form>
      </div>

    </div>
  </section>;
};

export default Contact;
