"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaDocker, FaPython, FaNode, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

import {
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
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import Temidun from "../public/temidun.jpg";
import Samples from "../public/samples.png";
import Python from "../public/python.png";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Temidun",
      description:
        "Temidun is a modern monitoring and reporting platform built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons on the frontend, and powered by Node.js, Express, and MongoDB on the backend. It features a fully integrated Stripe-based subscription system, allowing different access levels and usage tiers. I implemented secure role-based access control, real-time issue tracking, smart AI-assisted troubleshooting, and intuitive dashboards for both monitors and administrators.",
      tech: ["Next.js", "TypeScript", "Stripe", "Nodejs"],
      link: "https://temidun.com/",
      image: Temidun,
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Samples",
      description:
        "Samples is a vendor-focused platform built with React.js and Sanity CMS, designed to help businesses and creatives organize and showcase image samples. Vendors can easily upload, categorize, and manage pictures of their products or services, then share them with customers through clean, shareable galleries. With a simple interface and structured content backend, Samples streamlines how vendors present visual work to clients, whether for approvals, feedback, or inspiration.",
      tech: ["React", "Sanity"],
      link: "https://ayonete-samples.netlify.app/",
      image: Samples,
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Habani Python Code Editor",
      description:
        "Habani Python Code Editor is an interactive browser-based Python coding environment built with Next.js, TypeScript, and Tailwind CSS. It uses Pyodide to run Python code directly in the browser, eliminating the need for any backend or installation. With a clean, responsive UI, real-time code execution, animated interactions via Framer Motion, and minimalistic design powered by Lucide Icons, Habani Python Code Editor is perfect for quick experiments, code demos, and learning on the go.",
      tech: ["Nextjs", "TypeScript"],
      image: Python,
      link: "https://pythoneditor.vercel.app/",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      level: 80,
    },

    {
      name: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      level: 82,
    },
    {
      name: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      level: 90,
    },
    {
      name: "Node.js",
      icon: <FaNode className="w-8 h-8" />,
      level: 90,
    },
    {
      name: "Reacts/Nextjs",
      icon: <FaReact className="w-8 h-8" />,
      level: 90,
    },
    {
      name: "Github",
      icon: <FaGithub className="w-8 h-8" />,
      level: 90,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className="w-8 h-8" />,
      level: 90,
    },
    {
      name: "TailwindCss",
      icon: <RiTailwindCssFill className="w-8 h-8" />,
      level: 90,
    },
    {
      name: "Docker",
      icon: <FaDocker className="w-8 h-8" />,
      level: 90,
    },
    {
      name: "Python",
      icon: <FaPython className="w-8 h-8" />,
      level: 90,
    },
  ];

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-[#D4AF37]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover border border-[#D4AF37]/10"
                  />
                </div>

                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37]">
                    {project.icon}
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-[#D4AF37]">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0F0F0F] rounded-2xl p-6 text-center hover:bg-[#0F0F0F]/80 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-[#D4AF37]">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#D4AF37] h-2 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-[#D4AF37]">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create
              something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">gall.abdulshakur@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">(+234) 903 190 1447</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "https://github.com/Shakur-Galla",
                    },
                    
                    {
                      icon: <Mail className="w-5 h-5" />,
                      href: "mailto:gall.abdulshakur@gmail.com",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-[#1A1A1A] rounded-xl text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                    >
                      {social.icon}
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
                  className="bg-[#1A1A1A] border-[#D4AF37]/30 focus:border-[#D4AF37] text-white placeholder-gray-400 rounded-xl"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#1A1A1A] border-[#D4AF37]/30 focus:border-[#D4AF37] text-white placeholder-gray-400 rounded-xl"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-[#1A1A1A] border-[#D4AF37]/30 focus:border-[#D4AF37] text-white placeholder-gray-400 rounded-xl"
              />
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="bg-[#1A1A1A] border-[#D4AF37]/30 focus:border-[#D4AF37] text-white placeholder-gray-400 rounded-xl resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shakur Galla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
