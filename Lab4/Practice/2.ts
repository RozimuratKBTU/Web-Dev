
function sum(a:number,b:number) :number{
    return a+b;
}


class Person{
    name:string;
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

}

interface Runnable{
    speed: number;
}

class Student extends Person implements Runnable{
    gpa: number;
    constructor(name:string, age:number, gpa:number) {
        super(name,age);
        this.gpa = gpa;
    }

    speed: number;
}

