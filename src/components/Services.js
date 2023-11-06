import React from 'react';

import {BsArrow90DegRight, BsArrowUpRight} from 'react-icons/bs';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants';

const services = [
  {
    name: 'React',
    description:' React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    link:'https://react.dev/'
  },

  
  
  {
    name: 'Node.js',
    description:'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.',
    link:'https://nodejs.dev/en/learn/'
  },
  {
    name: 'Express.js',
    description:"Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.",
    link:'https://expressjs.com/'
  },
  {
    name: 'MongoDB',
    description:"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    link:'https://www.mongodb.com/'
  },
  
];

 

const Services = () => {
  return <section className='section'id='services' >
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/*text*/}
      <motion.div variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}} className='flex-1 lg:bg-work lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>
        <h2 className='h2 text-purple-400 mb-6'>What I Know.</h2>
        <h3 className='font-semibold text-[19px] max-w-[500px] mb-12'>
        I have experience and knowledge in several areas including React, Node.js, and Tailwind for UI/UX design, Machine learning, C++, Finance, Project management, and Business analytics.
        </h3>
        <a href="https://github.com/Winkingroad" target="_blank" rel="noopener noreferrer">
  <button className='btn btn-sm'>See My Work</button>
</a>

      </motion.div>
      {/*services*/}
      <motion.div variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}} className='flex-1'>
        {/*service list*/}
        <div>
          {services.map((service,index)=>{

            const {name,description,link} = service;
            return( <div className='border-b border-white/10 h-[146px] mb-[38px] flex' key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                <p className='font-secondary leading-tight'>{description}</p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
              <a href={link} className='btn h-9 w-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
              <a href={link} className='text-gradient text-sm'>Learn more</a></div>
            </div>
            );
          })}
        </div>
        
      </motion.div>
      
    </div>
    
   </div>
    </section>;
};

export default Services;
