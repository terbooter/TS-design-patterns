namespace SingletonPattern {
    export class Singleton {
        private static instance: Singleton;
        private counter: number = 0;

        public static getInstance(): Singleton {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }

            return Singleton.instance;
        }

        public incrementCounter() {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }
}