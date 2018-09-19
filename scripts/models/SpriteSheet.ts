/* Esta clase permite a uno guardar como una biblioteca las imagenes que se encuentran dentro de un sprite */

export default class SpriteSheet{
  image: HTMLImageElement;
  tiles: Map<string, HTMLCanvasElement>;
  constructor(image: HTMLImageElement){
    this.image = image;
    this.tiles = new Map();
  }
  
  /* Define una imagen dentro de un sprite, y lo deja listo para ser usado a futuro */
  define(name: string, xSprite: number, ySprite: number, width: number, height: number){
    /* El buffer es otra forma de guardar una imagen */
    const buffer:HTMLCanvasElement = document.createElement('canvas');

    /* Aqui se puede modificar el escalamiento de los sprites */
    buffer.width = width;
    buffer.height = height;

    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        xSprite,
        ySprite,
        width,
        height,
        
        0,
        0,
        buffer.width,
        buffer.height
      );
      
    this.tiles.set(name,buffer);  
  }

  draw(name:string,context: CanvasRenderingContext2D, xScreen: number, yScreen: number){
    /* llamamos al buffer ya construido */
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, xScreen, yScreen);
  }
}