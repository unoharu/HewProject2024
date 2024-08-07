import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export function City(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/city-transformed.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // 모든 애니메이션을 반복 재생합니다.
    Object.values(actions).forEach(action => {
      action.reset().setLoop(THREE.LoopRepeat).play();
    });
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Helicopter" position={[-4.099, 30.564, -96.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="Copter_1" position={[57.588, 2859.958, 0]} rotation={[-0.24, 0, Math.PI / 2]}>
            <mesh name="Propeller" castShadow receiveShadow geometry={nodes.Propeller.geometry} material={materials['World ap']} position={[10.541, 19.663, -40.163]} />
            <mesh name="Body" castShadow receiveShadow geometry={nodes.Body.geometry} material={materials['World ap']} position={[10.541, -16.401, 5.296]} />
          </group>
        </group>
        <group name="Helicopter_2" position={[7.294, 12.401, -24.155]} rotation={[Math.PI / 2, 0, -1.606]} scale={0.01}>
          <mesh name="Propeller_2" castShadow receiveShadow geometry={nodes.Propeller_2.geometry} material={materials['World ap']} position={[10.541, 19.663, -40.163]} />
          <mesh name="Body_2" castShadow receiveShadow geometry={nodes.Body_2.geometry} material={materials['World ap']} position={[10.541, -16.401, 5.296]} />
        </group>
        <group name="Gulls" position={[44.906, 39.282, -98.566]} rotation={[Math.PI / 2, 0, 2.155]} scale={0.01}>
          <mesh name="Gull_6" castShadow receiveShadow geometry={nodes.Gull_6.geometry} material={materials['World ap']} position={[876.852, 1000.761, -1453.559]} />
          <mesh name="Gull_5" castShadow receiveShadow geometry={nodes.Gull_5.geometry} material={materials['World ap']} position={[6073.702, 1517.361, -1453.559]} />
          <mesh name="Gull_2" castShadow receiveShadow geometry={nodes.Gull_2.geometry} material={materials['World ap']} position={[-2264.14, 627.42, 99.207]} rotation={[-0.298, 0, 0]} />
          <mesh name="Gull_1" castShadow receiveShadow geometry={nodes.Gull_1.geometry} material={materials['World ap']} position={[-1506.605, 1772.461, -758.883]} rotation={[-0.298, 0, 0]} />
          <mesh name="Gull_7" castShadow receiveShadow geometry={nodes.Gull_7.geometry} material={materials['World ap']} position={[1580.557, 14186.551, 1120.712]} />
          <mesh name="Gull" castShadow receiveShadow geometry={nodes.Gull.geometry} material={materials['World ap']} position={[-4976.855, 4274.796, -552.564]} />
          <mesh name="Gull_3" castShadow receiveShadow geometry={nodes.Gull_3.geometry} material={materials['World ap']} position={[-2389.22, -810.602, -552.564]} />
          <mesh name="Gull_4" castShadow receiveShadow geometry={nodes.Gull_4.geometry} material={materials['World ap']} position={[5488.023, 8140.63, -552.564]} />
        </group>
        <mesh name="Resque" castShadow receiveShadow geometry={nodes.Resque.geometry} material={materials['World ap']} position={[13.154, -0.607, -61.049]} rotation={[0, 0, Math.PI]} scale={0.01} />
        <mesh name="Car_08" castShadow receiveShadow geometry={nodes.Car_08.geometry} material={materials['World ap.1031']} position={[-46.5, -1.097, -19.575]} rotation={[Math.PI, Math.PI / 2, 0]} scale={0.015} />
      </group>
    </group>
  )
}

useGLTF.preload('/city-transformed.glb')
