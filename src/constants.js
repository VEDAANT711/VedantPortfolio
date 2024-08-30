// export const services = [
//     {
//         title: "Technology Enthusiast",
//         icon: 'https://csgeeek.github.io/web.png',
//     },
//     {
//         title: "Data Analyst",
//         icon: 'https://csgeeek.github.io/web.png',
//     },
//     {
//         title: "Photographer",
//         icon: 'https://csgeeek.github.io/web.png',
//     },
// ];

// export const name = 'Vedant';

// export const experiences = [
//     {
//         'company': 'MinSkole',
//         'role': 'Data Analyst',
//         // 'logo': logoImage,
//         'duration': 'January 2023 - Present',
//         'points': [
//             'Created a comprehensive dashboard in Power BI, integrating data across 5 tables with 10+ calculated measures.',
//             'Designed 15+ dynamic visuals and implemented 5 interactive filters to explore data from various perspectives.',
//             'Utilized matplotlib, seaborn, numpy, and pandas for advanced visualizations and data manipulation.',
//             'Developed and shared analyses using Jupyter Notebook for interactive and detailed reporting'
//         ],
//         'url': 'https://minskole.in/',
//     }
   
// ]



// export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
// export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
// export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;



import minSkoleLogo from './logo.jpg';  // Adjust the path as needed

export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Data Analyst",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Photographer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Vedant';

export const experiences = [
    {
        company: 'MinSkole',
        role: 'Data Analyst',
        logo: minSkoleLogo,  // Use the imported image here
        duration: 'January 2023 - Present',
        points: [
            'Created a comprehensive dashboard in Power BI, integrating data across 5 tables with 10+ calculated measures.',
            'Designed 15+ dynamic visuals and implemented 5 interactive filters to explore data from various perspectives.',
            'Utilized matplotlib, seaborn, numpy, and pandas for advanced visualizations and data manipulation.',
            'Developed and shared analyses using Jupyter Notebook for interactive and detailed reporting.'
        ],
        url: 'https://minskole.in/',
    },
];

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

console.log('EMAIL_JS_SERVICE_ID:', EMAIL_JS_SERVICE_ID);
console.log('EMAIL_JS_TEMPLATE_ID:', EMAIL_JS_TEMPLATE_ID);
console.log('EMAIL_JS_PUBLIC_KEY:', EMAIL_JS_PUBLIC_KEY);