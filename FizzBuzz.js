//Count 1 to 100
//Every multiple of 3 "fizz"
//Every Multiple of 5 "buzz"
//Every Multiple of 3 & 5 "FizzBuzz"

var num = 1

while(num <= 100){
    if (num%3==0 && num%5==0) {
        console.log("FizzBuzz")
    }
    else if (num%3==0){
        console.log("Fizz")
    }
    else if (num%5==0){
        console.log("Buzz")
    }
    else {
        console.log(num)
    }
num+=1
}