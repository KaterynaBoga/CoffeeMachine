var Milk = /** @class */ (function () {
    function Milk() {
        this.volume = 1000;
    }
    Milk.prototype.getMilk = function (volume) {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }
        throw new Error('Milk is done!');
    };
    Milk.prototype.isExist = function (volume) {
        return this.has(volume);
    };
    Milk.prototype.has = function (volume) {
        if (this.volume >= volume) {
            return true;
        }
        return false;
    };
    return Milk;
}());
var Coffe = /** @class */ (function () {
    function Coffe() {
        this.volume = 1000;
    }
    Coffe.prototype.getCoffe = function (volume) {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }
        throw new Error('Coffe is done!');
    };
    Coffe.prototype.isExist = function (volume) {
        return this.has(volume);
    };
    Coffe.prototype.has = function (volume) {
        if (this.volume >= volume) {
            return true;
        }
        return false;
    };
    return Coffe;
}());
var Water = /** @class */ (function () {
    function Water() {
        this.volume = 1000;
    }
    Water.prototype.getVolume = function () {
        return this.volume;
    };
    Water.prototype.getWater = function (volume) {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }
        throw new Error('Water is done!');
    };
    Water.prototype.isExist = function (volume) {
        return this.has(volume);
    };
    Water.prototype.has = function (volume) {
        if (this.volume >= volume) {
            return true;
        }
        return false;
    };
    return Water;
}());
var CoffeMachine = /** @class */ (function () {
    function CoffeMachine(milk, coffe, water) {
        this.milk = milk;
        this.coffe = coffe;
        this.water = water;
    }
    CoffeMachine.prototype.getLatte = function () {
        var waterToCreate = 100;
        var coffeToCreate = 100;
        var milkToCreate = 100;
        if (this.has(waterToCreate, coffeToCreate, milkToCreate) !== true) {
            throw new Error('We are dont make Latte!');
        }
        var latte = this.createCoffe('Latte', waterToCreate, coffeToCreate, milkToCreate);
        return latte;
    };
    CoffeMachine.prototype.getCapuchino = function () {
        var waterToCreate = 100;
        var coffeToCreate = 20;
        var milkToCreate = 50;
        if (this.has(waterToCreate, coffeToCreate, milkToCreate) !== true) {
            throw new Error('We are dont make Capuchino');
        }
        var capuchino = this.createCoffe('Capuchino', waterToCreate, coffeToCreate, milkToCreate);
        return capuchino;
    };
    CoffeMachine.prototype.getAmericano = function () {
        var waterToCreate = 100;
        var coffeToCreate = 20;
        if (this.has(waterToCreate, coffeToCreate) !== true) {
            throw new Error('We are dont make Americano');
        }
        var americano = this.createCoffe('Americano', waterToCreate, coffeToCreate);
        return americano;
    };
    //############
    CoffeMachine.prototype.createCoffe = function (name, water, coffe, milk) {
        var makeWater = this.water.getWater(water);
        var makeCoffe = this.coffe.getCoffe(coffe);
        var makeMilk;
        if (milk !== undefined) {
            makeMilk = this.milk.getMilk(milk);
        }
        return {
            name: name,
            description: 'Created!'
        };
    };
    CoffeMachine.prototype.has = function (water, coffe, milk) {
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
    };
    return CoffeMachine;
}());
var coffeMachine = new CoffeMachine(new Milk(), new Coffe(), new Water());
window['_'] = coffeMachine;
// const myLatte = coffeMachine.getLatte();
// console.log(myLatte.description);
