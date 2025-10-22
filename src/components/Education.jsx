import { Award, Calendar, MapPin, ExternalLink, BookOpen } from 'lucide-react';

export const Education = () => {

  const trainings = [
    {
      title: 'INSA Summer Camp',
      provider: 'INSA',
      duration: 'Summer Program',
      date: '2025',
      description: 'Intensive summer training program covering advanced software development concepts and modern technologies.',
      skills: ['Software Development', 'Programming', 'Team Collaboration', 'Project Management'],
      type: 'Summer Camp'
    },
    {
      title: 'Software Development Scholarship',
      provider: 'PLP Academy',
      duration: 'Scholarship Program',
      date: '2025',
      description: 'Comprehensive scholarship program focused on full-stack software development and industry best practices.',
      skills: ['Full Stack Development', 'Web Technologies', 'Database Design', 'API Development'],
      type: 'Scholarship Program'
    }
  ];

  const certificates = [
    {
      title: 'Advanced JavaScript 1: Objects, Loops, Hoisting',
      issuer: 'Scrimba & Coursera',
      date: '2025-07-02',
      credentialId: 'PP3ILGY1QOXA',
      description: 'Advanced JavaScript concepts including objects, loops, and hoisting mechanisms.',
      skills: ['JavaScript', 'Objects', 'Loops', 'Hoisting', 'Advanced Concepts'],
      verificationUrl: 'https://coursera.org/verify/PP3ILGY1QOXA',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Scrimba_logo.svg/1200px-Scrimba_logo.svg.png'
    },
    {
      title: 'AI Website Building Bootcamp',
      issuer: 'Udemy',
      date: '2025-06-19',
      credentialId: 'UC-86811059-d465-4c84-a838-f16a0440410',
      description: 'Comprehensive bootcamp covering AI-powered website development and modern web technologies.',
      skills: ['AI', 'Web Development', 'Modern Technologies', 'Bootcamp'],
      verificationUrl: 'https://ude.my/UC-86811059-d465-4c84-a838-f16a0440410',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/1200px-Udemy_logo.svg.png'
    },
    {
      title: 'Android Developer Fundamentals',
      issuer: 'Udacity',
      date: '2025-07-09',
      credentialId: 'dd94686e-5cfe-11f0-a98f-df0b43ce6af5',
      description: 'Comprehensive nanodegree program covering Android development fundamentals and best practices.',
      skills: ['Android', 'Mobile Development', 'Java', 'Kotlin', 'App Development'],
      verificationUrl: 'https://www.udacity.com/certificate/e/dd94686e-5cfe-11f0-a98f-df0b43ce6af5',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Udacity_logo.svg/1200px-Udacity_logo.svg.png'
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'Udacity',
      date: '2025-02-26',
      credentialId: '8b6c51ba-f218-11ef-9086-07caa3a3cb7f',
      description: 'Comprehensive nanodegree program covering AI fundamentals, machine learning, and data science.',
      skills: ['AI', 'Machine Learning', 'Data Science', 'Python', 'Fundamentals'],
      verificationUrl: 'https://www.udacity.com/certificate/e/8b6c51ba-f218-11ef-9086-07caa3a3cb7f',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Udacity_logo.svg/1200px-Udacity_logo.svg.png'
    },
    {
      title: 'Data Analysis Fundamentals',
      issuer: 'Udacity',
      date: '2024-10-29',
      credentialId: '01d4a286-62df-11ef-bb9e-a743e431678d',
      description: 'Comprehensive nanodegree program covering data analysis, statistics, and data visualization.',
      skills: ['Data Analysis', 'Statistics', 'Python', 'Data Visualization', 'Pandas'],
      verificationUrl: 'https://www.udacity.com/certificate/e/01d4a286-62df-11ef-bb9e-a743e431678d',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Udacity_logo.svg/1200px-Udacity_logo.svg.png'
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google & Coursera',
      date: '2025-03-31',
      credentialId: '3HFENJBFH50H',
      description: 'Comprehensive course covering cybersecurity fundamentals, network security, and threat analysis.',
      skills: ['Cybersecurity', 'Network Security', 'Threat Analysis', 'Security Fundamentals'],
      verificationUrl: 'https://coursera.org/verify/3HFENJBFH50H',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
    },
    {
      title: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'IBM & Coursera',
      date: '2025-03-31',
      credentialId: '9JQNI8AUVHKW',
      description: 'Comprehensive introduction to AI concepts, machine learning, and IBM AI technologies.',
      skills: ['AI', 'Machine Learning', 'IBM Technologies', 'AI Fundamentals'],
      verificationUrl: 'https://coursera.org/verify/9JQNI8AUVHKW',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png'
    },
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM & Coursera',
      date: '2025-03-31',
      credentialId: 'ZYYYBYJ509W4',
      description: 'Comprehensive course covering Python programming for data science, AI, and development applications.',
      skills: ['Python', 'Data Science', 'AI', 'Development', 'Programming'],
      verificationUrl: 'https://coursera.org/verify/ZYYYBYJ509W4',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png'
    },
    {
      title: 'Professional Diploma in Social Media Marketing & Management',
      issuer: 'Udemy',
      date: '2025-07-13',
      credentialId: 'UC-3e638e6d-3d8f-4688-a534-34f8d9641104',
      description: 'Comprehensive diploma program covering social media marketing strategies and management techniques.',
      skills: ['Social Media Marketing', 'Digital Marketing', 'Management', 'Strategy'],
      verificationUrl: 'https://ude.my/UC-3e638e6d-3d8f-4688-a534-34f8d9641104',
      icon: <Award size={32} />,
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/1200px-Udemy_logo.svg.png'
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
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => window.open(cert.verificationUrl, '_blank')}
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-200 hover:scale-110"
                        title={`View ${cert.issuer} Certificate`}
                        aria-label={`View ${cert.issuer} Certificate`}
                      >
                        <img
                          src={cert.companyLogo}
                          alt={`${cert.issuer} Logo`}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400" style={{ display: 'none' }}>
                          {cert.issuer.split(' ')[0]}
                        </div>
                      </button>
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
