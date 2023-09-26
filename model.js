function Shape(color, thickness) {
    this.color = color;
    this.thickness = thickness;
}

function Rectangle(x, y, width, height, color, thickness) {
    Shape.call(this,color,thickness);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function Line(x, y, x2, y2) {
    Shape.call(this,color,thickness);
    this.X = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
}

function Drawing(tab) {
    this.tab = tab;
}