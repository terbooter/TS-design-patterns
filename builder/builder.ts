namespace BuilderPattern {

    export class Builder {

        private house: House;

        createEmptyHouse() {
            this.house = new House();
            this.house.windows = [];
            this.house.walls = [];
        }

        buildFloor() {
            this.house.floor = "wood";
        }

        buildWindow(window: string = "small window") {
            this.house.windows.push(window);
        }

        buildWalls() {
            this.house.walls.push("brick")
        }

        buildRoof() {
            this.house.roof = "wood";
        }

        getHouse(): House {
            return this.house;
        }

        public static buildSmallHouse(builder: Builder): House {
            // Here can be method chaining
            builder.createEmptyHouse();
            builder.buildFloor();
            builder.buildWalls();
            builder.buildWindow();
            builder.buildRoof();
            return builder.getHouse();
        }

        public static buildBigHouse(builder: Builder): House {
            builder.createEmptyHouse();
            builder.buildFloor();
            builder.buildWalls();
            builder.buildWalls();
            builder.buildWindow("big window");
            builder.buildWindow("big window");
            builder.buildWindow("big window");
            builder.buildRoof();
            return builder.getHouse();
        }
    }

    export class House {
        floor: string;
        walls: string[];
        roof: string;
        windows: string[];
    }
}