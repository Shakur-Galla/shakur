import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Menu, X, Settings } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-gray-900 flex items-center"
            >
              Shakur Galla
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              {["home", "about", "projects", "skills"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ color: "#2563eb" }}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </motion.button>
              ))}

              {/* Action buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                ></motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Contact
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-200 bg-white"
            >
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-3 px-4 capitalize text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                )
              )}

              <div className="mt-4 pt-4 border-t border-gray-200 px-4 space-y-3">
                <button className="w-full text-left py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-2.5 bg-gray-900 text-white text-center font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};
export default Header;
