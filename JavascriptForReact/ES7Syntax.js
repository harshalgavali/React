class Human {
    name = "Harshal";
    printName = () => {
        console.log(this.name);
    }
}

class Person extends Human {
    age = 38;
}

let perObj = new Person();
perObj.printName();