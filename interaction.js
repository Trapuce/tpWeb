function DnD(canvas, interactor) {
    this.initX = 0;
    this.initY = 0;
    this.finalX = 0;
    this.finalY = 0;
    this.isDrawing = false;
   
    this.mouseClick = function(evt) {
        var res = getMousePosition(canvas, evt);
        this.initX = res.x;
        this.initY = res.y;
        this.isDrawing = true;
        this.interactor = interactor;
    }.bind(this);

    // Met à jour les coordonnées finales pendant le mouvement de la souris
    this.mouseMovement = function(evt) {
        if (this.isDrawing) {
            var res = getMousePosition(canvas, evt);
            this.finalX = res.x;
            this.finalY = res.y;
        }
    }.bind(this);

    this.mouseRelease = function(evt) {
        if (this.isDrawing) {
            var res = getMousePosition(canvas, evt);
            this.finalX = res.x;
            this.finalY = res.y;
            this.isDrawing = false;
        }
    }.bind(this);


    

    canvas.addEventListener('mousedown', this.mouseClick, false);
    canvas.addEventListener('mousemove', this.mouseMovement, false);
    canvas.addEventListener('mouseup', this.mouseRelease, false);
}

function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

