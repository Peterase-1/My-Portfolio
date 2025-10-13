import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      role: 'Software Development Engineer',
      company: 'Bluestock FinTech',
      location: 'Remote',
      period: '2025-09 - Present',
      type: 'Internship',
      description: 'Developing financial technology solutions and contributing to fintech applications using modern web technologies.',
      achievements: [
        'Working on financial technology projects',
        'Implementing secure payment solutions',
        'Collaborating with fintech development team',
        'Learning industry best practices',
      ],
      technologies: ['React', 'Node.js', 'Firebase', 'JavaScript', 'FinTech'],
    },
    {
      role: 'Full Stack Web Developer',
      company: 'Future Interns',
      location: 'Remote',
      period: '2025-10 - Present',
      type: 'Internship',
      description: 'Building full-stack web applications and gaining hands-on experience with modern development practices.',
      achievements: [
        'Developing full-stack applications',
        'Working with modern frameworks',
        'Implementing responsive designs',
        'Learning industry standards',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    },
    {
      role: 'Front End Developer',
      company: 'Codveda Technologies',
      location: 'Remote',
      period: '08-2025 - Present',
      type: 'Internship',
      description: 'Creating responsive user interfaces and implementing frontend solutions for various client projects.',
      achievements: [
        'Developing responsive web interfaces',
        'Implementing modern UI/UX designs',
        'Working with React.js and modern frameworks',
        'Ensuring cross-browser compatibility',
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      role: 'Campus Ambassador',
      company: 'Eduveda Academy',
      location: 'Remote',
      period: '08-2025 - Present',
      type: 'Internship',
      description: 'Representing the academy on campus and promoting educational programs while gaining leadership experience.',
      achievements: [
        'Promoting educational programs',
        'Building campus community',
        'Organizing educational events',
        'Developing leadership skills',
      ],
      technologies: ['Leadership', 'Communication', 'Event Management', 'Community Building'],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-gray-50 dark:border-gray-900"></div>
                </div>

                {/* Experience card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                  <div className="group bg-gray-50 dark:bg-zinc-950 p-6 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-gray-900 dark:text-white transform group-hover:scale-110 transition-transform duration-300">
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                          <span className="font-semibold text-sm">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </div>
                          <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-semibold bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-700"
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