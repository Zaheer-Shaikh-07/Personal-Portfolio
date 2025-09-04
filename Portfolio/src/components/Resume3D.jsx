// Resume3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Html } from "@react-three/drei";
import { Suspense } from "react";

const ResumeBox = () => {
  return (
    <mesh rotation={[0.1, 0.4, 0]} castShadow>
      <boxGeometry args={[2.5, 3.5, 0.1]} />
      <meshStandardMaterial>
        <Html center>
          <img
            src="/resume-preview.png"
            alt="Resume Preview"
            className="w-[300px] h-[420px] object-fit rounded-md border-2 m-50 border-amber-500"
          />
        </Html>
      </meshStandardMaterial>
    </mesh>
  );
};

const Resume3D = () => {
  return (
    <div className="w-full h-[500px] rounded-4xl">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 1]} intensity={1} />
        <Suspense fallback={null}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap
            rotation={[0, 0.3, 0]}
            polar={[-0.4, 0.4]}
            azimuth={[-0.6, 0.6]}
          >
            <ResumeBox />
          </PresentationControls>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Resume3D;
