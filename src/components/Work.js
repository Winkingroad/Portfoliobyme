import React from 'react';

import {BsArrow90DegRight, BsArrowUpRight} from 'react-icons/bs';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants';

import Rota from '../assets/rota.png';
 import JYC from '../assets/jyc.png'
import ENS from '../assets/ENS.png'

const services = [
  {
    title: "Web Developer",
    company_name: "ENS Enterprise Pvt. Ltd.",
    logo:ENS,
    date: "May 2023 - July 2023",
    link: "https://www.ens.enterprises/",
    points: [
      "Collaborated with the Web Development team to create and implement web applications using Express and Node.js technologies",
      "Assisted in designing and developing the backend functionalities of web projects, ensuring optimal performance and responsiveness.      ",
      "Participated in code reviews, providing constructive feedback to improve code quality and maintain best practices",
      
    ],
  },
  {
    title: "Media and Publicity Director",
    company_name: "Rotaract Club of Waknaghat",
    logo:Rota,
    date: "July 2022 - March 2023",
    link: "https://www.instagram.com/racw3080/",
    points: [
      "Managed social media accounts and public relations for the club",
      "Organized events and fundraisers for various social causes",
      "Connected with over 30 industry experts and influencers for collaborations",
      "Led a team of 45 students and mentored them in their respective roles",
    ],
  },
  {
    title: "Finance Coordinator",
    company_name: "JUIT Youth Club",
    logo:JYC,
    date: "Aug 2022 - Present",
    link: "https://jyc.co.in/",
    points: [
      "Brought sponsorship worth Rs 165K for the club's annual fest",
      "Managed the club's finances and budget for events and activities",
      "Connected with over 30 industry experts and sponsors for collaborations",
      "Led a team of 25 students and delegated tasks to them for efficient execution",
    ],
  },
];

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}
            className='flex-1  lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mt-2 lg:mb-0'>
            {/*service list*/}
            <div>
              <h2 className='text-4xl font-bold text-center mb-8'>Experience Roadmap</h2>
              {services.map((service, index) => {
                const {title, company_name, date, points, description, link,logo} = service;
                return (
                  <div className='border-l border-white/100  mb-[38px] flex' key={index}>
                    <div className='max-w-[540px]'>
                      <h4 className='ml-5 text-[20px] tracking-wider font-primary font-semibold mb-2'>{title}</h4>
                      <p className='ml-5 text-[20px] border-b border-accent/60 font-secondary mt-0'>{company_name}</p>
                      <p className='mt-3 ml-3 font-secondary'>{date}</p>
                      <ul className='ml-8 font-secondary list-disc list-outside leading-tight max-w-[500px]'>
                        {points.map((point, index) => (
                          <li key={index} className='mb-1'>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                    <img src={logo} alt='Company Logo' className='h-9 w-13 mb-[42px]' />
                      <a href={link} className='text-gradient text-sm'>Learn more</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='text-gradient text-[16px] text-center mt-8'>Journey is On</div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Work;
