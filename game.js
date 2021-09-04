import Phaser from "phaser";

// scenes
import Defense from "./scenes/Defense";

// config
new Phaser.Game({
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  // backgroundColor: 0x87ceeb,
  scene: [Defense],
});

// character sprite
// https://the-baldur.itch.io/pixelart-hiker