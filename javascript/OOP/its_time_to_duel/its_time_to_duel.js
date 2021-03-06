

class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    } 
    attack(target) {
        if (target instanceof Unit){
            target.resilience -= target.power
        } else {
            throw new Error("Target must be a unit")
        }
    }
    showUnitCard(){
        console.log(`${this.name} Unit Card - Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if( target instanceof Unit){
            target[this.stat] += this.magnitude
            console.log(`${this.name} Effect: ${this.text}. Updated ${target.name} ${this.stat} to ${target[this.stat]}`)
        } else{
            throw new Error ("Target must be a unit!")
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const hardAlgoirthem = new Effect("Hard Algorithm", 2, "Increase targets resilience by 3", "resilience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "Incease target's power by 2", "power", 2)


// turn 1
redBeltNinja.showUnitCard()
hardAlgoirthem.play(redBeltNinja)

// turn 2
blackBeltNinja.showUnitCard()
unhandledPromiseRejection.play(redBeltNinja)

// turn 3
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)