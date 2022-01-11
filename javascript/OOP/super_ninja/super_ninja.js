

// Super Ninja

// Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.


class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`"My name is ${this.name}"`)
    }
    showStats(){
        console.log(`${this.name}'s STATS: Health = ${this.health}, Speed = ${this.speed}, Strength = ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`~${this.name} takes a drink of sake~`)
    }
}

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, strength, wisdom);
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake() // calls on drinkSake() function
        console.log(`Master Splinter - "What one programmer can do in one month, two programmers can do in two months."`)
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(`Hybusa - "Sake gives me life!" STAT UPDATE: Health + 10 = ${ninja1.health}`)


const superSensei = new Sensei("Master Splinter", 210, 10, 10, 10);
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();

// console.log(ninja1)
// console.log(superSensei)