// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
// 1. Simple is to write a function. Which will be called feetToInch and this function will take feet as input and return inch. That is, if you call this function a fit, it will tell you how many inches it is as a return.
// feet to inch convert
function inchToFeet(feet){

    let inch = feet * 12;
    return inch
}
 
let totalFeet = inchToFeet(12);
console.log(totalFeet);

// inch to feet convert

function feetToInch(inch){

    let feet = inch / 12;
    return feet
}
 
let totalInch = feetToInch(60);
console.log(totalInch);


// mile To kilometer convert

function mileToKilometer(mile){
    let km = mile * 1.6;
    return km

}

let totalMile =mileToKilometer(5)
console.log(totalMile);


function kmToMile(km){
    let mile = km * 0.6;
    return mile;
}

// kilometer to mile convert 
let totalKm = kmToMile(6);
console.log(totalKm);



