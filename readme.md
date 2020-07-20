Credit-CArd Validator
Coded in Python, Javascript and C

"I found a tutorial on how to do this on C language. So I played around a bit and thought it would be better to code this in Javascript and Python,
both of which I'm learning"

"I think this is a great way to learn"

//Luhn Algorithm
check whether a card is valid or not

??CARD MAKE
// American express starts with 34 or 37 >> 15 digit number
//Mastercard starts with 51, 52, 53, 54 or 55 -> 16 digit
//Visa starts with a 4 -> 13 or 16 digits

4003600000000014
//start with odd numbers from the left and multiply them by 1
//for the even number multiply them by 2
1st case: 4*1 + 3*1 = 7
2nd case: 1*2 + 6*2 + 4*2 
        = 2 + 12 + 8
        = 2 + 1 + 2 + 8
        = 13
check//
sum = 7 + 13 = 20
since 20 % 10 == 0, the card is valid

//scrapping the digits for calculation in the program

Getting the last digit

1st case:
1. iterate through the cc number
2. user modulo to get the last digit
3. add last digit to the sum counter
4. divide the cc number by 100
5. repeat

2nd case:
1. Divide teh cc number by 10
2. iterate through the cc number
3. use modulo to get the last digit
4. add last digit multiplied by 2 to the sum
  if (two digits)
  4.1: use modulo to get last digit
  4.2: use division to get the first digit
  4.3: add the digits
4. add last digit to sum
5. divide the cc number by 100
6. repeat


how to get first digit

1234

1234 / 1000 =1
1234 / 100 =12

get length of the number