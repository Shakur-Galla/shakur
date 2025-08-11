"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Menu,
  X,
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
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Hero = () => {
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

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Shakur <span className="text-[#D4AF37]">Galla</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full-Stack & Mobile Developer
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I'm a passionate and detail-oriented full-stack developer with a
              strong focus on building intuitive, high-performance web
              applications. I specialize in modern technologies like Next.js,
              TypeScript, Tailwind CSS, and Node.js, and I bring ideas to life
              through clean code, thoughtful architecture, and polished UI/UX.
              Whether I'm developing scalable backend systems, integrating
              third-party APIs like Stripe, or crafting dynamic frontends with
              Framer Motion, I strive to create solutions that are both
              technically robust and user-friendly. I'm constantly learning,
              iterating, and pushing boundaries to deliver work that makes a
              meaningful impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-[#D4AF37]" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
