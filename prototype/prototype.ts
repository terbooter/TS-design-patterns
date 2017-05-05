namespace Prototype {
    export interface Shape {
        x: number;
        y: number;
        clone(): Shape
    }

    export class Circle implements Shape {
        x: number;
        y: number;
        radius: number;

        public clone(): Shape {
            let circle = new Circle();
            circle.x = this.x;
            circle.y = this.y;
            circle.radius = this.radius;

            return circle;
        }
    }

    export class Square implements Shape {
        x: number;
        y: number;
        rotation: number;
        size: number;

        public clone(): Shape {
            let square = new Square();
            square.x = this.x;
            square.y = this.y;
            square.rotation = this.rotation;
            square.size = this.size;

            return square;
        }
    }
}