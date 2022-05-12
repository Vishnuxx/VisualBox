export class AppConstants {
  static EDITOR_VERSION = 1.0;
  
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
