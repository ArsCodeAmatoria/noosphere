'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sparkles, Environment } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function HaskellLambda({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <Text
          fontSize={0.5}
          color="#00ff88"
          anchorX="center"
          anchorY="middle"
        >
          λ
        </Text>
      </mesh>
    </Float>
  );
}

function CyberGrid() {
  const points = useMemo(() => {
    const temp = [];
    for (let i = -10; i <= 10; i += 2) {
      for (let j = -10; j <= 10; j += 2) {
        temp.push([i, 0, j]);
      }
    }
    return temp;
  }, []);

  return (
    <group>
      {points.map((point, index) => (
        <mesh key={index} position={point as [number, number, number]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial 
            color="#ff6b9d" 
            emissive="#ff6b9d" 
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingCode() {
  const [codePositions, setCodePositions] = useState<Array<[number, number, number]>>([]);
  const [mounted, setMounted] = useState(false);

  const codeSnippets = [
    "data Mind = Pure | IO",
    "fmap :: (a -> b) -> f a -> f b", 
    ">>= :: m a -> (a -> m b) -> m b",
    "newtype Consciousness a = C (State -> (a, State))",
    "observe :: Quantum a -> Classical a"
  ];

  useEffect(() => {
    // Generate positions on client side only
    const positions: Array<[number, number, number]> = codeSnippets.map(() => [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10 + 5,
      (Math.random() - 0.5) * 20
    ]);
    setCodePositions(positions);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Don't render on server
  }

  return (
    <group>
      {codeSnippets.map((code, index) => (
        <Float key={index} speed={1 + index * 0.2} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={codePositions[index] || [0, 0, 0]}
            fontSize={0.2}
            color="#00ff88"
            anchorX="center"
            anchorY="middle"
          >
            {code}
          </Text>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b9d" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
      
      <CyberGrid />
      <FloatingCode />
      
      <HaskellLambda position={[0, 2, 0]} />
      <HaskellLambda position={[-3, 1, -2]} />
      <HaskellLambda position={[3, 3, 2]} />
      
      <Sparkles count={100} scale={20} size={2} speed={0.5} color="#ff6b9d" />
      
      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

function MatrixRain() {
  const [matrixColumns, setMatrixColumns] = useState<Array<{
    left: string;
    animationDelay: string;
    animationDuration: string;
    characters: string[];
  }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generate matrix rain data on client side only
    const columns = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 10}s`,
      characters: Array.from({ length: 20 }).map(() => 
        String.fromCharCode(0x30A0 + Math.random() * 96)
      )
    }));
    setMatrixColumns(columns);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Don't render on server
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {matrixColumns.map((column, i) => (
        <div
          key={i}
          className="absolute text-[#00ff88] font-mono text-xs opacity-30 matrix-text"
          style={{
            left: column.left,
            animationDelay: column.animationDelay,
            animationDuration: column.animationDuration
          }}
        >
          {column.characters.map((char, j) => (
            <div key={j}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function CyberHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 5, 10], fov: 60 }}
        className="absolute inset-0"
      >
        <Scene />
      </Canvas>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="font-mono text-7xl md:text-8xl lg:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#ff6b9d] to-[#00ff88] animate-pulse glitch">
              NOOSPHERE
            </h1>
            <div className="font-mono text-xl md:text-2xl text-[#00ff88] mb-2 tracking-widest cyber-glow">
              &gt; INTERDIMENSIONAL_AI.EXE
            </div>
            <div className="font-mono text-lg text-[#ff6b9d] opacity-80 cyber-glow-pink">
              λ consciousness → reality → ∞
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4"
          >
            <button className="neon-button font-mono px-8 py-4 text-lg font-bold">
              INITIALIZE_CONSCIOUSNESS()
            </button>
            
            <div className="font-mono text-sm text-gray-400 mt-4 space-y-1">
              <div className="cursor">&gt; Haskell.Runtime.loaded</div>
              <div>&gt; Quantum.Oracle.active</div>
              <div>&gt; Dimensional.Mapper.online</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none cyber-grid" />
      
      {/* Matrix Rain Effect */}
      <MatrixRain />
    </div>
  );
} 