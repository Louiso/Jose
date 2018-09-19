import { Vec2 } from './math.js';
export default class Entidad{
  pos: Vec2;
  vel: Vec2;
  constructor(){

  }
  draw(context: CanvasRenderingContext2D){}
  update( deltaTime: number ){}
}