import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * 📸 OPTICAL TEXTURE GENERATOR
 * Creates a "Bokeh" texture (like an out-of-focus camera lens).
 * It has a bright center and a soft fall-off.
 */
function getBokehTexture() {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement("canvas");
  const size = 64; 
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const center = size / 2;

  // Create a radial gradient mimicking a camera aperture light leak
  const gradient = context.createRadialGradient(center, center, 0, center, center, center);
  
  // Core (Bright light source)
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)"); 
  // Mid (Soft glow)
  gradient.addColorStop(0.4, "rgba(200, 240, 255, 0.5)"); 
  // Edge (Fade out)
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); 

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

/**
 * 🎬 CINEMATIC FIELD
 */
function CinematicField({ isMobile }) {
  const points = useRef();
  const bokehTexture = useMemo(() => getBokehTexture(), []);

  // Configuration: Fewer particles, but larger (for the Bokeh effect)
  const particleCount = isMobile ? 80 : 150;
  
  const { positions, scales, speeds, opacities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const sc = new Float32Array(particleCount);
    const sp = new Float32Array(particleCount); // Vertical speed
    const op = new Float32Array(particleCount); // Individual opacity

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Position: Spread wide, but keep them mostly in front of the camera
      pos[i3] = (Math.random() - 0.5) * 30;      // X: Wide cinematic aspect ratio
      pos[i3 + 1] = (Math.random() - 0.5) * 20;  // Y: Height
      pos[i3 + 2] = (Math.random() - 0.5) * 15;  // Z: Depth of field

      // Scale: Varied sizes to simulate distance and lens aperture
      sc[i] = Math.random() * 2 + 0.5; 
      
      // Speed: Different particles float at different speeds (parallax)
      sp[i] = (Math.random() * 0.01) + 0.002;
      
      // Opacity: Some are bright highlights, some are subtle dust
      op[i] = Math.random() * 0.5 + 0.1;
    }
    return { positions: pos, scales: sc, speeds: sp, opacities: op };
  }, [particleCount]);

  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // 1. Vertical Float (Like dust in a studio light)
      // We move them slowly upwards
      positions[i3 + 1] += speeds[i];
      
      // 2. Horizontal Sway (Organic movement)
      positions[i3] += Math.sin(time * 0.5 + positions[i3 + 1]) * 0.002;

      // 3. Reset when out of frame (Infinite Loop)
      if (positions[i3 + 1] > 10) {
        positions[i3 + 1] = -10;
        positions[i3] = (Math.random() - 0.5) * 30; // Randomize X on reset
      }
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;

    // 4. Subtle Camera Move (Parallax)
    // Simulates a heavy camera on a dolly track responding to mouse
    const mouseX = state.mouse.x * 0.5;
    const mouseY = state.mouse.y * 0.3;
    
    points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, -mouseY * 0.1, 0.05);
    points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, mouseX * 0.1, 0.05);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        {/* We use scale in the material size attenuation, but could pass as attribute too */}
      </bufferGeometry>
      
      <pointsMaterial
        map={bokehTexture}
        color="#06b6d4" // Cyan (Brand Color)
        size={0.8} // Base size (multiplied by attenuation)
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        alphaTest={0.01}
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Makes them glow like light sources
      />
    </points>
  );
}

/**
 * 🎥 MAIN COMPONENT
 */
export default function DarkVeil() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }} // 50mm lens feel (Standard Cinematic)
        dpr={[1, 2]}
        gl={{ 
          antialias: false, 
          powerPreference: "high-performance",
          alpha: true
        }}
      >
        {/* 
          Fog creates the "Atmosphere" or "Haze" found in film sets.
          It ensures particles fade out elegantly into the darkness.
        */}
        <fog attach="fog" args={['#050505', 8, 25]} />
        
        <CinematicField isMobile={isMobile} />
      </Canvas>
    </div>
  );
}