import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    gh360,
    self,
    talkpush,
    kalibrr,
    firstbalfour,
    tripguide,
    threejs,
    myra,
    drmitchell
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
      title: "UI/UX Designer",
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
      name: "First Balfour Website",
      description:
        "Implementation of First Balfour's redesign, one of the largest energy companies in the Philippines. This was made using Divi with custom code and additional plugins. Role: Main Developer",
      tags: [
        {
          name: "wordpress",
          color: "green-text-gradient",
        },
        {
          name: "divi",
          color: "blue-text-gradient",
        },
        {
          name: "jQuery",
          color: "pink-text-gradient",
        },
      ],
      image: firstbalfour,
      source_code_link: "https://firstbalfour.com/",
    },
    {
      name: "Myra E 400 Page",
      description:
        "New microsite/page for a leading cosmetics brand in the Philippines. This was implemented using custom coded child theme with Bootstrap, jQuery and SiemaJS for slider. Role: Main Developer",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "jquery",
          color: "pink-text-gradient",
        },
        {
          name: "siemaJS",
          color: "pink-text-gradient",
        },
      ],
      image: myra,
      source_code_link: "https://myra.com.ph/products/myra-400-e/",
    },
    {
      name: "Dr Mitchell Dickey Private Practice Website",
      description:
        "Designed a private practice website for Dr Mitchell Dickey to provide online psychiatric services.",
      tags: [
        {
          name: "ui/ux",
          color: "blue-text-gradient",
        },
        {
          name: "minimalist",
          color: "green-text-gradient",
        },
        {
          name: "freelancing",
          color: "pink-text-gradient",
        },
      ],
      image: drmitchell,
      source_code_link: "http://www.inspiringlife.online/clientProjProgress_Mitch/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };