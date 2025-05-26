import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cherrished Clicks",
    description:
      "A application where user selects services,frames and upload images and get it framed and delivered, all in one place. Built with React, TypeScript, Tailwind CSS, Express, Node.js, MongoDB, and Razorpay.",
    image: "../assets/cherishedclicks.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
    ],
    github: "#",
    live: "https://jocular-baklava-8e3396.netlify.app/",
  },

  {
    title: "Habi one",
    description:
      "Developed official website for habi to enhance brand presence and user engagement.Implemented features like generating quotations,cost estimation to reduce the manual workload by 90%.",
    image: "../assets/habione.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    github: "#",
    live: "https://habione.netlify.app/",
  },
  {
    title: "Order Management System",
    description:
      "Progressive Web application for managing orders, delivery, and payment.",
    image: "../assets/ordermanagement.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Node.js",
      "MongoDB",
      "Razorpay",
    ],
    github: "#",
    live: "https://ordermanage.netlify.app/",
  },
  {
    title: "Play with PDF",
    description:
      "Application used to merge PDFs, split PDFs, watermark PDFs, and extract text from PDFs.",
    image: "../assets/playwithpdf.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    github: "#",
    live: "https://playwithpdf.188857.xyz/",
  },
  {
    title: "Nailshadez",
    description:
      "Built a nail salon website with features like appointment booking, online payment, and customer management.",
    image: "../assets/nailshadez.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Google Apis",
    ],
    github: "#",
    live: "https://nailshadez.com/",
  },
  {
    title: "Expense Tracker",
    description:
      "Progressive Web application for tracking expenses, categories, and budgets.",
    image: "../assets/expense.jpg",
    technologies: [
      "React",
      "javascript",
      "Tailwind CSS",
      "React Query",
      "Node.js",
      "MongoDB",
    ],
    github: "#",
    live: "https://expense-tracker.188857.xyz/",
  },
  {
    title: "Twitter Clone",
    description:
      "Built a Twitter clone with features like user authentication, tweet creation, and real-time updates.",
    image: "../assets/twitter.jpeg",
    technologies: [
      "React",
      "javascript",
      "Tailwind CSS",
      "React Query",
      "Node.js",
      "MongoDB",
      "Cloudinary",
    ],
    github: "#",
    live: "https://twitterclone.188857.xyz/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="w-full">
                  <a href={project.live} target="_blank" className="flex">
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
