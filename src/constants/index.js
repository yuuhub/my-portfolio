import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    gh360,
    self,
    tesla,
    talkpush,
    kalibrr,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Wordpress Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Full Stack Developer",
      company_name: "Get Hooked 360",
      icon: gh360,
      iconBg: "#ed6a00",
      date: "Jun 2022 - present",
      points: [
        "Implemented SEO strategies",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Custom Wordpress development thru Advanced Custom Fields",
        "Making new pages for existing brands using Divi or custom code",
        "Checking for cross browser compatibility",
      ],
    },
    {
      title: "Freelance UX/UI Designer",
      company_name: "Self-Employed",
      icon: self,
      iconBg: "#E6DEDD",
      date: "Jun 2015 - present",
      points: [
        "Handled design projects in the tech, medical and food industries",
        "Consultant role to create high-quality converting landing pages",
        "Created design systems using Sketch",
        "Collaborated with managers, developers, SEO, copywriting to implement designs up to spec",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Talkpush Inc.",
      icon: talkpush,
      iconBg: "#dcdcdc",
      date: "Jun 2018 - Aug 2022",
      points: [
        "I was in charge of the entire design process. From user research, usability testing, feedback analysis, wireframing and overall UI design.",
        "Audited the product to identify areas of improvement",
      ],
    },
    {
      title: "Product Designer",
      company_name: "Kalibrr Technology Ventures Inc.",
      icon: kalibrr,
      iconBg: "#ffffff",
      date: "2015 - 2016",
      points: [
        "Defining feature specs and creating wireframes(information architecture and interaction), mockups to describe UX/UI, including visual and interaction design direction and execution.",
        "Conducting user research and testing and interpreting analytics data.",
        "Checking and reviewing designs from conception to production.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sample #1",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sample #2",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sample #3",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };