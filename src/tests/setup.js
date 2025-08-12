// Jest setup file for ES6 modules and DOM testing
require('regenerator-runtime/runtime');

// Mock Phaser for tests
global.Phaser = {
  Scene: function MockScene() {},
  Game: function MockGame() {},
  Scale: {
    CENTER_BOTH: 'CENTER_BOTH'
  },
  Physics: {
    Arcade: {
      Physics: function MockPhysics() {}
    }
  },
  Cameras: {
    Scene2D: {
      Events: {
        FADE_OUT_COMPLETE: 'fadeOutComplete'
      }
    }
  }
};
