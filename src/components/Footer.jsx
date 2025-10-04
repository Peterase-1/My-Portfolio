export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {'<Dev />'}
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Crafted by</span>
            <span className="font-semibold text-gray-900 dark:text-white">Petros Asegid</span>
          </div>

          <div className="text-gray-600 dark:text-gray-400">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
