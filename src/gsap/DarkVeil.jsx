import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * The Particle Wave Logic
 */
function Waves({ isMobile }) {
  const points = useRef();

  // 1. Responsive Configuration
  // Fewer particles on mobile for performance (2000 vs 6000)
  const count = isMobile ? 2000 : 6000;
  // Spread them wider on mobile so they don't look clumped
  const xSpread = isMobile ? 15 : 20;
  
  // 2. Generate Particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // X: Spread across width
      positions[i * 3] = (Math.random() - 0.5) * xSpread; 
      // Y: Random height (base)
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      // Z: Depth
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; 
    }
    return positions;
  }, [count, xSpread]);

  // 3. Animation Loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate the wave
    for (let i = 0; i < count; i++) {
      const x = particlesPosition[i * 3];
      
      // Calculate Wave Movement
      // The Y position moves based on X position and Time
      const y = Math.sin(x / 2 + time * 0.5) * 2 + Math.sin(x * 2 + time * 0.5) * 0.5;
      
      // Update Y position directly in the buffer attribute
      // Note: We are accessing the current geometry of the ref
      points.current.geometry.attributes.position.array[i * 3 + 1] = y;
    }
    
    // Tell Three.js the positions have updated
    points.current.geometry.attributes.position.needsUpdate = true;

    // Mouse Interaction / Auto Rotation
    if (isMobile) {
      // Auto-rotate slowly on mobile
      points.current.rotation.y = time * 0.05;
    } else {
      // React to mouse on desktop
      const mouseX = state.mouse.x * 0.5;
      const mouseY = state.mouse.y * 0.2;
      points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, mouseY, 0.1);
      points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, mouseX, 0.1);
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.03 : 0.015} // Dots are slightly bigger on mobile for visibility
        color="#06b6d4" // Cyan-500
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Main Exported Component
 */
export default function DarkVeil() {
  // Simple check for mobile width (server-side safe)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 12 : 8], fov: 75 }} // Camera further back on mobile
        dpr={[1, 2]} // Optimizes pixel ratio for performance
        gl={{ antialias: false, alpha: true }} // Disabling antialias boosts mobile FPS
      >
        {/* Fog to fade particles into the background color */}
        <fog attach="fog" args={['#050505', 5, 20]} />
        <Waves isMobile={isMobile} />
      </Canvas>
    </div>
  );
}