/*****************************
* Variables and data types
*/

//gyakorlok ezerrel, sima 500ks fizetés coming
/*
var firstName = 'John';
console.log(firstName);
var lofasz = null
var ok = 10
if(typeof(ok) == Boolean){
	console.log("boolean");
}
else{
	console.log(typeof(ok))
}
if (ok) {
	console.log("a")
}
console.log(lofasz);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var isf = 23;
console.log(isf / 2)
console.log(typeof(_3years + isf))
try {
	console.log(x)
}
catch(e) {
	console.log(e.message)
}
let a = prompt("asd")
*/


/*****************************
* Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;

// Type coercion
console.log(typeof(firstName + ' ' + age));

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//var lastName = prompt('What is his last Name?');
try{
	console.log(firstName + ' ' + lastName);
}
catch(e){
	console.log(e.message);
}
//alert("okay, lastname is" + lastName )




/*****************************
* Basic operators
*/

var d = new Date()
var thisYear = d.getFullYear()
console.log( typeof(thisYear == 2020 ? "jó" : "rossz"))



/*****************************
* Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
y *= 5
console.log(y)
console.log(x);
x += 10;
console.log(x);
x--;
--y;

for (var k=0; k<3; ++k)
{
	console.log(k)
}
console.log(y)
console.log(x);




/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
var johnWeight = 80 	//kg
var markWeight = 90		//kg
var johnHeight = 1.81	//height
var markHeight = 1.99	//height

var jBMI = johnWeight / Math.pow( johnHeight, 2)
var mBMI = markWeight / Math.pow( markHeight, 2)

var markfatter = mBMI > jBMI
console.log('Who\'s fatter?')
markfatter ? console.log("Mark fattter than John") : console.log("John fattter than Mark")  


/*****************************
* If / else statements
*/

var firstName = 'John';
var a = 1
var civilStatus = a + 'married';

if (civilStatus == '1married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = 1;
if (isMarried == true) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var massJohn = 92;

var heightJohn = 1.95;
var heightMark = 1.69; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}




/*****************************
* Boolean logic
*/

var firstName = 'John';
var age = 15;

// ternary
age < 13 ? console.log("boy") : age >= 13 && age < 20 ? console.log("teenager") : age >= 20 && age < 30 ? console.log("young man.") :console.log("a man")

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}




/*****************************
* The Ternary Operator and Switch Statements
*/

var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

console.log(drink)
// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 5
var a = false
switch (!a) {
    case age < 13:
		console.log(firstName + ' is a boy.');
		console.log(this.a)
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}





/*****************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = false;

if (height || height === false) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}




/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnAvg = ( 89 + 120 + 103 ) / 3
var mikeAvg = ( 89 + 120 + 103 ) / 3 
var maryAvg = ( 89 + 120 + 103 ) / 3 

switch (true){
	case maryAvg > johnAvg && maryAvg > mikeAvg:
		console.log("Mary's team won");
		break;
	case mikeAvg > johnAvg && mikeAvg > maryAvg:
		console.log("Mike's team won");
		break;
	case johnAvg > mikeAvg && johnAvg > maryAvg:
		console.log("John's team won");
		break;
	default:
	console.log("It is a draw");
}

/*****************************
* Functions
*/

function calculateAge(birthYear) {
	let d = new Date()
	console.log(d.toDateString())
    return d.getFullYear() - birthYear;
}
console.log(calculateAge(1993))

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
	console.log(yearsUntilRetirement.arguments)
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1953, 'Jane');




/*****************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
	console.log(whatDoYouDo.arguments)
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo.arguments)
console.log(yearsUntilRetirement.arguments)
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));




/*****************************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
var b = []
var c = Array(5,6,6)
c.push(5)
c.push("das")
//c.push("asd")
console.log(c)
//console.log(c[3])
console.log(b.length)
console.log(c.length)
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(names))
console.log(typeof(years))
years[2] = "asd"
console.log(years)
console.log(names[2]);
console.log(years[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
names.push("lofasz")
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
console.log(typeof(john[4]))
john.push('blue');
john.unshift('Mr.');
years.push("asdsadas")
console.log(years)

console.log(john);
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));
console.log(john.length)

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);




/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/


var tip = function calculateTip( bill ){
	switch(true){
		case bill < 50:
			return bill * .2
		case bill >= 50 && bill < 200:
			return bill * .15
		default:
			return bill * .1 
	}
}
var bill = new Array(124,48,268)
var tips = bill.map((a)=>{
	return tip(a)
})
console.log(bill)
console.log(tips)
//var tips = new Array(tip(124), tip(48), tip(268))
var finalAmmount = tips.map( (item, i) => {
	return item + bill[i]
})
console.log(finalAmmount)


/*****************************
* Object and properties
*/



/*****************************
* Objects and methods
*/

var john = {
	name: "asd",
	true: "asds" 
}

var jane = new Object("asd")
console.log(jane[0])
var ex
console.log(ex)
console.log(typeof(ex))
//console.log(ex[1])
ex = 3
console.log(typeof(ex))
//console.log(typeof(ex[1]))


var jozsi = {
	birthYear: 1995,
	calculateAge: function(){
		let d = new Date()
		this.age = d.getFullYear() - this.birthYear;
	}
}
jozsi.calculateAge()
console.log(jozsi.age)

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var Mark = {
	height: 1.80,
	mass: 90,
	calcBMI : function() {
		this.BMI = this.mass / (this.height * this.height)
	}
}

var John = {
	height: 1.82,
	mass: 80,
	calcBMI : function() {
		this.BMI = this.mass / (this.height * this.height)
	}
}

Mark.calcBMI()
John.calcBMI()
console.log(John.BMI)
console.log(Mark.BMI)

/*****************************
* Loops and iteration
*/


// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
john[8] = "asd"
for (var i = 0; i < 10; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
console.log("-------")
while(i < john.length) {
	console.log(i++)
	console.log(++i)
	console.log(i)
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}




/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 
(different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array,
 and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, 
 divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

let billsJohn = {
	bs: [124,48,268,180,42],
	calculateTip: function () {
		this.finalAmmount = this.bs.map((item)=>{
			switch(true) {
				case item < 50:
					return item * 1.2
				case item >= 50 && item < 200:
					return item * 1.15
				default:
					return item * 1.1
			}
		})
	} 
}

let billsMark = {
	bs: [77,375,110,45],
	calculateTip: function () {
		this.finalAmmount = this.bs.map((item)=>{
			switch(true) {
				case item < 100:
					return item * 1.2
				case item >= 100 && item < 300:
					return item * 1.1
				default:
					return item * 1.25
			}
		})
	} 
}

function calculateAvgTips(bills){
	let sum = 0
	for ( let i=0; i < bills.length; i++ ){
		sum += bills[i]
	}
	return sum / bills.length
}
billsJohn.calculateTip()
billsMark.calculateTip()
console.log(billsJohn.finalAmmount)
console.log(billsMark.finalAmmount)
if (calculateAvgTips(billsJohn.finalAmmount) > calculateAvgTips(billsMark.finalAmmount) ) {
	console.log("Johny")
}
else {
	console.log("Marky")
}
console.log(billsJohn)
console.log(billsMark)

// solution with class


class Bill {
	constructor(name, bills){
		this.name = name
		this.bills = bills
	}
	calculateTip() {
		this.finalAmmount = this.bills.map((item)=>{
			switch(true) {
				case item < 100:
					return item * 1.2
				case item >= 100 && item < 300:
					return item * 1.1
				default:
					return item * 1.25
			}
		})
	}
	calculateAvgTips() {
		let sum = 0
		for ( let i=0; i < this.bills.length; i++ ){
			sum += this.bills[i]
		}
		return sum / this.bills.length
	}

	
}

let johnny = new Bill("John", billsJohn.bs )
let marky = new Bill("Mark", billsMark.bs )

if ( johnny.calculateAvgTips() > marky.calculateAvgTips() ) {
	console.log(johnny.name + " nagy miller")
}
else  {
	console.log(marky.name + " nagy miller")
}