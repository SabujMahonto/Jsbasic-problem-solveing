// mular dam 
//  1 kg = 30;
//  3 kg = 25;

function mularDam(quantity){
    let price = 0;
if(quantity <= 30){
    price = quantity *30;
}
else if(quantity >= 25){
    price = quantity * 25
}
return price;

}

console.log(mularDam(3));