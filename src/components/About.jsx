import { Code2, Database, Server, Sparkles } from 'lucide-react';

export const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const expertise = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      description: 'React, JavaScript, Next.js, Tailwind CSS',
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Node.js, Express, RESTful APIs',
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      description: 'MongoDB, PostgreSQL, Supabase',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Full Stack Solutions',
      description: 'MERN & PERN Stack Architecture',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-black to-gray-400 dark:from-white dark:to-gray-600"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Passionate Full Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  With expertise in both MERN and PERN stacks, I specialize in building
                  scalable web applications that deliver exceptional user experiences.
                  My approach combines technical excellence with creative problem-solving.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I believe in writing clean, maintainable code and staying updated with
                  the latest technologies to deliver cutting-edge solutions that drive
                  business growth and user engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-200"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-200 hover:transform hover:scale-105"
            >
              <div className="text-gray-900 dark:text-white mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
