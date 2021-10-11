console.log("Selamat Anda Berhasil Menggunakan JavaScript pada Website")

// alert("Terimakasih.")

//--Variable--
//output teks "Bilqis"
var firstName = "Bilqis";

//output teks "Bilqis"
var firstName = "Bilqis"
console.log(firstName);

//output teks "Bilqisss"
//output teks "Muflihunnisa"
var firstName = "Bilqisss"
console.log(firstName);

firstName = "Muflihunnisa";
console.log(firstName);

//--number--
//output 100
x = 100;
var x;
console.log(x);

//output number
let y = 20;
console.log(typeof(y));

//output hasil perhitungan
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//increment(++), dicrement(--)
//x++, ++x
//output 5
let c = 5;
console.log(c++);
//output 6
let d = 5;
console.log(++d);

//--string--
//output string
let greet1 = "Hello";
console.log(typeof(greet1))

//output string
let greet2 = "Hello";
let moreGreet = greet2 + " " + greet2
console.log(moreGreet)

//--boolean--
//output boolean
let e = true;
let f = false;

console.log(typeof(e));
console.log(typeof(f));

//output false/true
const g = 10;
const h = 12;

let isGreater = g > h;
let isLess = g < h;

console.log(isGreater);
console.log(isLess);

//--null--
//output null
let someLaterData = null;
console.log(someLaterData)

//--array--
//output yg ada didalam kurung siku
let myArray1 = ["Coklat", 4.5, 22, true, "Programming"];
console.log(myArray1);

console.log(myArray1[0])
console.log(myArray1[1])
console.log(myArray1[2])
console.log(myArray1[3])
console.log(myArray1[4])
console.log(myArray1[5])
console.log("Pajang nilai myArray adalah " + myArray1.length + " ");

//--object--
//output value1
let object = {key1: "value1", key2: "value2", key3: "value3"}
console.log(object.key1)

//output Halo, nama saya Harry Potter Umur saya 20 tahun
 let user = {
     first_name : "Harry",
     last_name : "Potter",
     age : 20,
     isMuggle : false,
     stuff : ["Magic Wind", "Flying Car", "Owl"]
 };
 console.log("Halo, nama saya " + user.first_name +" " + user.last_name);
 console.log("Umur saya " + user.age + " tahun");

//output -> Halo nama saya Harry Potter 
let user1 = {
    name : {
        first : "Harry",
        last : "Potter",
    }
};
console.log("Halo, nama saya " + user1.name.first + " " + user1.name.last);

//--Assignment Operator
// let i = 10;
// let j = 5

// i += j; //artinya i = i + j
// i -= j; //artinya i = i - j
// i *= j; //artinya i = i * j
// i /= j; //artinya i = i / j
// i %= j; //artinya i = i % j

//console.log(i);

//--Operator Komparasi--
// == (sama), != (tidak sama), ===(identik), !== (tdk identik), 
//== (sama) dan === (identik)
//"10" dan 10 
const aString = '10';
const aNumber = 10 ;

console.log(aString == aNumber);
console.log(aString === aNumber);

//--Logical Operator--
//|| (or), ! (no), && (and)
let k = 10;
let l = 12;

//AND operator
console.log(k < 15 && l > 10); //true && true = true
console.log(k > 15 && l > 10); //false && true = false

//OR operator
console.log(k < 15 || l > 10); //true || true = true
console.log(k > 15 || l > 10); //false || true = true

//NOT operator
console.log(!(k < 15)); //!(true) = false
console.log(! (k < 15 && l > 10)); // ! (true && true = true) = false

//--IF/False Statement--
let m = 50;

//jika m > 70, maka console.log(m)
if(m > 70){
    console.log(m)
}else {
    console.log("Nilai kurang dari 70")
}

// let language = "English";
// let greeting = "Selamat Pagi!";

// if(language === "English"){
//     greeting = "Good Morning";
// }else if(language === "French"){
//     greeting == "Bonjour";
// }else{
//     console.log(greeting);
// }

//console.log(greeting);

//--loop--
for(let i = 0; i < 5; i++){
    console.log(i)
}

//
const myArray2 = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray2.length; i++){
    console.log(myArray2[i]);
}

//--Function--
//output Good Morning Harry!
function greeting(name, language){
    if(language === "English"){
        console.log("Good Morning " + name + "!");
    }else if(language === "French"){
        console.log("Bonjour " + name + "!");
    }else{
        console.log("Selamat Pagi " + name + "!");
    }
}

greeting("Harry", "English");

//output 20
function multiply(o, p) {
    return o * p;
}

let result = multiply(10, 2);
console.log(result);