function  topSalary(salaries){

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)){
        if(maxSalary < salary){
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}

let salaries = {
    "Olzhas": 100,
    "Rozi": 200,
    "Saman": 300
};

console.log(topSalary(salaries));



let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false