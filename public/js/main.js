var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import Loader from './helpers/Loader.js';
const pantalla = document.getElementById('canvas');
pantalla.style.outline = 'solid 1px black';
const context = pantalla.getContext('2d');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const img = yield Loader.img('img/megaman.png');
            context.drawImage(img, 0, 0);
        }
        catch (e) {
            console.log(e);
        }
    });
}
main();
