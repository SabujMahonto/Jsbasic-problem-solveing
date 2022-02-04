// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

// 6.Will you do something if you meet a condition? If you don't meet the conditions, you will be able to write a code that will do something else. That means you can write if-else code. Write a code if you can.
// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.
// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.
// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.
// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.
// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.


// আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77।

let alisa = 95;
let daliya = 66;
let saliya = 80;
let maliy = 59;
let jerin = 77;
let moli = 47;
let totalMark = 80;

if ( alisa < totalMark ){
  console.log('her grad is A+');
}else if(daliy < totalMark){
    console.log('daliya grad is A');
}
else if (saliy < totalMark){
    console.log('maliy grad is D');
}
else if (jerin < totalMark){
    console.log('jerin grad is B');
} else if(moli < totalMark){
    console.log('molir grad is F');
}
else{
console.log('she is fail');
}
