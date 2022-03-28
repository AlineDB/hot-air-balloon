import {settings} from "../settings";
import {Hsl} from "../Helpers/Hsl";

export class Hill{
    ctx: CanvasRenderingContext2D;
    canvasElement : HTMLCanvasElement;
    hill: ({ amplitude: number; color: Hsl; startPosition: number; height: number } | { amplitude: number; color: Hsl; startPosition: number; height: number } | { amplitude: number; color: Hsl; startPosition: number; height: number })[];

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.hill = settings.hill.hills;
        this.draw();
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.moveTo(0,60);
        this.ctx.fillStyle = new Hsl(149, 39, 35).toString();
        this.ctx.lineTo((Math.cos(this.canvasElement.width)), 60);
    }
}