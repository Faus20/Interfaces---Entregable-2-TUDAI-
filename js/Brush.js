class Brush {
    constructor(x, y, color, ctx, width) {
      this.posX = x;
      this.posY = y;
      this.ctx = ctx;
      this.ctx.lineWidth = width;
      this.ctx.lineCap = "round";
      this.ctx.strokeStyle = color;
    }
  
    draw(x, y) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.posX, this.posY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.setPosition(x, y);
    }
  
    setPosition(x, y) {
      this.posX = x;
      this.posY = y;
    }

    setColor(color){
      this.ctx.strokeStyle = color;
    }
  
    setLineWidth(w){
      this.ctx.lineWidth = w;
    }

    getPosition() {
      return {
        posX: this.posx,
        posY: this.posY,
      };
    }
  
  }