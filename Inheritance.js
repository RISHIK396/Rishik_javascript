// In this we will see inheritance

class Person{
    constructor(brand){
        console.log("this is the constructor called for Person class");
        this.brand1 = brand;
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

}

// syntax for inheritance
class Engineer extends Person{
    constructor(brand){
        console.log("this is Engineer class constructor");
        super(brand);
    }
    work(){
        console.log("solve problem build something");
    }
}

let Rishik = new Engineer("Hilux");
Rishik.eat();
Rishik.sleep()
Rishik.work();
