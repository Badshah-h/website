# AxonStream 3D Models

This directory contains 3D assets for the AxonStream landing page hero section.

## Current Models

### `robot_companion.glb`
- **Source**: Cute Robot Companion GLB
- **Usage**: Main mascot robot for the hero section  
- **Features**: Professional PBR materials, potential animations
- **Fallback**: Ultra-realistic primitive robot if GLB fails to load

## Usage

The robot system automatically switches between GLB and primitive robots:

```tsx
// Use GLB robot (default)
<Robot position={[-2.4, -0.6, 0]} />

// Force primitive robot
<Robot position={[-2.4, -0.6, 0]} useGLB={false} />
```

## Configuration

In `src/components/hero3d/Robot.tsx`:

```tsx
// Set to true for GLB robot, false for primitive robot
const USE_GLB_ROBOT = true;
```

## Robot Features

### GLB Robot (`RobotGLB.tsx`)
- ✅ Professional 3D model with textures
- ✅ Animation support (walk, idle, wave)
- ✅ Enhanced PBR materials
- ✅ Automatic material enhancement
- ✅ Projector beam effect
- ✅ GSAP timeline animations
- ✅ Error handling with primitive fallback

### Primitive Robot (`UltraRealisticRobot`)
- ✅ 300+ lines of procedural geometry
- ✅ Advanced PBR materials
- ✅ Complex articulated joints
- ✅ Independent part animations
- ✅ No external dependencies
- ✅ Guaranteed to work

## Adding New Models

1. Place GLB files in this directory
2. Update the import path in the component
3. Test animations with `console.log(animations)`
4. Adjust material enhancements as needed

## Performance Notes

- GLB models are preloaded for smooth experience
- Automatic fallback prevents loading failures
- Mobile optimizations reduce model complexity
- Error boundaries ensure graceful degradation