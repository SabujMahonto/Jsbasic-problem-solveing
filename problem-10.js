// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
// 10. If you are told. If there are numbers greater than 60 in an array, will you be able to show them by logging the console? Then you code that.

let numbers = [22, 33, 25, 10, 88, 77, 81, 99, 90]

function largestNumber(numbers){
    let largeNum = 0;
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        // console.log(element);
        if(element > largeNum){
            largeNum = element
        }
        
    }
    return largeNum;
}


// let age = [ 22, 33, 44,]
let oldest = largestNumber(numbers)
console.log(oldest);