import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useKeyboard } from "../hooks/useKeyboard"

const CHARACTER_RUN_SPEED = 5
const CHARACTER_JUMP_FORCE = 5

export const Player = () => {
  const {
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,
    jump
  } = useKeyboard()
  
  const { camera } = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 2, 0]
  }))

  const playerPosition = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe((position) => {
      playerPosition.current = position
    })
  }, [api.position])

  const playerVelocity = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe((velocity) => {
      playerVelocity.current = velocity
    })
  }, [api.velocity])

  useFrame(() => {
    camera.position.copy(
      new Vector3(
        playerPosition.current[0],
        playerPosition.current[1],
        playerPosition.current[2],
      )
    )

    const direction = new Vector3()
    const frontVector = new Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0))
    const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0)
    
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CHARACTER_RUN_SPEED)
      .applyEuler(camera.rotation)

    api.velocity.set(
      direction.x,
      playerVelocity.current[1],
      direction.z
    )

    if (jump && Math.abs(playerVelocity.current[1]) < 0.01) {
      api.velocity.set(
        playerVelocity.current[0],
        CHARACTER_JUMP_FORCE,
        playerVelocity.current[2]
      )
    }
  })

  return (
    <mesh ref={ ref } />
  )
}