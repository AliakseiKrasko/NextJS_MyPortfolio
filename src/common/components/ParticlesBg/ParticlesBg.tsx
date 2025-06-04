"use client";
import { useEffect } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

export default function ParticlesBg() {
    useEffect(() => {
        loadSlim(tsParticles);
    }, []);

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10 pointer-events-none"
            options={{
                background: { color: "transparent" },
                particles: {
                    number: { value: 120, density: { enable: true } },
                    color: { value: "#084aed" },
                    shape: { type: "circle" },
                    opacity: { value: 0.6 },
                    size: { value: { min: 1, max: 4 } },
                    move: { enable: true, speed: 1.2, direction: "none", outModes: "out" },
                    links: { enable: true, color: "#a9c6ea", distance: 120, opacity: 1, width: 3 },
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "repulse" } },
                    modes: { repulse: { distance: 100, duration: 0.4 } },
                },
                detectRetina: true,
                fullScreen: false,
            }}
        />
    );
}