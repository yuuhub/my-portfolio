import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' loading="lazy" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome! With solid experience as a <strong>Junior Full Stack Web Developer</strong> and a UI/UX designer, I specialize in crafting user-friendly websites utilizing advanced tools such as Wordpress, HTML5, CSS3, JavaScript, and PHP. Alongside web development, my skills span across conducting all-encompassing UI/UX processes that include user research, wireframing, and shaping immersive user interfaces and experiences. Rooted in a problem-solving mindset and a keen eye for details, I take great care in meeting and exceeding project requirements while always prioritizing the end user experience. My unique blend of technical expertise and design thinking equips me to handle complex projects and deliver results that emphasize both functionality and user-centric design.

        <div className='mt-20 flex flex-wrap w-full gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about');
