const HUNGER_INCREMENT = 5;
const HUNGER_DECREMENT = 3;
const FITNESS_INCREMENT = 4;
const FITNESS_DECREMENT = 3;

const MAXIMUM_HUNGER = 10;
const MAXIMUM_FITNESS = 10;
const MAXIMUM_AGE = 30;

class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = MAXIMUM_FITNESS;
        this.children = [];
    }

    get Alive() {
        return this.fitness > 0 && this.hunger < MAXIMUM_HUNGER && this.age < MAXIMUM_AGE;
    }

    growUp() {
        if(!this.Alive) {
            throw new Error('Your pet is no longer alive :(');
        }
        this.age = Math.min(this.age += 1, MAXIMUM_AGE);
        this.hunger = Math.min(this.hunger += HUNGER_INCREMENT, MAXIMUM_HUNGER);
        this.fitness = Math.max(this.fitness -= FITNESS_DECREMENT, 0);
    }

    walk() {
        if(!this.Alive) {
            throw new Error('Your pet is no longer alive :(');
        }
        this.fitness = Math.min(this.fitness += FITNESS_INCREMENT, MAXIMUM_FITNESS);
    }

    feed() {
        if(!this.Alive) {
            throw new Error('Your pet is no longer alive :(');
        }
        this.hunger = Math.max(this.hunger -= HUNGER_DECREMENT, 0);
    }

}

module.exports = Pet;