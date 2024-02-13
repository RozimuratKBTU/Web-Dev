let a = [4,2,3,5,"hi"];

a.push(true);

// a.pop();
a.push('hi');
// console.log(a);

let b = a.slice(2,4);

// console.log(b);

// console.log(a.indexOf(true));

// console.log(a.includes(4));


let c = [3,4,5];
let d = c.map( function (value, index){
    return value * value;
})
// console.log(d);

c= [3,4,5];
d = c.map((value) => value * value);
// console.log(d);

 function foo(){
     if(true){
         var mes = "Hello";
     }
     // console.log(mes);
 }

 foo();

 function ex(){
     // if(true){
         let messa = "Helo";
         console.log(messa);


 }
// ex();

  numbers = [3,2,5,4];
 numbers.sort();
 // console.log(numbers);

 // for (let i = 0; i < a.length; i++){
 //     console.log(a[i]);
 // }

 for( let num of numbers){
     // console.log(num );
 }

 function  show(n){
     console.log(n);
 }
 show(12);
 a.forEach(show);

 a.forEach(function (n) {
     console.log(n);
 })


