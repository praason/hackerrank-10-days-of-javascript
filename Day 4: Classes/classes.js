class Polygon{
    constructor(s) {
        this.sides = s;
    }

    perimeter() {
        let count = 0;
        for (let i = 0; i < this.sides.length; i++){
            count += this.sides[i];
        }
        return count;
    }

}
