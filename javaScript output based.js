/*
1)
==>
 let a = [];
let b = [];
console.log("@SN ", a == b); //false
console.log("@SN ", a === b); //false 
*/

/*
2)
==>
let a = [];
let b = a;
console.log("@SN ", a == b); //true
console.log("@SN ", a === b); //true 
*/

/* 
3)
==>
let a = [20];
let b = [20];
console.log("@SN ", a[0] == b[0]); //true
console.log("@SN ", a[0] === b[0]); //true 
*/

/* 
4)
==>
console.log("@SN ", typeof NaN); //number 
*/

/* 
5)
==>
let data = 10 - -10;
console.log("@SN ", data); //20
 */

/* 
6)
==>
const set = new Set([1, 1, 2, 2, 3, 4, 5]);
console.log("@SN ", set); 
*/

/* 
7)
==>
let data = { name: "suyog" };
console.log("@SN ", delete data.name); //true
console.log("@SN ", data); //{} 
*/

/* 
8)
==>
let data = { name: "suyog" };
console.log("@SN ", delete data);//false
*/

// const data = ["a", "b", "c"];
// const [y] = data;
// console.log("@SN ", y); //a

// const data = ["a", "b", "c"];
// const [y, z] = data;
// console.log("@SN ", y, z); // a b

// const data = ["a", "b", "c"];
// const [, y] = data;
// console.log("@SN ", y); // b

// const data = { name: "suyog", age: 25 };
// const { age } = data;
// console.log("@SN ", age);
// console.log("@SN ", data.age);

// let data = { name: "suyog", age: 25 };
// let result = { city: "pune" };
// data = { ...data, ...result };
// console.log("@SN ", data);

// let data = { name: "suyog", age: 25 };
// let result = { city: "pune", age: 26 };
// data = { ...data, ...result };
// console.log("@SN ", data); //{name: 'suyog', age: 26, city: 'pune'}

// const name = "anil";
// console.log("@SN ", name());//name is not a function

// console.log([] || 0 || true);//[]
// console.log(false || {} || null);//{}
// console.log(false || null || ""); //
// console.log(false || "" || null); //null
// console.log(Promise.resolve(5));//Promise {<fulfilled>: 5}
// console.log(Promise.reject(5)); //Promise {<rejected>: 5}

// const name = "suyog";
// console.log(!typeof name === "object"); //false
// console.log(!typeof name === "string"); //false
// console.log(!typeof name === false); //true
