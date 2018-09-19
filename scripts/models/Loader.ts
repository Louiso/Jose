export default class Loader {

  static img(url: string): Promise < HTMLImageElement > {

    return new Promise(resolve => {

      const image: HTMLImageElement = new Image();
      image.addEventListener('load', () => {
        resolve(image);
      });
      image.src = url;

    });

  }

}