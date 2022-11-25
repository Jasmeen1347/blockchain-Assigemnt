/*
1) Perform the following operations to provide the implementation for a
    Rectangle class. The operations are:
    1. Add an area() method to the Rectangle class.
    2. Create a Square class that satisfies the following conditions:
    ○ It is a subclass of Rectangle.
    ○ It contains a constructor and no other methods.
    ○ It can use the Rectangle class' area method to print the area
    of a Square object.
*/

class Rectangle {

    area(_area) {
        return _area * _area;
    }
}

class Square extends Rectangle {

    constructor(_area) {
        super()
        console.log(this.area(_area));
    }
}

let object = new Square(5);

