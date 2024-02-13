function camelize(str){
    return str
        .split('-')
        .map(
            (word, index) =>  index == 0 ? word : word[0].toUpperCase()  + word.slice(1)
        )
        .join("");

}

// console.log(camelize("-rozi-olzhas"));

function filterRange(arr, a,b){
    return arr.filter(item => (a <= item && item <= b));
}

// let arr = [5,3,8,1];

// console.log(filterRange(arr,1,4));


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];
let arr2 = arr.splice(0,1);
// filterRangeInPlace(arr, 1, 4);

console.log(arr);

let arr3 = ["HTML", "JavaScript", "CSS"];

arr3.sort();

let sorted = arr3.slice().sort();

console.log(arr3);
console.log(sorted);