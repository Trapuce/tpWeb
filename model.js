function Shape(x, y, thickness, color) {
    this.x = x;
    this.y = y;
    this.thickness = thickness;
    this.color = color;
}

function Rectangle(x, y, width, height, thickness, color) {
    Shape.call(this, x, y, thickness, color);
    this.width = width;
    this.height = height;
}


function Line(x, y, x2, y2, thickness, color) {
    Shape.call(this, x, y, thickness , color);
    this.x2 = x2;
    this.y2 = y2;
}

function Drawing() {
    this.tab = new Map()
}