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
    title: "UI/UX Designer",
    icon: "/backend.webp",
  },
  {
    title: "Full Stack Web Developer",
    icon: "/web.webp",
  },
  {
    title: "App Developer",
    icon: "/mobile.webp",
  },
  {
    title: "Software Engineer",
    icon: "/creator.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.JS",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "figma",
    icon: "/tech/figma.webp",
  },
  {
    name: "wordpress",
    icon: "/tech/wordpress.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Dave Brothers Technology",
    icon: "/company/davebrotherlogo.jpeg",
    iconBg: "#E6DEDD",
    date: "AUG 2022 - DEC 2023",
    points: [
      "Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
      "Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
      "Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
    ],
  },
];

const testimonials = [
  {
    id: 2,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Sumit Timori",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/sumit-timori/",
  },

  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Sumit Timori",
    image: "/tech/github.webp",
    link: "https://github.com/timori52",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel";
}[] = [
  {
    name: "TrendGenie AI",
    description:
      "Built an AI-powered content idea generator that analyzes YouTube trends and delivers optimized video titles and ideas in real-time using OpenAI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "openai-api", color: "green-text-gradient" },
      { name: "nextjs", color: "pink-text-gradient" },
    ],
    image: "/projectimg/TrendgeineApp.png", // replace when ready
    platform: "Vercel",
    deploy_link: "https://trend-genie-with-ai.vercel.app/", // update later
  },
  {
	name: "Realtime Chat App",
	description:
	  "Developed a real-time web chat application with user authentication, private messaging, and Socket.io for instant communication.",
	tags: [
	  { name: "react", color: "blue-text-gradient" },
	  { name: "socket.io", color: "green-text-gradient" },
	  { name: "nodejs", color: "pink-text-gradient" },
	],
	image: "/projectimg/image.png", // replace when ready
	platform: "Vercel",
	deploy_link: "https://chattwebapplication.netlify.app/", // update later
  }
  ,
  {
	name: "Weather App",
	description:
	  "Created a sleek and responsive weather application using React Native with live temperature, humidity, and forecast data via OpenWeatherMap API.",
	tags: [
	  { name: "react-native", color: "blue-text-gradient" },
	  { name: "api-integration", color: "green-text-gradient" },
	  { name: "openweathermap", color: "pink-text-gradient" },
	],
	image: "/projectimg/AppScreenshot.png", 
	platform: "Vercel",
	deploy_link: "https://github.com/Timori52/ReactNative-WeatherApp", // update later
  }
  
];

export { services, technologies, experiences, testimonials, projects };
