import { usePlane } from '@react-three/cannon';
import { grassTopTexture } from '../assets/textures/textureLoader';

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  grassTopTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={ grassTopTexture } />
    </mesh>
  )
}
