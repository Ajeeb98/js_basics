//class

class User {
    name;
    email;
    #password;
    //constructor
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
    }   
    getPassword() {
        return this.#password;
    }
}
const john = new User("John", "john@gmail.com","1234");
const ram = new User("Ram", "ram@gmail.com","5678");
console.log(john);
console.log(ram);
console.log(john.getPassword()); 

class Student extends User {
    
    constructor(name, email, password, faculty, batch, roll) {
        super(name, email, password);
        this.faculty = faculty;
        this.batch = batch;
        this.roll = roll;
    }
    introduce() {
        console.log("this is student class");
    }
   
}
const Alice = new Student("Alice", "alice@gmail.com", "password123", "Engineering", "2023", "12345");
console.log(Alice);
console.log(Alice.getPassword());
Alice.introduce();

// Abstraction

class MakeCoffee {
    start() {
        console.log("Starting...");
        this.#heating();
        this.#grinding();
        this.#processing();
        this.#dispatch();
    }
    #heating() {
        console.log("Heating...");
    }
    #grinding() {
        console.log("Grinding...");
    }
    #processing() {
        console.log("Processing...");
    }
    #dispatch() {
        console.log("Ready to serve...");   
    }
}
const coffee = new MakeCoffee();
//coffee.start();
// getter/ setter

class Circle{
    #r;

    constructor(radius){
        this.#r=radius;
    }
    set radius(r){
        this.#r=r;
    }
    get area(){
        return (Math.PI * Math.pow(this.#r, 2)).toFixed(2); //gives a string and decimal of required no.
    }
}
const c1 = new Circle(10);
console.log(c1.area);

c1.radius = 12;
console.log(c1.area);

// static method

class Sum{
    static add(a,b){
        console.log(a+b);
    }
    
}

Sum.add(5,3)    // static method calling class not object

//const obj = new Sum()
   // obj.add(5,6) //error

