"use client"
import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"


const Header = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }
    return(
        <>
              <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#D4AF37]/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-[#D4AF37]">
              Shakur Galla
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ color: "#D4AF37" }}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-[#D4AF37]/20"
            >
              {["home", "about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

        </>
    )
}
export default Header;