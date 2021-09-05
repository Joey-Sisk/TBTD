import Phaser from "phaser";

export class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }

  preload() {
    // this.load.spriteSheet("orb", "../icons/orb_blue.png", { frameHeight: 32, frameWidth: 128 });
    this.load.image("orb", "../icons/orb_blue.png");
  }

  create() {
    gridBg = this.add.grid(320, 320, 640, 640, 32, 32, 0x333333).setAltFillStyle(0x555555);

    // this.add.image(16, 16, "orb");

    orbGroup = this.add.group();

    orbGroup.createMultiple({ key: "orb", frame: [0, 1, 2, 3, 4], frameQuantity: 2, repeat: 1 });

    // Phaser.Actions.SetXY(group.getChildren(), 32, 100, 32);
  }
  
  update() {

  }
}
export default SceneMain;