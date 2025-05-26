export const About = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                <img
                  src="/assets/profile2.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 1.5 years of experience in software development, I
              specialize in creating scalable web applications and mobile
              solutions. I'm passionate about clean code, user experience, and
              staying up-to-date with the latest technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or working on personal
              projects to improve my skills.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-2xl font-bold text-blue-400 mb-2">5+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-2xl font-bold text-purple-400 mb-2">1+</h4>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
