
// 6 - Quadratic equation

let root1, root2;

let a = 67;
let b = 54;
let c = 34;

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);

    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    //console.log(`${root1},${root2}`);
}
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    //console.log(`${root1},${root2}`)

} else {
    let realpart = (-b / (2 * a)).toFixed(2);
    let imagpart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    //console.log(`${realpart}+ ${imagpart} and ${realpart}-${imagpart}`)
}

// 7 - Calucalate kilometer:-

const kilometer = 1;
const factor = 0.621371;
let miles = kilometer * factor;
// console.log(`${kilometer} kilometer is equal to ${miles}`)

// 8 - fahrenheit to celsius

const celsius = 49;
let fahrenheit = (celsius * 1.8) + 32
//console.log(fahrenheit + "  " + "fahrenheit")

// 9 - Generate a Random Number

const a1 = Math.random() * (10 - 1) + 1;
//console.log(Math.floor(a1))

// MIN AND MAX
var max = 9;
var min = 5;
const g = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(g)

// 10 - Javascript Program to Check if a number is Positive, Negative, or Zero :

let val = -10;
if (val > 0) {
    val = " The value is greater then zero"
} else if (val == 0) {
    val = " The value is equal to zero"
} else {
    val = "value is Negative"
}
//console.log(val)

// 11 - Javascript Program to Check if a Number is Odd or Even :

var n = 10;

if (n % 2 == 0) {
    n = "The number is EVEN"
} else if (n % 3 == 1) {
    n = " The number is ODD"
} else {
    n = " The number is Negative"
}
// console.log(n)
nu = 229;
result = (nu % 2 == 0) ? "even" : "odd"
//console.log(result)

// 12 - find the largest among three numbers :

var aa = 2;
var bb = 1;
var cc = 0;
//result = Math.max(aa,bb,cc)
if (aa > bb && aa > cc) {
    result = aa;
} else if (bb > aa && bb > cc) {
    result = bb;
} else {
    result = cc;
}
// console.log(result)

// 13 - Program to Check Prime Number

var aa = 8;

var isPrime = true;
if (aa === 1) {
    //console.log( `1 is neither prime nor composite number`)
} else if (aa > 1) {
    for (let i = 2; i < aa; i++) {
        if (aa % i == 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    // console.log(`${aa} is the prime number`)
} else {
    // console.log( `${aa} is NON prime number`)
}

// 14 -Program to Print All Prime Numbers in an Interval:

var low = 8;
var high = 80;

for (i = low; i <= high; i++) {
    let g = 0
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            g = 1;
            break;
        }
    }
    if (i > 1 && g == 0) {
        // console.log(i)
    }

}

// 15 -Program to Find the Factorial of a Number:

var num = 10;
result;
if (num < 0) {
    result = "The given value is Negative"
}
else if (num === 0) {
    result = "The given value is 0"
}
else {
    let multi = 1;
    for (i = 1; i <= num; i++) {
        result = multi *= i
    }
}
//console.log(result)

// 16 - Program to Display the Multiplication Table:

var num = 3;
var range = 50
for (i = 1; i <= range; i++) {
    result = num * i
    //console.log(`${num} * ${i} = ${result}`)
};

// 17 -Program to Print the Fibonacci Sequence

var n1 = 5;
var n2 = 0, n3 = 1, num;
for (i = 0; i <= n1; i++) {
    num = n2 + n3
    n2 = n3;
    n3 = num;
    //console.log(num)
}

// 18 -  Program to Check Armstrong Number:



var num = 153;
var numof = num.length

sum = 0;

let temp = num;

while (temp > 0) {
    let remainder = temp % 10
    sum += remainder * remainder * remainder
    temp = parseInt(temp / 10)
}
if (sum == num) {
    //console.log("armstrong")
} else {
    // console.log("non armstrong")
}

// 19 - Program to Make a Simple Calculator

var op = '*'
var input1 = 15.8
var input2 = 5.8
result;
if (op == '+') {
    result = input1 + input2;
}
else if (op == '*') {
    result = input1 * input2;
}
else if (op == '/') {
    result = input1 / input2;
}
else if (op == '%') {
    result = input1 % input2;
} else if (op == '-') {
    result = input1 - input2;
}
//console.log(result)
// 20 - Program to Find the Sum of Natural Numbers

var x = 100;

sum = 0;
for (i = 0; i <= x; i++) {
    sum += i
}
//console.log(sum)

//USING WHILE

var x = 100;
sum = 0;
i = 1;
while (i <= x) {
    sum += i;
    i++;
}

//console.log(sum)

// 21 - Program to Check if the Numbers Have Same Last Digit

var x = 98;
var y = 88;
var z = 548;

res1 = x % 10;
res2 = y % 10;
res3 = z % 10;

if (res1 == res2 && res2 == res3 && res3 == res1) {
    result = `${x} and ${y} and  ${z} are equal end value`
} else {
    result = `${x} and ${y} and  ${z} are not equal end value`

}
//console.log(result)

// 22 - Program to Find HCF or GCD :

var num1 = 6;
var num2 = 8;
result;
for (i = 0; i < num1 && i < num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        HCF = i// console.log(`${num1}and${num2} are dividle by ${i}`)
    }
}

var num1 = 90;
var num2 = 65;
result;
for (i = 0; i < num1 && i < num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        HCF = i// console.log(`${num1}and${num2} are dividle by ${i}`)
    }

} // console.log(HCF)

// 23 - LCM Calculation
var num1 = 6;
var num2 = 8;
result;
for (i = 0; i < num1 && i < num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        HCF = i// console.log(`${num1}and${num2} are dividle by ${i}`)
    }

} let lcm = (num1 * num2) / HCF
//console.log(lcm)

// 24 - Program to Shuffle Deck of Cards:

const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",];

var deck = [];

for (i = 0; i < suits.length; i++) {
    for (j = 0; j < values.length; j++) {
        let card = { value: values[j], Suit: suits[i] }
        deck.push(card)
    }
    
}
for( i =deck.length -1 ;i>0;i--){
    j = Math.floor(Math.random()*i);
     temp = deck[i];
    deck[i]=deck[j];
    deck[j] = temp;
    };
for(i=0;i<5;i++){
    //console.log(`${deck[i].value} of ${deck[i].Suit}`)
}
