<img src="https://i.imgur.com/cwLTOc4.png"/></a>

# Backrooms Game
![badmath](https://img.shields.io/badge/License-MIT-blue)

Video demo: []

**The framerate will depending on you hardware system specifications**

## Description
My final project for Harvard CS50 course is a small 3D game loosely based off of the backrooms creepypasta. The game is in first person and uses the mouse and WASD keys to move around the world. 

The goal is to find the Walter sphere and using the physics engine, bump walter into the hidden cube.

**Tip: Not all walls are made the same**

## Instructions
You can view the game here: https://menkoi.github.io/Backrooms/

## Technologies
1. React Three Fiber
2. React Three Drei (WebGL)
3. React Three Postprocessing
4. Cannon.js (Physics Engine)
5. GLTFJSX (importing 3D models)

## Model
- Map based on: Huuxloc 
- Original map: (https://sketchfab.com/3d-models/backrooms-1da6a7f2e0294ba9a4123f61244811a8)
- license: CC-BY-4.0

## The Process

### Getting Started
Using React three WebGL, this allows complex 3D objects to be rendered within a browser. The first part was making sure everything was installed correctly in the Home.js file. This is done by adding the Canvas scene. The suspense scene is then added after as a loading page while the actual scene is being rendered.
While developing I added a default image for testing purpose inside the img folder to make sure textures are working properly. This default texture was wrapped on the floor and walls.

### Interactions
This being my first time using Cannon.js, after reading the documentation I was able to add physics properties to specific objects likes boxes, spheres, and cones. An example of this is "Walter" where Cannon.js has a handy function called "useSphere". With the help of Cannon.js im able to add arguments to objects that not only can detect collisions, but can interact with each other simulating physics like gravity and velocity. 
To have the player be able to interact with objects I created a sphere and inside the sphere is a camera (first person) so in reality you are just controlling a normal sphere. You can find this in the PlayerControls.js file. I decided to do this because adding another custom 3D model could be more demanding on older system hardware causing frame rate drops and lag.

### Map
Based on the backrooms map by Huuxloc on sketchfab, although is a great map I made some personal changes. The original map was too small for what I wanted so I imported the original model using GLTFJSX and added more walls and expanded the map overall. Once I had the map how I wanted I went to every wall and added invisible barriers to each wall to add collision detection. Once eveything was finish I tested it by walking around the map to make sure you couldn't phase through any walls.
After that I added the proper floor texture and made sure it covered the entire play area as well as adding the roof, making sure that both have invisible barriers.

### Effects/Lighting
Using react postprocessing and react drei, I added pointlights to specific parts of the map so some are darker than others. Using the Bloom effect I added a soft glow around more brighter object for example the roof lights and text. I also added some grain noise to the map to give a more unsettling feeling. Once that was working I also added depth of field similar to how a camera works, sharper image when close but blurry when far away.

## Developer Screenshots
<img src="https://i.imgur.com/ij50OKw.png"/>
<img src="https://i.imgur.com/X8jbq0D.png"/>
<img src="https://i.imgur.com/r9ZZTCP.png"/>
<img src="https://i.imgur.com/zFGw26T.png"/>

## Contact Me
  - Menkoi
  - https://github.com/Menkoi
  - celaeon@gmail.com

Made with ❤️ by Brandon Burton.

