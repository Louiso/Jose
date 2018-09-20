import { Vec2 } from '../helpers/math.js';
export default class Entidad{
  pos: Vec2;
  vel: Vec2;
  constructor(){

  }
  draw(context: CanvasRenderingContext2D){}
  update( deltaTime: number ){}
}