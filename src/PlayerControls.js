import React, { useRef } from "react";
import { PointerLockControls } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";


export default function PlayerControls() {
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let canJump = false;
  let ref = useRef(null);

  const velocity = new Vector3();
  const direction = new Vector3();

  const keyDown = function (event) {
    switch (event.code) {

      case "KeyW":
        moveForward = true;
        break;

      case "KeyS":
        moveBackward = true;
        break;

      case "KeyA":
        moveLeft = true;
        break;

      case "KeyD":
        moveRight = true;
        break;

      default:
        break;
    }
  };
  const keyUp = function (event) {
    switch (event.code) {
 
      case "KeyW":
        moveForward = false;
        break;

      case "KeyS":
        moveBackward = false;
        break;

      case "KeyA":
        moveLeft = false;
        break;

      case "KeyD":
        moveRight = false;
        break;

      default:
        break;
    }
  };

  document.addEventListener("keyup", keyUp);
  document.addEventListener("keydown", keyDown);

  useFrame((state, delta) => {
    ref.current.camera.fov = 75;
    ref.current.getObject().position.y = 1;

    /* VELOCITY */
    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();
    velocity.x -= velocity.x * delta * 8.5;
    velocity.z -= velocity.z * delta * 8.5;
    velocity.y -= 9.8 * 100 * delta;

    if (moveForward || moveBackward) velocity.z -= direction.z * 50 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 50 * delta;
    if (canJump) velocity.y -= direction.y * 50 * delta;

    ref.current.moveRight(-velocity.x * delta);
    ref.current.moveForward(-velocity.z * delta);
  });

  return (
    <>
      <PointerLockControls makeDefault ref={ref} />
    </>
  );
}