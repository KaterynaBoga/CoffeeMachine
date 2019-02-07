abstract class CoffeeMaterial {
    protected volume: number = 1000;

    public get(volume: number): number {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }

        throw new Error('Material is done!');
    }

    public isExist(volume: number): boolean {
        return this.has(volume);
    }

    private has(volume: number): boolean {
        if (this.volume >= volume) {
            return true;
        }

        return false;
    }
}

class Milk extends CoffeeMaterial {
   public get(volume: number): number {
       try {
           return super.get(volume);
       } catch (e) {
           throw new Error('Milk is done!');
       }
   }
}

class Coffee extends CoffeeMaterial {
    public get(volume: number): number {
        try {
            return super.get(volume);
        } catch (e) {
            throw new Error('Coffe is done!');
        }
    }
}

class Water extends CoffeeMaterial {
    public get(volume: number): number {
        try {
            return super.get(volume);
        } catch (e) {
            throw new Error('Water is done!');
        }
    }
}

interface CoffeInterface {
    name: string;
    description: string
}

class CoffeMachine {
    constructor(
        private milk: Milk,
        private coffe: Coffee,
        private water: Water
    ) {}

    public getLatte(): CoffeInterface {
        const waterToCreate: number = 100;
        const coffeToCreate: number = 100;
        const milkToCreate: number = 100;

        if (this.has(waterToCreate, coffeToCreate, milkToCreate) !== true) {
            throw new Error('We are dont make Latte!')
        }

        const latte: CoffeInterface = this.createCoffe(
            'Latte',
            waterToCreate,
            coffeToCreate,
            milkToCreate
        );

        return latte;
    }

    public getCapuchino(): CoffeInterface {
        const waterToCreate: number = 100;
        const coffeToCreate: number = 20;
        const milkToCreate: number = 50;

        if (this.has(waterToCreate, coffeToCreate, milkToCreate) !== true) {
            throw new Error('We are dont make Capuchino')
        }

        const capuchino: CoffeInterface = this.createCoffe(
            'Capuchino',
            waterToCreate,
            coffeToCreate,
            milkToCreate
        );

        return capuchino;
    }

    public getAmericano(): CoffeInterface {
        const waterToCreate: number = 100;
        const coffeToCreate: number = 20;

        if (this.has(waterToCreate, coffeToCreate) !== true) {
            throw new Error('We are dont make Americano')
        }

        const americano: CoffeInterface = this.createCoffe(
            'Americano',
            waterToCreate,
            coffeToCreate
        );

        return americano;
    }

    //############

    private createCoffe(
        name: string,
        water: number,
        coffe: number,
        milk?: number
    ): CoffeInterface {
        const makeWater = this.water.get(water);
        const makeCoffe = this.coffe.get(coffe);
        let makeMilk;

        if (milk !== undefined) {
            makeMilk = this.milk.get(milk);
        }

        return {
            name: name,
            description: 'Created!'
        }

    }

    private has(water: number, coffe: number, milk?: number): boolean {
        if (this.water.isExist(water) !== true) {
            return false;
        }

        if (this.coffe.isExist(water) !== true) {
            return;
        }

        if (milk !== undefined && this.milk.isExist(water) !== true) {
            return false;
        }

        return true;
    }
}

const coffeMachine: CoffeMachine = new CoffeMachine(
    new Milk(),
    new Coffee(),
    new Water()
);

window['_'] = coffeMachine;

// const myLatte = coffeMachine.getLatte();

// console.log(myLatte.description);