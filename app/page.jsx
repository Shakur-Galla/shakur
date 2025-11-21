"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Palette,
  Smartphone,
  Database,
  Globe,
  ShoppingCart,
  CheckSquare,
  Server,
  Camera,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";


// Sample data for skills
const skills = [
  { name: "Frontend Development", icon: <Code className="w-6 h-6" />, level: 90 },
  { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, level: 85 },
  { name: "Mobile Development", icon: <Smartphone className="w-6 h-6" />, level: 80 },
  { name: "Backend Development", icon: <Server className="w-6 h-6" />, level: 85 },
  { name: "Database Management", icon: <Database className="w-6 h-6" />, level: 75 },
  { name: "DevOps & Deployment", icon: <Globe className="w-6 h-6" />, level: 70 },
];

const Portfolio = () => {

  const [expandedProject, setExpandedProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleProjectExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects/>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I specialize in
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{skill.name}</h3>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-600">{skill.level}% proficiency</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create
              something amazing together.
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">gall.abdulshakur@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(+234) 903 190 1447</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold mb-4 text-gray-900">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "https://github.com/Shakur-Galla",
                      label: "GitHub"
                    },
                    {
                      icon: <Mail className="w-5 h-5" />,
                      href: "mailto:gall.abdulshakur@gmail.com",
                      label: "Email"
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 flex items-center space-x-2 shadow-sm"
                      aria-label={social.label}
                    >
                      {social.icon}
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Your Name"
                  className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 placeholder-gray-500 rounded-lg"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 placeholder-gray-500 rounded-lg"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 placeholder-gray-500 rounded-lg"
              />
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 placeholder-gray-500 rounded-lg resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Shakur Galla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;