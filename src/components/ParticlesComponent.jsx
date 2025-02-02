import React from "react";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#000000" },
                particles: {
                    number: { value: 80, density: { enable: true, area: 800 } }, // Reduced particle count
                    color: { value: "#ffffff" }, // White color
                    shape: { type: "triangle" },
                    opacity: { value: 0.7, random: true },
                    size: { value: 3, random: true }, // Reduced size
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: "none",
                        outModes: "out",
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.6,
                        width: 1, // Reduced width
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 4 },
                    },
                },
                fullScreen: { enable: false }, // Disable full screen mode
            }}
            className="absolute inset-0"
        />
    );
};

export default ParticlesComponent;