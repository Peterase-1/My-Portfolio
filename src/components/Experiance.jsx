import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications using MERN stack, mentoring junior developers, and architecting scalable solutions.',
      achievements: [
        'Architected and deployed 10+ full-stack applications',
        'Reduced application load time by 60% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Mentored 5+ junior developers in modern web technologies',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Hybrid',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using PERN stack, focusing on performance and user experience.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Integrated third-party APIs and payment gateways',
        'Improved code quality with comprehensive testing',
        'Collaborated with cross-functional teams',
      ],
      technologies: ['React', 'PostgreSQL', 'Express', 'JavaScript'],
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Web Agency',
      location: 'On-site',
      period: '2019 - 2020',
      description: 'Created pixel-perfect, responsive user interfaces and collaborated with designers to bring creative visions to life.',
      achievements: [
        'Developed 20+ landing pages and web interfaces',
        'Implemented animations and micro-interactions',
        'Ensured cross-browser compatibility',
        'Achieved 98% client satisfaction rate',
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Figma'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Work </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-gray-400 to-black dark:from-white dark:via-gray-600 dark:to-white transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-6 h-6 bg-black dark:bg-white rounded-full border-4 border-gray-50 dark:border-gray-900"></div>
                </div>

                {/* Experience card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-black p-8 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mr-3 mt-2"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};