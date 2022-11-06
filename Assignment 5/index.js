class Cylinder {

    constructor(redius, height) {
        this.redius = redius
        this.height = height
    }
    getVolume() {
        return 3.14 * Math.sqrt(this.redius) * this.height
    }
}

class Sphere {

    constructor(redius) {
        this.redius = redius
    }
    getVolume() {
        return 4 / 3 * 3.14 *  Math.pow(this.redius, 3)
    }
}


class Cone {

    constructor(redius, height) {
        this.redius = redius
        this.height = height
    }
    getVolume() {
        return (3.14 * Math.sqrt(this.redius) * this.height) / 3
    }
}

const cy = new Cylinder(10, 20)
console.log(cy.getVolume());

const sp = new Sphere(10, 20)
console.log(sp.getVolume());

const cone = new Cone(10, 20)
console.log(cone.getVolume());