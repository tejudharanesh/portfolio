import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const RESUME_LINK =
  "https://drive.google.com/file/d/1AWwilqjGFMawjxR9SMtQH5KphsVewIiu/view?usp=sharing";

export const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Background Image on Right */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div className="relative w-full h-full">
          <img
            src="/assets/profile.png"
            alt="Developer portrait"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 w-[90%] max-w-4xl mx-auto lg:text-left lg:max-w-6xl lg:flex lg:items-center lg:justify-between mt-2 py-10">
        <div className="animate-fade-in lg:w-1/2">
          <div className="mb-4">
            <span className="text-lg text-gray-300">Hello,</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="text-white">I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TEJU D
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-gray-300 mb-2">From Bengaluru , India</p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl lg:max-w-lg leading-relaxed hidden md:block">
            Crafting beautiful digital experiences with modern technologies
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl lg:max-w-lg leading-relaxed md:hidden ">
            Full-Stack Developer with 1+ year of experience building scalable
            web applications using JavaScript, TypeScript, React.js, Node.js,
            Express.js, MongoDB, and MySQL. Delivered 80% increase in user
            engagement and 90% automation efficiency by developing
            high-performance solutions. Strong expertise in RESTful APIs,
            real-time systems, and responsive UI design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-44 md:w-auto"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full"
              >
                Hire Me
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-2 w-44 border-white/20 bg-white/50 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300"
              onClick={handleScrollToProjects}
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Decorative Elements for Mobile */}
        <div className="lg:hidden mt-1">
          <div className="relative w-64 h-auto mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce ">
        <ArrowDown className="text-white/60 w-6 h-6" />
      </div>
    </section>
  );
};
