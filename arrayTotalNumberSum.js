let numbers = [ 10, 10, 10, 60, 5, 5,];

function arrayTotal( numbers){
    let sum = 1;
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
          sum = sum + element;
    }
    return sum;
}

let total = arrayTotal(numbers);

console.log(total);



//     sum = 0;
// for( i = 0; i < numbers.length ; i++){
//     let element = numbers[i]
//      sum = sum + element;
// }


// console.log(sum);