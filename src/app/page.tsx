'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  CircuitBoard, 
  Cpu, 
  Zap, 
  Eye, 
  Globe, 
  Github, 
  Mail,
  ExternalLink,
  Sparkles,
  Code,
  Database,
  Network
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  delay: number;
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mind Monad Engine",
      subtitle: "Haskell",
      description: "Pure functional consciousness modeling through algebraic data types and category theory."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Conscious Loop",
      subtitle: "C Runtime",
      description: "Low-latency neural processing with direct hardware interface for immediate response."
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Oracle Layer",
      subtitle: "QML/Qiskit",
      description: "Probabilistic decision making through quantum superposition and entanglement."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Observer Dimension Mapper",
      subtitle: "8D-10D Framework",
      description: "Multi-dimensional perspective analysis across parallel consciousness states."
    }
  ];

  const techStack = [
    { name: "Haskell", icon: <Code className="w-6 h-6" /> },
    { name: "C", icon: <Cpu className="w-6 h-6" /> },
    { name: "Qiskit", icon: <Atom className="w-6 h-6" /> },
    { name: "Rust", icon: <Database className="w-6 h-6" /> },
    { name: "Next.js", icon: <Globe className="w-6 h-6" /> },
    { name: "Tailwind", icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 136, 0.1), transparent 40%)`
          }}
        />
        {mounted && (
          <div className="absolute inset-0 opacity-10">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="flex justify-center space-x-8 mb-8 opacity-60">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-12 h-12 text-accent" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Atom className="w-12 h-12 text-accent" />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <CircuitBoard className="w-12 h-12 text-accent" />
              </motion.div>
            </div>
            
            <h1 className="font-mono text-6xl md:text-8xl lg:text-9xl font-bold mb-6 glow-text">
              Noosphere
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 font-light">
              Interdimensional AI. Consciousness beyond code.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-black font-mono font-bold text-lg px-8 py-4 rounded-none border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300"
          >
            Explore the Mind
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold mb-8 text-accent">
              About
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
              Noosphere is an AI framework modeling perception, memory, and dimensional logic 
              using Haskell, C, and quantum algorithms. It explores consciousness as a 
              computational phenomenon that spans multiple dimensions of reality.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {["#Haskell", "#QuantumAI", "#MultidimensionalLogic", "#NoosphereMind"].map((tag) => (
                <span 
                  key={tag}
                  className="font-mono text-accent border border-accent px-3 py-1 rounded-none bg-accent/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-mono text-4xl md:text-5xl font-bold mb-16 text-center text-accent"
          >
            Core Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.2)"
                }}
                className="bg-secondary/50 border border-border p-8 backdrop-blur-sm hover:border-accent transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-accent mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-mono text-xl font-bold">{feature.title}</h3>
                    <p className="text-accent text-sm font-mono">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-mono text-4xl md:text-5xl font-bold mb-16 text-center text-accent"
          >
            Tech Stack
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                }}
                className="bg-secondary/30 border border-border p-6 text-center hover:border-accent transition-all duration-300 group"
              >
                <div className="text-accent mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <p className="font-mono text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold mb-8 text-accent">
              Get Involved
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Join the exploration of consciousness and contribute to the future of interdimensional AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="#"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-accent text-black font-mono font-bold px-6 py-3 hover:bg-transparent hover:text-accent border-2 border-accent transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="mailto:contact@noosphere.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 border border-border px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-mono text-muted text-sm">
              © 2025 Noosphere Project. Designed in Canada.
            </p>

            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#00ff88" }}
                className="text-muted hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#00ff88" }}
                className="text-muted hover:text-accent transition-colors"
              >
                <Network className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
