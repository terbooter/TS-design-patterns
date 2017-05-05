/// <reference path="factoryMethod.ts" />
namespace FactoryMethod {
    export function show() {
        let guest = Factory.getVisitor("guest");
        console.log(guest);
    }
}