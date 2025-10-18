import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'pasegid@gmail.com',
      link: 'mailto:pasegid@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+251945801419',
      link: 'tel:+251945801419',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: 'https://github.com',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.68-.9.42l-2.49-1.84-1.2 1.16c-.13.13-.24.24-.49.24l.18-2.56 4.64-4.2c.2-.18-.05-.28-.31-.1l-5.74 3.61-2.47-.77c-.54-.17-.55-.54.11-.8l9.57-3.69c.45-.17.84.1.7.8z" />
        </svg>
      ),
      label: 'Telegram',
      link: 'https://t.me/pasegid',
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      link: 'https://instagram.com/pasegid',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      label: 'Discord',
      link: 'https://discord.com/users/pasegid',
    },
    {
      icon: <MessageSquare size={24} />,
      label: 'WhatsApp',
      link: 'https://wa.me/251945801419',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Get in </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Talk About Your Project
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-black rounded-xl border-2 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-200 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {info.label}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-black rounded-xl border-2 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white text-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-black p-8 rounded-2xl border-2 border-gray-200 dark:border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-950 border-2 border-gray-200 dark:border-zinc-800 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition-colors text-gray-900 dark:text-white"
                  placeholder="Alemayehu Tesfaye"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-950 border-2 border-gray-200 dark:border-zinc-800 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition-colors text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-950 border-2 border-gray-200 dark:border-zinc-800 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition-colors text-gray-900 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-950 border-2 border-gray-200 dark:border-zinc-800 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition-colors text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
