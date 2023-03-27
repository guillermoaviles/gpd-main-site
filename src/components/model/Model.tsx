import React from 'react'
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
// import displayModel from ""

interface ModelRenderProps {
  url: string;

}

function ModelRender({ url }: ModelRenderProps) {
  const geom = useLoader(STLLoader, url);
  console.log(geom);
  return (
    <group scale={6}>
      <mesh geometry={geom} rotation={[8, 3, 19]}>
        <meshMatcapMaterial color="#ec6652" />
      </mesh>
    </group>

  );
}

export default function Model() {
  return (
    <div className="App">
      <Canvas
        style={{ height: "400px" }}
        camera={{ position: [450, 650, 20], fov: 30 }}
      >
        <Suspense fallback={"loading..."}>
          <ModelRender url="/evian-display.stl" />
        </Suspense>
        <OrbitControls panSpeed={0.5} rotateSpeed={0.4} autoRotate={true} enableZoom={false} />
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={1.5}
          angle={0.1}
          penumbra={1}
          position={[450, 350, 20]}
        />
        <spotLight
          intensity={1.5}
          angle={2.5}
          penumbra={1}
          position={[150, 150, 40]}
        />
      </Canvas>
    </div>
  );
}
