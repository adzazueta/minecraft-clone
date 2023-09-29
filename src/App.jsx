import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import { Ground } from './components/ground'
import { FirstPointView } from './components/FirstPointView'

function App() {

  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={1} />
      <FirstPointView />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default App
