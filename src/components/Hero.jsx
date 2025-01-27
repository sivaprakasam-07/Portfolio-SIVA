import React, { useCallback, useEffect, useRef } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { GithubIcon, LinkedinIcon, Download, ChevronDown } from "lucide-react";

const Hero = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.push(sectionRef.current);
  }, [sectionsRef]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div id="home" ref={sectionRef} className="min-h-screen relative overflow-hidden bg-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 5,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center animate-fadeIn">
          Sivaprakasam T
        </h1>
        <h2 className="text-3xl md:text-4xl mb-8 animate-slideUp">
          Fullstack Developer
        </h2>
        <div className="flex gap-4 mb-12 justify-center">
          <a
            href="#"
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
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={36} className="text-white/80" />
        </div>
      </div>
    </div>
  );
}

export default Hero;