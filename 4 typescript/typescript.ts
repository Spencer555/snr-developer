

const sum = (a: number, b: number) => {
    return a + b
};

const real: number = sum(2, 8)


console.log(real)


// types 

// boolean
let isCool: boolean = true



// number
let age: number = 53


// string 

let eyeColor: string = 'brown'
let shoeColor: string = `too much money yen ko bisa arab b first ${age}`


// array 

let pets: string[] = ['cat', 'dog', 'pig']
// or
let pets_1: Array<string> = ['cat', 'dog', 'pig']


// objects 

let wizard: object = {
    a: 'John'
}

// null and undefied

let meh: undefined = undefined;

let noh: null = null

// tuple
let basket: [string, number]
basket = ['basketball', 5]


// enum for enumerable 
enum Size { Small = 1, Medium = 2, Large = 3 }


let sizeName = Size[2]
// this returns medium it allows u to map things


// Any - be careful when using it - u can set it to whatever you want
// by using this u are negleting all typescript rules 
// usefull for when converting js to ts and some functions have not yet been figured out 
let whatever: any = 'aghhhhh noooondofdsf'
whatever = 5



// void - we expect the function to return noting if it returns something there would be an error
let sing = (): void => {
    console.log('lalalalallala')
}

// if it would return something
let sin = (): string => {
    console.log('lalalalallala')

    return 'lala'
}



// never - it tests that a function never returns and a variable under a type is never true

let error = (): never => {
    throw Error('oops error')
}



// interface - can be used really well with objects - the name must begin with a capital

interface RobotArmy {
    count: number,
    type: string,
    magica: string
}


let fightRobotArmy = (robots: RobotArmy) => {
console.log('FIGHT!')

}

// this is the same as saying 

let fightRobotArmy1 = (robots: {count: number, type: string, magica: string}) => {
    console.log('FIGHT!')

}

// type - same as interface but create a new name you can use everywhere but type does not create a new name but use interface
type RobotArmy1 = {
    count: number,
    type: string,
    magica: string
}


let fightRobotArmy2 = (robots: RobotArmy) => {
    console.log('FIGHT!')

}


// type assertion allows you to overwrite any type u want in typescript 


type catArmy = {
    count: number,
    type: string,
    magica?: string //the question mark means it may or may not be part of object
}

// this is dangerous so use i wisely
let dog = {} as catArmy
dog.count






// function if it would return nothing just use void or the datatype of what u expect it to return

let fightRobotArmy4 = (robots: RobotArmy) : void => {
    console.log('FIGHT!')

}



// classes 

class Animal {
    private sing: string = 'lalalala';
    // if set to private u cant access it out of the function
    // sing: string = 'lalalala';
    constructor(sound: string) {
        this.sing = sound
    }

    greet(): string {
        return `Hello ${this.sing}`
    }
}


let lion = new Animal("RAAWWR")

// lion.sing this cant be accessed when set to private


lion.greet


// union this allows you to use both number and string as a type of the variable

let confused: string | number = "hello"


// type inferences this lets type script provide the type itself for you 

// it automatically sets it to number
let x = 3


// we use create react app typescript to use typescript in react 
// types- this tells our typescript compiler to understand an external libraby e.g when we are using react with typescript