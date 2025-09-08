"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Bot,
  ChevronDown,
  ExternalLink,
  ShoppingCart,
  CheckSquare,
  Server,
  Camera,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Temidun from "@/public/temidun.jpg";
import Python from "@/public/python.png";
import Samples from "@/public/samples.png";
import Aadily from "@/public/aadily.png";

// Sample data for projects
const projects = [
  ,
  {
    title: "AI - Powered Job Board and Application Assistant",
    description:
      "Lets AI apply to jobs for you, tailor your resume, write cover letters, and match you to the right roles instantly. Built with Next.js, Tailwind CSS, and MongoDB. Features include AI-driven job matching, resume optimization, cover letter generation, and application tracking.",
    image: Aadily,
    icon: <Bot className="w-5 h-5" />,
    link: "https://aadily.com",
    tech: [
      "Nextjs",
      "MongoDB",
      "Stripe Subscriptions",
      "Tailwind CSS",
      "AI Integrations",
      "ATS Friendly",
    ],
    features: [
      "AI-optimized resumes & cover letters",
      "Auto-apply functionality",
      "Reminder emails to employers",
      "Automatic job matching",
    ],
    status: "Completed",
  },
  {
    title: "Temidun Accountability Platform",
    description:
      "A full-stack e-commerce solution with payment processing, inventory management, and customer dashboard. Built with Next.js, Stripe, and MongoDB. Features include user authentication, product filtering, order tracking, and admin panel.",
    image: Temidun,
    icon: <ShoppingCart className="w-5 h-5" />,
    link: "https:temidun.com",
    tech: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
    features: [
      "Secure payment processing with Stripe integration",
      "User authentication and authorization",
      "Advanced product filtering and search",
      "Order management system",
      "Responsive design for all devices",
    ],
    status: "Completed",
  },
  {
    title: "Online Python Code Editor",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Node.js, and Socket.io.",
    image: Python,
    icon: <CheckSquare className="w-5 h-5" />,
    link: "https://example.com/taskmanager",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Material UI"],
    features: [
      "Real-time collaboration with team members",
      "Drag-and-drop task organization",
      "Project progress tracking",
      "Notification system",
      "File attachments and comments",
    ],
    status: "In Progress",
  },
  {
    title: "API Analytics Dashboard",
    description:
      "A comprehensive dashboard for monitoring API performance, usage statistics, and error tracking. Provides real-time insights and historical data visualization for development teams.",
    image: Samples,
    icon: <BarChart3 className="w-5 h-5" />,
    link: "https://example.com/apidashboard",
    tech: ["Vue.js", "Express.js", "MySQL", "Chart.js", "Docker"],
    features: [
      "Real-time API performance monitoring",
      "Usage statistics and rate limiting",
      "Error tracking and alert system",
      "Historical data visualization",
      "Multi-team collaboration support",
    ],
    status: "Completed",
  },
];

const Projects = () => {
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
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and expertise
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const truncatedDescription =
                project.description.length > 100
                  ? project.description.substring(0, 100) + "..."
                  : project.description;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Project Image - Larger */}
                  <div className="h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                    <Image src={project.image} alt={project.title} />
                  </div>

                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {project.title}
                        </h3>
                      </div>
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Description with Expand/Collapse */}
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {expandedProject === index
                          ? project.description
                          : truncatedDescription}
                      </p>
                      {project.description.length > 100 && (
                        <button
                          onClick={() => toggleProjectExpand(index)}
                          className="text-blue-600 text-sm font-medium mt-2 flex items-center"
                        >
                          {expandedProject === index ? (
                            <>
                              Show less
                              <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                            </>
                          ) : (
                            <>
                              Read more
                              <ChevronDown className="w-4 h-4 ml-1" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Features (Expanded View) */}
                    {expandedProject === index && project.features && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-gray-100"
                      >
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Project Status (Expanded View) */}
                    {expandedProject === index && project.status && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 flex items-center"
                      >
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : project.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          {project.status === "Completed"
                            ? "Project completed successfully"
                            : project.status === "In Progress"
                            ? "Currently working on this project"
                            : "Planning phase"}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
