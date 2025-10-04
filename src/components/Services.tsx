import { Code, Palette, Rocket, Zap, Shield, Smartphone } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using MERN and PERN stacks with modern best practices.',
      features: ['React & Next.js', 'Node.js & Express', 'RESTful APIs', 'Database Design'],
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Implementation',
      description: 'Pixel-perfect responsive designs that provide exceptional user experiences across all devices.',
      features: ['Responsive Design', 'Tailwind CSS', 'Animation', 'Accessibility'],
    },
    {
      icon: <Rocket size={40} />,
      title: 'Performance Optimization',
      description: 'Speed and efficiency optimization to ensure your application runs at peak performance.',
      features: ['Code Splitting', 'Lazy Loading', 'Caching', 'SEO Optimization'],
    },
    {
      icon: <Zap size={40} />,
      title: 'API Development',
      description: 'Robust and scalable API architecture with comprehensive documentation and testing.',
      features: ['REST APIs', 'GraphQL', 'Authentication', 'Rate Limiting'],
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & Testing',
      description: 'Implementation of security best practices and comprehensive testing strategies.',
      features: ['JWT Auth', 'Data Validation', 'Unit Testing', 'Integration Tests'],
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Progressive Web Apps',
      description: 'Modern PWA development for offline-first, installable web applications.',
      features: ['Service Workers', 'Offline Support', 'Push Notifications', 'App-like UX'],
    },
  ];

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'MongoDB & PostgreSQL', level: 88 },
    { name: 'TypeScript', level: 92 },
    { name: 'Tailwind CSS', level: 94 },
    { name: 'Git & DevOps', level: 85 },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Services & </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-gray-900 dark:text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-8 sm:p-12 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Technical Proficiency
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
