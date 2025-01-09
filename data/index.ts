export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I Prioritize Client Collaboration, Fostering Open Communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Engineering Software That Connects The World Seamlessly",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I Constantly Try to Improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast with a Passion for Development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Honing in my Web Development Skills",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do You Want to Start a Project Together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MailFocus - AI Assistant",
    des: "MailFocus is a personalized AI assistant designed to streamline your email management. Using the power of OpenAI's GPT-3.5 Turbo API, MailFocus analyzes your emails and generates concise summaries and task lists with priority rankings. The task list is intelligently extracted from your emails, helping you quickly identify what needs to be done. Tasks are categorized with priorities such as High, Medium, or Low.",
    img: "/MailFocus.png",
    iconLists: ["/re.svg", "/html.png", "/css.png", "/gpt.png", "/python.png"],
    link: "https://github.com/atyubahmad/MailFocus",
  },
  {
    id: 2,
    title: "Goalometer - Android App",
    des: "An innovative Android application that transcends traditional messaging platforms. Seamlessly merging real-time soccer scores with state-of-the-art encrypted messaging.",
    img: "/goal.png",
    iconLists: ["/re.svg", "/android.png", "/java.png", "/aws.webp", "/api.png"],
    link: "https://github.com/atyubahmad",
  },
  {
    id: 3,
    title: "Employee Records - Merkle Trees",
    des: "Enhance your HR management with the Employee Records project, crafted in C++. Employing cutting-edge technology, we've revolutionized the way employee data is stored and managed.",
    img: "/EmployeeRecords.png",
    iconLists: ["/re.svg", "/cpp.png", "/vs.png", "/tree.png", "/db.png"],
    link: "https://github.com/atyubahmad/Employee-Records",
  },
  {
    id: 4,
    title: "Grid Search App",
    des: "Developed a comprehensive grid search application, which included both an Android app and a React-based web interface ● Implemented key features such as search management, real-time location tracking, geofencing, and the ability to add and archive searches",
    img: "/GSA.webp",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/android.png", "/java.png"],
    link: "https://github.com/atyubahmad",
  },
];



export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer Intern",
    desc: "Developed an Android app integrating live soccer scores and secure messaging. Built efficient API endpoints and serverless AWS Lambda functions for streamlined backend operations.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Computer Engineer Intern",
    desc: "Enhanced user experience by managing website updates, increasing traffic. Assembled RF cables and custom circuit boards, ensuring product quality and functionality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Scrum Master Intern",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores. Led Agile practices, including daily scrums and sprint reviews, for a mobile app project. Collaborated with a 4+ member team to ensure project goals were met efficiently.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "AWS Solutions Developer Intern",
    desc: "Designed and implemented serverless AWS Lambda functions, optimized backend operations, and leveraged AWS services such as RDS, EC2, and Location Services to deliver scalable and efficient applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/atyubahmad",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://linkedin.com/in/atyubahmad",
  },
];
