console.log("Hello World");
// declare variable name with value Mengly
// var fullname = "Menghok";
var fullname;
let age = 20;
let myAge = 25;
console.log(fullname); // undefined = empty
// fullname = prompt("Enter your name", "Reksmey");
// age = prompt("Enter your age");
// myAge = prompt("Enter your age");

// document mean: webpage
var H1 = document.querySelector("h1")
H1.innerHTML = `ស្វាគមន៍, ${fullname}, He is ${age} years old.`;
H1.setAttribute("id", "heading");

// play with image
function changeImage(){
    var IMG = document.querySelector("img");
    IMG.setAttribute("src", "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_960_720.jpg");
}

