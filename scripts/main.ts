import { Vec2 } from './helpers/math.js';
import Loader from './helpers/Loader.js';
const pantalla:any = document.getElementById('canvas');

pantalla.style.outline = 'solid 1px black';

const context: CanvasRenderingContext2D = pantalla.getContext('2d');

async function  main(){
  try{
    const img = await Loader.img('img/megaman.png');
    context.drawImage(img, 0,0);
  }catch(e){
    console.log(e);
  }
}

main();
