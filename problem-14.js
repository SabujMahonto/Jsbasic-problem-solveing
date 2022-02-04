// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  
// 2. Write a function with the exact name of the function centimeterToMeter. In this function, someone will give centimeter as input and convert that centimeter to meter and return the result.

//   cm to meter convert
function centimeterToMeter(meter){
    let centimeter = meter * 0.01;
    return centimeter;
}

let totalMeter = centimeterToMeter(10000);
console.log(totalMeter);