// type Arrays = number[] | string[];  ugly solution

function getELement<T>(arr:T[]):T {
    return arr[0];
}
// let ans = getELement([1,2,3,4]);
//or
let ans = getELement<number>([1,2,3,4]);

let anss = getELement(["harsh","is","here"]);
console.log(anss);
