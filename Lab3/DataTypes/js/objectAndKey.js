



let salaries = {
    "John" : 100,
    "Pete" : 300,
    "Mary"  : 250
};

function sumSalary(salaries){
    let sum = 0;
    for (let salary of Object.values(salaries)){
        return sum += salary;
    }
}

const name  = "Rozimurat";
let x = "";
for (let i of name){
    x += i + "\n";
}

// console.log(x);

// console.log(sumSalary(salaries));


let f =new Map();
f.set("a", 12);
f.set("b", 2);
f.set("c", 3);




// console.log(f.get("b"));
// for (let i of f){
//     console.log(i);
// }

