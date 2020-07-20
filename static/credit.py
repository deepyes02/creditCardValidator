#using luhn's algorithm to solve this credit card validation
#let's go now

creditCard = int(input("Enter a card Number: "))
sum = 0
workingDigits = creditCard

while (workingDigits > 0):
    lastDigit = workingDigits %10
    sum = sum + lastDigit
    workingDigits = workingDigits // 100

print("sum of odd digits", sum)

#odd number multiplied by 2
#if two digits, is factored to one by adding the two digits

ridLastDigit = creditCard//10
workingDigits = ridLastDigit

while (workingDigits > 0):
    lastDigit = workingDigits % 10
    lastDigit *= 2
    digitValue = 0

    if (lastDigit < 10):
        sum = sum + lastDigit

    else:
        digitValue = (lastDigit % 10) + (lastDigit // 10)
        sum = sum + digitValue

    workingDigits = workingDigits // 100 #get rid of last two digits to get the third one

print('sum of all digits after adjustment', sum)

#finding the first digit and first two digits of the numbers
workingDigits = creditCard
count =0

while (workingDigits != 0):
    workingDigits = workingDigits//10
    count= count+1

print("Digit count: ", count)

firstDigit = creditCard//10**(count-1)
firstTwoDigits = creditCard//10**(count-2)

print("first Digit :", firstDigit)
print("firstTwoDigits: ", firstTwoDigits)

"""
since the validity is now confirmed, classify the credit card according to company and console log the fuck out.
American express starts with 34 or 37 >> 15 digit number
Mastercard starts with 22, 51, 52, 53, 54 or 55 -> 16 digit
Visa starts with a 4 -> 13 or 16 digits
"""
cardProvider = ['Visa', 'MasterCard', 'American Express']

#Check if the card is valid at all, after that, check which card it is, return cardname, valid/invalid

if (sum % 10 == 0):
    print("The Credit Card ", creditCard, " is valid.")
    #since valid, check and return the make of card

    if ((count == 13 or count == 16) and firstDigit ==4):
        print("It's a ", cardProvider[0], ".")

    elif ((count ==16) and (firstTwoDigits == 22 or (firstTwoDigits > 50 and firstTwoDigits < 56))):
        print("It's a ", cardProvider[1], ".")

    elif ((count == 15) and (firstTwoDigits == 34 or firstTwoDigits == 37)):
        print("It's a ", cardProvider[2], ".")

    else :
        print("Card's provider not available")
else:
    print("Card is invalid")
    
    


    






    










    
    
    


