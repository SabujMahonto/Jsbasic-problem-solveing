// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
// 1. Simple is to write a function. Which will be called feetToInch and this function will take feet as input and return inch. That is, if you call this function a fit, it will tell you how many inches it is as a return.

function feetToInch(feet){

    let inch = feet * 12;
    return inch
}
 
let totalInch = feetToInch(12);
console.log(totalInch);

