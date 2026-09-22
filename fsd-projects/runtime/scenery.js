// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
 moon: {
   imageUrl: "images/backgrounds/moon.png",
   loopWidth: 0,
   instances: [{ x: 40, y: 125, width: 125, height: 100 }],
 },
 building: {
   imageUrl: "images/backgrounds/building.png",
   loopWidth: 1400,
   instances: [{ x: 200, width: 150, height: 400, speedX: -2.3 },{ x: 800, width: 100, height: 350, speedX: -2.3 }, { x: 400, width: 100, height: 250, speedX: -2.3 },{ x: 650, width: 100, height: 400, speedX: -2.3 }, { x: 500, width: 150, height: 350, speedX: -2.3 }
],
 },
 lamp: {
   imageUrl: "images/backgrounds/lamp.png",
   loopWidth: 1400,
   instances: [{ x: 700, width: 50, height: 150, speedX: -4 }, { x: 250, width: 50, height: 150, speedX: -4 }, { x: 1150, width: 50, height: 150, speedX: -4 }],
 },
};


