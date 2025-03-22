
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Menu, 
  X 
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-800 dark:text-white" /> : <Menu className="h-6 w-6 text-gray-800 dark:text-white" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 absolute w-full border-b border-gray-200 dark:border-gray-800 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" onClick={toggleMobileMenu}>
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" onClick={toggleMobileMenu}>
                Projects
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" onClick={toggleMobileMenu}>
                Skills
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" onClick={toggleMobileMenu}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 dark:bg-gray-700 mb-6 overflow-hidden">
          {/* Replace with your profile image */}
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            <span className="text-sm">Profile Image</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Your Name</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">Full Stack Developer</h2>
        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8">
          A passionate developer with expertise in creating beautiful, functional websites and applications.
        </p>
        <div className="flex space-x-4">
          <Button variant="outline" className="rounded-full">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
          <Button className="rounded-full">
            <ExternalLink className="mr-2 h-4 w-4" /> View Resume
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Me Section */}
        <section id="about" className="py-12">
          <AboutMe />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Project One" 
              description="A brief description of your first project and what technologies were used."
              tags={["React", "TypeScript", "Tailwind CSS"]}
              image="/placeholder.svg"
            />
            <ProjectCard 
              title="Project Two" 
              description="A brief description of your second project and what technologies were used."
              tags={["Next.js", "Node.js", "MongoDB"]}
              image="/placeholder.svg"
            />
            <ProjectCard 
              title="Project Three" 
              description="A brief description of your third project and what technologies were used."
              tags={["Vue.js", "Firebase", "SCSS"]}
              image="/placeholder.svg"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
