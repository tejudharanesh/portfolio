const experiences = [
  {
    title: "Software Engineer",
    company: "XFORGE Private Ltd",
    period: "2025 - Present",
    description:
      "Leading development of enterprise web applications using React, Node.js, and AWS.",
    skills: ["React", "Node.js", "Cloudinary", "Leadership", "devops"],
  },
  {
    title: "Full Stack Developer",
    company: "Habi",
    period: "2024 - 2025",
    description:
      "Developed the company's official website habi.one to enhance brand presence, resulting in 80% increase in user engagement Built a responsive Progressive Web Application (PWA) for real-time issue resolution using React.js and Tailwind CSS on the frontend and Node.js, Express.js, and MongoDB on the backend.Implemented a dynamic quotation generator with PDF export functionality, automating document creation and reducing manual workload by 90%.",
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Figma",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Synthesis Systems",
    period: "2023",
    description:
      "• Designed a Format Converter app, enabling CSV-to-JSON/XML transformations, reducing processing time by 70%. Implemented a mapping structure between source (CSV) headers and target (JSON/XML) headers for efficient data transformation. Worked closely with team members to design a database structure for storing mapping configurations and converted files.Developed custom API’s to handle user requests for file conversion and data storage.",
    skills: ["JavaScript", "Nodejs", "MongoDB", "Expressjs", "REST APIs"],
  },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    company: "New Horizon College of Engineering",
    period: "2019 - 2023",
    description:
      "Foundation in computer science fundamentals, data structures, and programming languages.",
    skills: ["Data Structures", "Programming", "Mathematics"],
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">
                        {exp.title}
                      </h4>
                      <span className="text-blue-300 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h5 className="text-lg text-purple-300 mb-3">
                      {exp.company}
                    </h5>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-purple-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">
                        {edu.title}
                      </h4>
                      <span className="text-purple-300 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <h5 className="text-lg text-pink-300 mb-3">
                      {edu.company}
                    </h5>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
