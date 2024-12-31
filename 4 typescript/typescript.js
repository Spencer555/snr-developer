var sum = function (a, b) {
    return a + b;
};
var real = sum(2, 8);
console.log(real);
// types 
// boolean
var isCool = true;
// number
var age = 53;
// string 
var eyeColor = 'brown';
var shoeColor = "too much money yen ko bisa arab b first ".concat(age);
// array 
var pets = ['cat', 'dog', 'pig'];
// or
var pets_1 = ['cat', 'dog', 'pig'];
// objects 
var wizard = {
    a: 'John'
};
// null and undefied
var meh = undefined;
var noh = null;
// tuple
var basket;
basket = ['basketball', 5];
// enum for enumerable 
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// this returns medium it allows u to map things
// Any - be careful when using it - u can set it to whatever you want
// by using this u are negleting all typescript rules 
// usefull for when converting js to ts and some functions have not yet been figured out 
var whatever = 'aghhhhh noooondofdsf';
whatever = 5;
// void - we expect the function to return noting if it returns something there would be an error
var sing = function () {
    console.log('lalalalallala');
};
// if it would return something
var sin = function () {
    console.log('lalalalallala');
    return 'lala';
};
// never - it tests that a function never returns and a variable under a type is never true
var error = function () {
    throw Error('oops error');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
// this is the same as saying 
var fightRobotArmy1 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
// this is dangerous so use i wisely
var dog = {};
dog.count;
// function if it would return nothing just use void or the datatype of what u expect it to return
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
};
// classes 
var Animal = /** @class */ (function () {
    // if set to private u cant access it out of the function
    // sing: string = 'lalalala';
    function Animal(sound) {
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("RAAWWR");
// lion.sing this cant be accessed when set to private
lion.greet;


