import React, { useEffect, useRef } from "react";
import ParticlesComponent from "./ParticlesComponent";
import { GithubIcon, LinkedinIcon, Download, ChevronDown } from "lucide-react";

const Hero = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef?.current?.push(sectionRef.current);
  }, [sectionsRef]);

  return (
    <div id="home" ref={sectionRef} className="min-h-screen relative overflow-hidden bg-black">
      {/* Particles Background */}
      <ParticlesComponent />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">Sivaprakasam T</h1>
        <h2 className="text-3xl md:text-4xl mb-8">Fullstack Developer</h2>

        {/* Buttons */}
        <div className="flex gap-4 mb-12 justify-center">
          <a
            href="Public\Sivaprakasam_T-Resume.pdf" // Replace with the actual path to your resume file
            download="Sivaprakasam_T_Resume.pdf" // The name of the downloaded file
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} /> Download Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-white/50 px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-pink-200 transition-colors duration-300 transform hover:scale-110"
          >
            <GithubIcon size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-200 transition-colors duration-300 transform hover:scale-110"
          >
            <LinkedinIcon size={28} />
          </a>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={36} className="text-white/80" />
        </div>
      </div>
    </div>
  );
};

export default Hero;