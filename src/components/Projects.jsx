import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'EthioHeritage 360',
      category: 'Tourism Platform',
      description: 'Ethiopia\'s comprehensive tourism ecosystem platform showcasing cultural heritage, historical sites, and travel experiences.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tourism API'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Yotor Local Furniture E-Commerce',
      category: 'E-Commerce',
      description: 'Local furniture e-commerce platform with product management, inventory tracking, and customer management system.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express', 'PostgreSQL', 'Payment Gateway'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Campus Sync',
      category: 'Student Management',
      description: 'Comprehensive student life management system for universities with academic tracking, social features, and campus services.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'PostgreSQL', 'JavaScript', 'Tailwind'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Nesus Lab Solutions',
      category: 'Laboratory Management',
      description: 'Advanced laboratory management system with sample tracking, test scheduling, and comprehensive reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Lab Management'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Markan Food Delivery',
      category: 'Food Platform',
      description: 'Accessible food delivery and menu platform with features for visually impaired users, voice navigation, and inclusive design.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express', 'Accessibility', 'Voice API'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Company Registration Module',
      category: 'Business Management',
      description: 'Digital company registration system with document management, approval workflows, and compliance tracking.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Document Management', 'Workflow'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white dark:bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-zinc-950 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-3">
                    <a
                      href={project.liveLink}
                      className="p-3 bg-white/90 dark:bg-black/90 rounded-full hover:scale-110 transition-transform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="text-black dark:text-white" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="p-3 bg-white/90 dark:bg-black/90 rounded-full hover:scale-110 transition-transform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="text-black dark:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
