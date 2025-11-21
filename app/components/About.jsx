"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Database,
  Globe,
  Zap,
  Users,
  Target,
} from "lucide-react";
import Image from "next/image";

import profilePic from "@/public/shakur.jpg";
const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about my journey, skills, and what drives me as a
              developer
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 rounded-xl overflow-hidden border-4 border-gray-100 shadow-lg bg-gray-200 flex items-center justify-center">
                  <Image src={profilePic} alt="Shakur Galla" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-80 flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-blue-100 rounded-full opacity-80 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With over 3 years of experience in web and mobile development, I
                specialize in creating digital experiences that are both
                beautiful and functional. My journey began with a curiosity for
                how things work, which led me to explore the intersection of
                technology and problem solving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am obsessed with using tech to solve problems and improve society.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  My Strengths
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      name: "Problem Solver",
                      icon: <Target className="w-4 h-4" />,
                    },
                    {
                      name: "Team Player",
                      icon: <Users className="w-4 h-4" />,
                    },
                    {
                      name: "Continuous Learner",
                      icon: <Zap className="w-4 h-4" />,
                    },
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-2"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mobile Apps</p>
                    <p className="text-sm text-gray-600">React Native</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Web Development</p>
                    <p className="text-sm text-gray-600">Next.js & React</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Backend</p>
                    <p className="text-sm text-gray-600">Node.js & APIs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
