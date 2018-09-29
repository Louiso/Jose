export default class SpriteSheet {
    constructor(image) {
        this.image = image;
        this.tiles = new Map();
    }
    define(name, xSprite, ySprite, width, height) {
        const buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        buffer
            .getContext('2d')
            .drawImage(this.image, xSprite, ySprite, width, height, 0, 0, buffer.width, buffer.height);
        this.tiles.set(name, buffer);
    }
    draw(name, context, xScreen, yScreen) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, xScreen, yScreen);
    }
}
