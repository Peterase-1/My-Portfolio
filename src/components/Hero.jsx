import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full">
                  Petros Asegid
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">Full Stack</span>
                <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg">
                Building innovative web solutions with MERN & PERN stack.
                Transforming ideas into scalable, high-performance applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative background elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-gray-300 dark:border-gray-700 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-4 border-gray-300 dark:border-gray-700 rounded-full opacity-50"></div>

              <div className="absolute top-1/4 -right-12 w-24 h-24 opacity-30">
                <div className="w-full h-full border-2 border-gray-400 dark:border-gray-600 rotate-45"></div>
              </div>

              <div className="absolute bottom-1/4 -left-12 w-20 h-20 opacity-30">
                <div className="w-full h-full border-2 border-gray-400 dark:border-gray-600"></div>
              </div>

              {/* Geometric shapes */}
              <div className="absolute top-12 right-4 w-16 h-16 bg-gray-200 dark:bg-gray-800 opacity-40 rotate-12"></div>
              <div className="absolute bottom-16 left-8 w-12 h-12 bg-gray-300 dark:bg-gray-700 opacity-40 rounded-full"></div>

              {/* Abstract lines */}
              <svg className="absolute top-0 right-0 w-32 h-32 opacity-20" viewBox="0 0 100 100">
                <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" />
                <line x1="30" y1="10" x2="90" y2="70" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" />
                <line x1="10" y1="30" x2="70" y2="90" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" />
              </svg>

              <svg className="absolute bottom-0 left-0 w-28 h-28 opacity-20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" />
              </svg>

              {/* Photo container - no border */}
              <div className="relative z-10 aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-3xl transform rotate-3 opacity-50"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl font-bold text-gray-300 dark:text-gray-700 mb-2">P</div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Your borderless photo here</p>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">Place your cutout photo with transparent background</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional decorative dots */}
              <div className="absolute top-1/2 -right-4 space-y-2">
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              </div>

              <div className="absolute bottom-1/3 -left-4 space-x-2 flex">
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};
