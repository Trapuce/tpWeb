
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  this.initX , this.initY , this.finalX , this.finalY = 0 
  this.mouseHeld = false;

  
  this.mouseClick = function (evt) {
    var res  = getMousePosition(canvas,evt)
    this.initX = res.x 
    this.initY = res.y
    this.mouseHeld = true;
    console.log(res.x)
    console.log(res.y)
  }.bind(this)

  this.mouseMovement = function(evt) {
    if(this.mouseHeld) {
      var res  = getMousePosition(canvas,evt)
      this.finalX = res.x 
      this.finalY = res.y
      console.log(res.x)
      console.log(res.y)
    }
  }.bind(this)

  this.mouseRelease= function(evt) {
    if(this.mouseHeld) {
      var res  = getMousePosition(canvas,evt)
      console.log(res.x)
      console.log(res.y)
      this.mouseHeld = false;
    }
  }.bind(this)
  canvas.addEventListener('mousedown', this.mouseClick,false)
  canvas.addEventListener('mousemove', this.mouseMovement,false)
  canvas.addEventListener('mouseup', this.mouseRelease,false)
};



// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



