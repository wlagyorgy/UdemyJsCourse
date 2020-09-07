///////////////////////////////////////
// Lecture: Hoisting
console.log(this)
calculateAge(1993)
function calculateAge(year) {
	console.log(2020-year)
}

//calculateAge(1993)


//retirement(1993)
var retirement = function(year){
	console.log(65-(2020-year))
}

//retirement(1993)

console.log(age)
var age = 23;
function foo(){
	console.log(age)
	var age = 65;
	console.log(age)
}
foo()
console.log(age)
console.log(window.age)





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
} */




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
	//console.log(a + b + c + d);
	console.log(a + d)
}

function _4th(alma) {
	console.log(alma)
}


///////////////////////////////////////
// Lecture: The this keyword
console.log(this)
var john = {
	name: 'John',
	year: 1993,
	calculateAge: function() {
		console.log(this)
		console.log(2020-this.year)
		function innerFunction(){
			console.log(this)
		}
		innerFunction()
	}
}
john.calculateAge()

var mike = {
	name: 'Mike',
	year: 1990
}

mike.calculateAge = john.calculateAge
mike.calculateAge()






