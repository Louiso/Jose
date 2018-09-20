export class Vec2{
  x: number;
  y: number;
  constructor(x: number = 0 , y: number = 0){
    this.x = x;
    this.y = y;
  }
  plus(other: Vec2){
    return new Vec2( this.x + other.x , this.y + other.y);
  }
  dot(other: Vec2){
    return this.x * other.x + this.y * other.y;
  }
  dotK(lambda: number){
    return new Vec2( this.x * lambda , this.y * lambda);
  }
  norm(){
    return Math.sqrt(this.dot(this));
  }
  unit(){
    return this.dotK(1./this.norm());
  }
}