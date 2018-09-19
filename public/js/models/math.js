export class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        return new Vec2(this.x + other.x, this.y + other.y);
    }
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    dotK(lambda) {
        return new Vec2(this.x * lambda, this.y * lambda);
    }
    norm() {
        return Math.sqrt(this.dot(this));
    }
    unit() {
        return this.dotK(1. / this.norm());
    }
}
