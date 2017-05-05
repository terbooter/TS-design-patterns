namespace FactoryMethod {
    export interface Visitor {

    }

    export type VisitorType = "guest" | "user";

    export class Factory {
        public static getVisitor(type: VisitorType): Visitor {
            if (type == "guest") {
                return new Guest();
            } else if (type == "user") {
                return new User();
            }

            throw new Error("Unknown visitor type");
        }
    }

    class Guest implements Visitor {
        public type: VisitorType = "guest"
    }

    class User implements Visitor {
        public type: VisitorType = "user"
    }

}