// ? Potato Price 
// * for first 2 kg =  30 tk per kg 
// * for more than 2 kg = 25 tk per kg 
//* write a function to calculate total 
//* price based on given quantity.
//*  + error handle 

function potatoPrice(quantity){
    
        let price = 0 ;
    // basic error handle  
//     if(typeof quantity != Number ){
//         return 'Please enter a valid quantity'
//     }

   if(quantity <= 0){
        return 'Please enter a valid quantity'
    }

     if(quantity <= 2){
        price = quantity * 30 ;
    }else{
        price = quantity * 25;
    }
    return price;

  
}
 
let totalPrice = potatoPrice("1")
console.log(totalPrice);