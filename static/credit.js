//solve odd number first
//we use the luhn algorithm to solve this
function myFunction() {
  let creditCard = document.getElementById('card-number').value;
  let sum = 0;
  let workingDigits = creditCard;
  
  while (workingDigits > 0){
      let lastDigit = workingDigits % 10; //3
      sum = sum + lastDigit // 3
      //get rid of last two digits, next num is 7
      workingDigits = Math.floor(workingDigits / 100);
      //since we don't know how many times this should iterate,
      //we use a while loop
  }
  
  //odd number multiplied by 2, 
  //factored into one if greater than 9, and added to the sum
  
  let ridLastDigit = Math.floor(creditCard/10); 
  workingDigits = ridLastDigit;
  while (workingDigits > 0){
    
  let lastDigit = workingDigits % 10; //1
  lastDigit *= 2
  let digitValue =0;
  if (lastDigit < 10){
    sum = sum + lastDigit
  } else {
    digitValue = (lastDigit%10) + Math.floor(lastDigit/10);
    sum = sum + digitValue;
  }
  //get rid of last two digits to get to the third one
  workingDigits = Math.floor(workingDigits / 100);
  }  
  //finding the first digit and first two digits of the numbers
  //logic iterate through the numbers floor-divided by ten until it counts to the 
  //lst number, i.e 0. After that, you can see that to get the first digit,
  // floor-division by 10^(count-1), and to get the first two digits,
  //floor division by 10^(count-2) works perfectly fine.
  workingDigits = creditCard;
  let count = 0;
  
  while (workingDigits !== 0){
    workingDigits = Math.floor(workingDigits/10);
    count ++
  }
  
  firstDigit = Math.floor(creditCard/10**(count-1));
  firstTwoDigits = Math.floor(creditCard/10**(count-2));
  
  //since the validity is now confirmed, classify the credit card according to company and console log the fuck out.
  // American express starts with 34 or 37 >> 15 digit number
  //Mastercard starts with 22, 51, 52, 53, 54 or 55 -> 16 digit
  //Visa starts with a 4 -> 13 or 16 digits
  let cardProvider = ['VISA', 'MASTERCARD', 'AMERICAN-EXPRESS']
  
  //check if the credit card is valid
  if ( count > 12 && sum % 10 === 0){
    if (count === 15 && (firstTwoDigits === 34 || firstTwoDigits === 37)){
      document.getElementById("cardDisplay").innerHTML = `The Card belongs to ${cardProvider[2]}`;
    } else if (count === 16 && (firstTwoDigits ===22 || (firstTwoDigits >50 && firstTwoDigits < 56))){
      document.getElementById("cardDisplay").innerHTML =`The Card belongs to ${cardProvider[1]}`;
    } else if ((count === 13 || count === 16) && firstDigit === 4){
      document.getElementById("cardDisplay").innerHTML =`The Card belongs to ${cardProvider[0]}`;
    }
    else{
      document.getElementById("cardDisplay").innerHTML =`The Card is mathematically valid but its maker isn't listed with us`;
    }
  } else {
    document.getElementById("cardDisplay").innerHTML =`the Credit Card ${creditCard} is INVALID!!`;
  }

  
  // console.log("CreditCard before click: ", creditCard);
  // console.log('firstDigit: ', firstDigit);
  // console.log('firstTwoDigits: ', firstTwoDigits); console.log('digit count: ', count)
  // console.log(workingDigits)
  // console.log('sum total: ', sum)

 //end of code 
}

function changeText(){
  document.getElementById('heading').innerHTML = "Random THoughts";
}