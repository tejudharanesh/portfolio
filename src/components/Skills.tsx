import { useState, useEffect } from "react";

const skills = [
  { name: "TypeScript", level: 70, color: "from-blue-600 to-purple-600" },
  { name: "JavaScript", level: 90, color: "from-yellow-500 to-amber-500" },
  { name: "ReactJs", level: 90, color: "from-blue-400 to-cyan-500" },
  { name: "NextJs", level: 80, color: "from-gray-700 to-white" },
  { name: "TailwindCSS", level: 100, color: "from-cyan-400 to-blue-500" },
  { name: "DaisyUI", level: 80, color: "from-pink-400 to-fuchsia-500" },
  { name: "NodeJs", level: 85, color: "from-green-400 to-emerald-500" },
  { name: "ExpressJs", level: 95, color: "from-gray-600 to-gray-100" },
  { name: "APIs", level: 80, color: "from-indigo-400 to-purple-500" },
  { name: "MySQL", level: 90, color: "from-blue-500 to-indigo-600" },
  { name: "MongoDB", level: 90, color: "from-green-500 to-teal-600" },
  { name: "Python", level: 70, color: "from-yellow-500 to-green-500" },
  { name: "Git Bash", level: 80, color: "from-gray-500 to-gray-100" },
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-lg text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
