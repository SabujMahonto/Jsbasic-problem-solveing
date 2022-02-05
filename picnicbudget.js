function picnicBudget(number){

    let forFirstHundredPeople = 5000;
    let forSecondHundredPeople = 4000;
    let forRestPeople = 3000;

if( number < 0){
    return " People Quantity can not be Negative .Please input a valid number"
}
else if(number <= 100){
    let  peopleCost = number * forFirstHundredPeople;
    return peopleCost;
}
else if(number <= 200){
    let  firstHundredPeopleCost = forFirstHundredPeople * 100;
    let  restPeople = number - 100;
    let  secondHundredPeopleCost = restPeople * forSecondHundredPeople;
    let totalPeople = firstHundredPeopleCost + secondHundredPeopleCost;
  return totalPeople;
}
else{
    let  firstHundredPeopleCost = forFirstHundredPeople * 100;
    let  secondHundredPeopleCost = 100 * forSecondHundredPeople;
    let restPeople = number - 200;
    let restPeopleCost = restPeople * forRestPeople;
    let totalPeople = firstHundredPeopleCost + secondHundredPeopleCost + restPeopleCost;
    return totalPeople;
}

}

let total = picnicBudget(203);
console.log(total);