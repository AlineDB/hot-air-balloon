import {Sky} from "./Drawable/Sky";
import {Hill} from "./Drawable/Hill";

class Main {
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    sky: Sky;
    hill: Hill;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.sky = new Sky(this.canvas, this.ctx);
        this.hill = new Hill(this.ctx);
        this.addEventListeners();
    }

    addEventListeners(){
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
    }

    resizeCanvas(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

new Main();