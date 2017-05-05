namespace AbstractFactory {

    export type VehicalTypes = "car" | "track";

    export interface VehicalFactory {
        getVehical(type: VehicalTypes): Vehical
    }

    export interface Vehical {
        drive()
        breakDown();
    }

    class VolvoCar implements Vehical {
        drive() {
            console.log("Drive Volvo car");
        }

        breakDown() {
            console.log("Breakdown Volvo car");
        }
    }

    class VolvoTruck implements Vehical {
        drive() {
            console.log("Drive Volvo truck");
        }

        breakDown() {
            console.log("Breakdown Volvo truck");
        }
    }

    export class VolvoFactory implements VehicalFactory {
        getVehical(type: VehicalTypes): Vehical {
            if (type == "car") {
                return new VolvoCar();
            } else if (type == "track") {
                return new VolvoTruck();
            } else {
                throw new Error("Unknown vehical track");
            }
        }
    }

    class NissanCar implements Vehical {
        drive() {
            console.log("Drive Nissan car");
        }

        breakDown() {
            console.log("Breakdown Nissan car");
        }
    }

    class NissanTruck implements Vehical {
        drive() {
            console.log("Drive Nissan truck");
        }

        breakDown() {
            console.log("Breakdown Nissan truck");
        }
    }

    export class NissanFactory implements VehicalFactory {
        getVehical(type: VehicalTypes): Vehical {
            if (type == "car") {
                return new NissanCar();
            } else if (type == "track") {
                return new NissanTruck();
            } else {
                throw new Error("Unknown vehical track");
            }
        }
    }
}