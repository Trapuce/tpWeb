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
Rectangle.prototype = new Shape();


function Line(x, y, x2, y2, thickness, color) {
    Shape.call(this, color, thickness);
    this.X = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
}
Line.prototype = new Shape();


function Drawing(tab) {
    this.tab = tab;
}