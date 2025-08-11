"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"
import Me from '@/public/shakur.jpg'


const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-[#1A1A1A] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-[#D4AF37]">Me</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30">
                  <Image
                    src={Me}
                    alt="Profile"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#D4AF37] rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#D4AF37] rounded-full opacity-30" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-[#D4AF37]">
                Passionate Developer & Problem Solver 
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over 3 years of experience in web and mobile development, I
                specialize in creating digital experiences that are both
                beautiful and functional. My journey began with a curiosity for
                how things work, which led me to explore the intersection of
                technology and problem solving.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in the power of clean code, intuitive design, and
                continuous learning. When I'm not coding, you can find me
                exploring new technologies, or mentoring aspiring developers.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
                  Continuous Learner
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
