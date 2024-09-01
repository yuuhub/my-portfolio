import { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene-draco.gltf', true);

  useEffect(() => {
    return () => {
      if (computer) computer.scene.dispose();
    };
  }, [computer]);

  return (
    <mesh>
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.65}
        position={[0, -3, -1.2]}
        
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMediaQueryChange = useCallback((event) => {
    setIsMobile(event.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, [handleMediaQueryChange]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
    <ambientLight intensity={2.2} />
    <hemisphereLight
      skyColor={0xffffbb}
      groundColor="black"
      intensity={0.15}
    />
    <pointLight position={[20, 3, 5]} intensity={1}/>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas;
