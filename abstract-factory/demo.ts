/// <reference path="abstractFactory.ts" />
namespace AbstractFactory {

    class Client {
        constructor(private factory: VehicalFactory) {
            let truck: Vehical = this.factory.getVehical("track");
            truck.drive();
        }
    }

    export function show() {
        let volvoFactory = new VolvoFactory();
        let client = new Client(volvoFactory);
    }
}
