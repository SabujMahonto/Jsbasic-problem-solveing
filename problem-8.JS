// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
// 8. If you are asked, you will declare an array. And you have to figure out how many ingredients are in it. You have to change the elements of the fourth position in that array. You need to add two elements to the array. And who has to figure out an element. Can you do that

let numbers = [20, 29, 30, 40, 55,60, 80];
numbers.length
numbers[4]= 90;
numbers.push(100);
numbers.pop()
numbers.shift()
numbers.unshift(222)

let sum = numbers.indexOf(1 + 2);
console.log(sum);

// for(let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     console.log(element);
// }

console.log(numbers);

let phone = ['lg', 'iphone', 'samsung', 'nokia' ,'motorola']

if(phone.indexOf('oppo') == -1 ){
    console.log('oppo is missing ');
}
// else{
//     console.log('Avlavle now');
// }

if (phone.indexOf('lg') != -1){
    console.log("lg is available Now")
}

if (phone.indexOf("wolton") == -1){
    console.log('out off stock');
}

if (phone.indexOf('iphone') != -1){
    console.log('available Now');
}