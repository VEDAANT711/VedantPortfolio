
// import React from "react";
// import SQLPizzaImage from '../assets/SQLPizza.png';
// import PowerBIImage from '../assets/PowerBI.png';
// import Footer from './Footer'

// const ProjectCard = ({ image, title, description, git, technologies }) => {
//     return (
//         <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             {title=='Sales Dashboard-PowerBI' && <a href="#">
//                 <img className="w-full rounded-t-lg h-auto object-cover " src={PowerBIImage} alt="Sales Dashboard PowerBI" />
//             </a>}
//             {title=='Pizza Sales SQL Project' && <a href="#">
//                 <img className="w-full rounded-t-lg h-auto object-cover " src={SQLPizzaImage} alt="Pizza Sales SQL Project" />
//             </a>}
//             <div className="p-4 sm:p-6">
//                 <a href="#">
//                     <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
//                 </a>
//                 <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
//             </div>
//             <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
//                 <div className='flex flex-wrap gap-2 pl-2'>
//                     {technologies.map((tag, index) => (
//                         <p
//                             key={`${index}-${tag}`}
//                             className='text-[14px] text-blue-500'
//                         >
//                             #{tag}
//                         </p>
//                     ))}
//                 </div>
//                 <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
//             </div>
//         </div>
//     );
// };
  
// const Projects = () => {
//     console.log(SQLPizzaImage);
//     console.log(PowerBIImage);
//     return (
//         <div className="bg-black">
//             <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
//                 {project.map((item, index) => (
//                     <ProjectCard
//                         key={index}
//                         image={SQLPizzaImage}
//                         title={item.title}
//                         description={item.description}
//                         links={item.links}
//                         git={item.git}
//                         technologies={item.technologies}
//                     />
//                 ))}
//             </div>
//             <Footer/>
//         </div>
//     );
// }


// export const project = [
//     {
//         title:'Sales Dashboard-PowerBI',
//         description:'A comprehensive sales dashboard providing insights into sales performance, helping businesses understand trends, identify key drivers, and make informed decisions.',
//         image: PowerBIImage,
//         git:'https://github.com/VEDAANT711/PowerBI-Project',
//         technologies:['PowerBI' ,'DAX' , ' Visualization']
//     },
//     {
//         title:' Pizza Sales SQL Project ',
//         description:'SQL-driven analysis of pizza sales data to answer key business questions and uncover insights into orders, revenue, and popular pizza types.',
//         image: SQLPizzaImage,
//         git:"https://github.com/VEDAANT711/PizzaSales_SQL_Project",
//         technologies:[ 'SQL', 'Oracle DBMS']
//     }
// ]

// export default Projects

import React from "react";
import SQLPizzaImage from '../assets/SQLPizza.png';  // Ensure this path is correct
import PowerBIImage from '../assets/PowerBI.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Sales Dashboard-PowerBI',
        description: 'A comprehensive sales dashboard providing insights into sales performance, helping businesses understand trends, identify key drivers, and make informed decisions.',
        image: PowerBIImage,
        git: 'https://github.com/VEDAANT711/PowerBI-Project',
        technologies: ['PowerBI', 'DAX', 'Visualization']
    },
    {
        title: 'Pizza Sales SQL Project',
        description: 'SQL-driven analysis of pizza sales data to answer key business questions and uncover insights into orders, revenue, and popular pizza types.',
        image: SQLPizzaImage,
        git: 'https://github.com/VEDAANT711/PizzaSales_SQL_Project',
        technologies: ['SQL', 'Oracle DBMS']
    }
]

export default Projects;
