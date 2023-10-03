
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.drawing = drawing ;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);


	document.getElementById("butRect").addEventListener("click", ()=>  {
		this.updateShape(0);
	})

	document.getElementById("butLine").addEventListener("click", ()=>  {
		this.updateShape(1);
	})
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		switch(this.currEditingMode) {
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnd.initX , dnd.initY , dnd.finalX , dnd.finalY , this.currEditingMode , this.currColour );
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.initX , dnd.initY , dnd.finalX , dnd.finalY , this.currEditingMode , this.currColour );
				break;
			}
		}
		 

	}.bind(this)
	this.onInteractionUpdate = function(dnd){

		switch(this.currEditingMode) {
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnd.initX , dnd.initY , dnd.finalX- dnd.initX , dnd.finalY-dnd.initY , this.currEditingMode , this.currColour );
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.initX , dnd.initY , dnd.finalX , dnd.finalY , this.currEditingMode , this.currColour );
				break;
			}
		}
		this.drawing.paint(ctx)
		this.currentShape.paint(ctx);
		

	}.bind(this)
	this.onInteractionEnd= function(dnd){
		
		switch(this.currEditingMode) {
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnd.initX , dnd.initY , dnd.finalX- dnd.initX , dnd.finalY-dnd.initY , this.currEditingMode , this.currColour );
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.initX , dnd.initY , dnd.finalX , dnd.finalY , this.currEditingMode , this.currColour );
				break;
			}
		}
		this.drawing.tab.push(this.currentShape)
		this.drawing.paint(ctx)
	}.bind(this)

	this.updateShape = function(x) {
		pencil.currEditingMode = x;
		console.log(pencil.currEditingMode)
	}.bind(this)
	

};


