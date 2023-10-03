function Shape(thickness, color) {
    this.color = color;
    this.thickness = thickness;
}

function Rectangle(x, y, width, height, thickness, color) {
    Shape.call(this, color, thickness);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}


function Line(x, y, x2, y2, thickness, color) {
    Shape.call(this,  thickness , color);
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
}


function Drawing() {
    this.tab = [];
}