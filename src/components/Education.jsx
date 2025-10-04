import { Award, Calendar, MapPin, ExternalLink, BookOpen } from 'lucide-react';

export const Education = () => {

  const trainings = [
    {
      title: 'INSA Summer Camp',
      provider: 'INSA',
      duration: 'Summer Program',
      date: '2024',
      description: 'Intensive summer training program covering advanced software development concepts and modern technologies.',
      skills: ['Software Development', 'Programming', 'Team Collaboration', 'Project Management'],
      type: 'Summer Camp'
    },
    {
      title: 'Software Development Scholarship',
      provider: 'PLP Academy',
      duration: 'Scholarship Program',
      date: '2024',
      description: 'Comprehensive scholarship program focused on full-stack software development and industry best practices.',
      skills: ['Full Stack Development', 'Web Technologies', 'Database Design', 'API Development'],
      type: 'Scholarship Program'
    }
  ];

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001',
      description: 'Demonstrates expertise in designing distributed systems on AWS platform.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
      verificationUrl: 'https://aws.amazon.com/verification',
      icon: <Award size={32} />
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2023',
      credentialId: 'META-REACT-2023-002',
      description: 'Advanced React development skills including hooks, context, and performance optimization.',
      skills: ['React', 'JavaScript', 'JSX', 'State Management', 'Performance'],
      verificationUrl: 'https://coursera.org/verify',
      icon: <Award size={32} />
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MONGODB-DEV-2022-003',
      description: 'Expertise in MongoDB database design, querying, and optimization.',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation', 'Indexing'],
      verificationUrl: 'https://university.mongodb.com/certification',
      icon: <Award size={32} />
    },
    {
      title: 'Node.js Backend Development',
      issuer: 'freeCodeCamp',
      date: '2022',
      credentialId: 'FCC-NODE-2022-004',
      description: 'Backend development with Node.js, Express, and RESTful API design.',
      skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Testing'],
      verificationUrl: 'https://freecodecamp.org/certification',
      icon: <Award size={32} />
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Education & </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        {/* Trainings and Certificates Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Trainings Section - Left Side */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Professional Trainings
            </h3>
            <div className="max-h-[400px] lg:max-h-[500px] overflow-y-auto scrollbar-hide space-y-3 lg:space-y-4">
              {trainings.map((training, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-zinc-950 p-4 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:transform hover:scale-102"
                >
                  <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div className="text-gray-900 dark:text-white transform group-hover:scale-110 transition-transform duration-300">
                      <BookOpen size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base lg:text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        {training.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-semibold text-xs lg:text-sm">{training.provider}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 lg:gap-2 text-xs text-gray-500 dark:text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {training.date}
                        </div>
                        <div className="text-xs">
                          {training.duration}
                        </div>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {training.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 lg:mb-4 leading-relaxed text-xs lg:text-sm">
                    {training.description}
                  </p>
                  <div className="flex flex-wrap gap-1 lg:gap-2">
                    {training.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-semibold bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section - Right Side */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Professional Certifications
            </h3>
            <div className="max-h-[400px] lg:max-h-[500px] overflow-y-auto scrollbar-hide space-y-3 lg:space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-zinc-950 p-4 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:transform hover:scale-102"
                >
                  <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div className="text-gray-900 dark:text-white transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-5 h-5 lg:w-6 lg:h-6">{cert.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base lg:text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-semibold text-xs lg:text-sm">{cert.issuer}</span>
                        <span className="text-xs lg:text-sm">•</span>
                        <span className="text-xs lg:text-sm">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 lg:mb-4 leading-relaxed text-xs lg:text-sm">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-1 lg:gap-2">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-semibold bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
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
