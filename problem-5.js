// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

// 5. If you are asked to meet two conditions. And both of the conditions must be met. So can you check that? Similarly if you say you can fulfill any one of the two conditions. That means you && and || Whether you can use it. If you can, write this kind of code yourself.


var gotJob = true;
var saveMoney = 200000;
var hasflat = true;
//  when 2 condition full fill 
// if(gotJob == true && saveMoney < 200000){
//     console.log('Now you can ready to marry');
// }else{
//     console.log('You can not ready to marry');
// }

//  when 3 condition full fill 
// if(gotJob == true && saveMoney < 200000 && hasflat == true){
//     console.log('Now you can ready to marry');
// }else{
//     console.log('You can not ready to marry');
// }

//  if i condition will be true 

if(gotJob == false || saveMoney > 300000 ){
    console.log('Now you can ready to marry');
}else{
    console.log('You can not ready to marry');
}
