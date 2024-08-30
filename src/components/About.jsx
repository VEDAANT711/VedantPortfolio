import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Vedant Gaikwad, a 2023 🎓 Electronics Engineering graduate with a strong focus on AI/ML, Data Science, and Python programming. As a <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/vedantgaikwad7/' target='_blank'>Data Analyst</a> I excel in leveraging tools like SQL, Power BI, and Excel to drive data-driven insights and solutions🚀.
              <br />
              ✍️ Beyond my technical expertise, I enjoy sharing knowledge through detailed and informative blogs on  <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://medium.com/@gaikwadvedant2" target='_blank'>Medium</a>,  where I explore the complexities of 
              Data Science and emerging technology trends. I'm also passionate about photography📸, capturing moments to tell compelling visual stories🌟📷.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/102WfPHaZhL6UN7-_83dxf0eN72kmMb-t/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;