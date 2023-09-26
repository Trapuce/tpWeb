Shape.prototype.paint = function(ctx) {
    ctx.fillStyle = this.color
    ctx.lineWidth = this.thickness
}

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx)
    ctx.rect(this.x, this.y, this.width,this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx)
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.tab.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };

  Shape.prototype.paint = function(ctx) {
    ctx.fillStyle = this.color
    ctx.lineWidth = this.thickness
}

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx)
    ctx.rect(this.x, this.y, this.width,this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx)
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.tab.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };