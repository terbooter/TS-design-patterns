/// <reference path="prototype.ts" />
namespace Prototype {
    export function show() {
        // Imagine graph editor
        let circle = new Circle();
        circle.x = 100;
        circle.y = 100;
        circle.radius = 10;

        // User made copy and paste operation
        let circle2 = circle.clone();
        circle2.x = 200;

        console.log(circle);
        console.log(circle2);
    }
}