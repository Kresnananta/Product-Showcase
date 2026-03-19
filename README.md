# Product Showcase

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-4A4A55?style=flat)
![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=flat)

## Description

Product Showcase is an interactive 3D web application built to display Apple product (curently just macbook pro M3 14" and 16").

Users can smoothly interact with the product by rotating the models, dynamically swapping between device sizes, and altering the product colors in real-time.

## Features

- 3D Model Rendering: High-quality rendering of MacBook models using `@react-three/fiber` and `@react-three/drei`.
- Interactive Controls: Smooth, spring-based drag and presentation controls.
- Dynamic State Management: Real-time toggling of device colors and sizes managed by `zustand`.
- Fluid Animations: Seamless transitions and fading effects between models powered by `gsap`.
- Performance Optimized: Invisible meshes are dynamically removed from the rendering pass to maintain high frame rates on all devices.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Build

To build the application for production:

```bash
npm run build
```
This will generate the optimized static assets in the `dist` directory.

## Resources
- GLTF Models were compressed and processed using `npx gltfjsx [model.glb] -T` (Draco compression).