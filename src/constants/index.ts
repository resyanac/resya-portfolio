import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sampoerna,
  bapenda,
  djp,
  got,
  todo,
  ireng,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
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

const experiences: TExperience[] = [
  {
    title: "Tax Collector",
    companyName: "Bapenda East Borneo",
    icon: bapenda,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Analyzed and mined over 60,000 data points, utilizing advanced analytics tools to filter, synthesize, and extract meaningful insights, ensuring accurate tax assessments and data-driven strategies.",
      "Created comprehensive analysis dashboards every month for stakeholders, providing a clear overview of tax-related metrics and trends, fostering informed and strategic decision-making.",
      "Handled billing processes with precision, effectively communicating with state agencies, companies, and individual taxpayers, ensuring clarity on tax obligations and smooth billing processes.",
      "Built and maintained relationships with state agencies, corporations, and individual taxpayers, fostering positive relations and a collaborative tax ecosystem through effective communication and a customer-centric approach.",
    ],
  },
  {
    title: "Service Operations Manager",
    companyName: "Bapenda East Borneo",
    icon: bapenda,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Oct 2022",
    points: [
      "Led and supervised the operations of a key branch, involving strategic decision-making, resource optimization, and ensuring seamless execution of service operations to meet and exceed organizational objectives.",
      "Oversaw the timely and accurate processing of over 300 tax letters, ensuring all communications aligned with regulatory requirements and contributed to a smooth and compliant workflow through meticulous coordination and attention to detail.",
      "Managed a high volume of client interactions, addressing inquiries, resolving concerns, and fostering positive relationships through a client-centric approach prioritizing clear and effective communication to ensure client satisfaction and retention.",
      "Took responsibility for the overall performance of the branch, supervising staff, implementing efficient processes, and maintaining a focus on quality service delivery, creating a positive and productive work environment that aligned with organizational goals.",
    ],
  },
  {
    title: "Appraiser Internship",
    companyName: "DJP South Jakarta Regional Office 1",
    icon: djp,
    iconBg: "#383E56",
    date: "Feb 2021 - Apr 2021",
    points: [
      "Contributed significantly to the annual Relawan Pajak 2021 event, fostering collaboration with seven prominent universities in the Kanwil DJP Jakarta Selatan 1 area.",
      "Demonstrated proficiency in analyzing tax applications (PPh, PPN, and PPnBM) to ensure compliance with relevant regulations, receiving guidance by six head divisions to solidify understanding of complex tax scenarios.",
      "Proposed and implemented effective tax service strategies during the pandemic, adapting to the evolving landscape and ensuring seamless provision of tax services in challenging times.",
      "Successfully crafted and delivered comprehensive feedback presentations for internal events, showcasing my ability to analyze and communicate insights effectively.",
    ],
  },

];

const testimonials: TTestimonial[] = [
  {
    testimonial:
    "Resyana excels in teamwork, problem-solving, and coding. Her technical skills include JavaScript, TypeScript, and database management.",
    name: "Ireng Sanjaya",
    designation: "Associate Software Engineer",
    company: "Revou",
    image: ireng,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Haikal Shahab",
    designation: "Associate Software Engineer",
    company: "Revou",
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

const projects: TProject[] = [
  {
    name: "GOT Fansite",
    description:
      "a Web platform designed for fans of Game of Thrones. To ensure the smooth functioning of the platform. This showcases my expertise and dedication to building effective, safe, and user-friendly web solutions. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: got,
    sourceCodeLink: "https://github.com/resyanac/week-4-resyanac",
  },
  {
    name: "HM Sampoerna",
    description:
      "The Sampoerna Project is a web platform showcasing HM Sampoerna's offerings and advocating for a smoke-free future. Please note that it's not for advertising Sampoerna products.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vanillacss",
        color: "green-text-gradient",
      },
    ],
    image: sampoerna,
    sourceCodeLink: "https://github.com/resyanac/week-5-resyanac",
  },
  {
    name: "To-Do List",
    description:
      "A multi-step forms using React and Ant Design that collects personal information, address details, and account specifics. The client-side validation using Formik and Yup with real-time feedback for invalid inputs. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    sourceCodeLink: "https://github.com/resyanac/week-18-resyanac",
  },
];

export { services, technologies, experiences, testimonials, projects };
