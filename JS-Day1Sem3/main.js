function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    else console.log('Wrong input!');
}

var sub = function(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 - n2;
    else console.log('Wrong input!');
}

function mul(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 * n2;
    else console.log('Wrong input!');
}

var cb = function(n1, n2, callback) {
    if (typeof n1 === 'number' && typeof n2 === 'number' && typeof callback === 'function') {
        return 'Result from the two numbers: ' + n1 + '+' + n2 + '=' + callback(n1, n2);
    } else {
        throw new Error('Wrong input!');
        console.log('Wrong input!');
    }
};


function consoleMath() {
    console.log(add(1, 2)) // What will it print            3
    console.log(add) // What will it print                  it will print the add function 
    console.log(add(1, 2, 3)); // What will it print        3 (it ignores the 3rd variabel)
    console.log(add(1)); // What will it print 	            NaN (it's not recieving the required variables)
    console.log(cb(3, 3, add)); // What will it print       Result from the two numbers: 3+3=6       
    console.log(cb(4, 3, sub)); // What will it print       Result from the two numbers: 4-3=1
    try {
        console.log(cb(3, 3, add())); // What will it print     Wrong input!
    } catch (error) {

    }
    try {
        console.log(cb(3, 'hh', add)); // What will it print    Wrong input!        
    } catch (error) {

    }
    console.log(add(1, 'a'))
}

var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
var names2 = [];

names.forEach(function(name) {
    console.log(name);
}, this);
names.forEach(function(name) {
    if (name.length <= 3) names2.push(name);
}, this);
names2.forEach(function(name) {
    console.log(name);
}, this);

var names3 = names.map(function(pik) {
    return pik.toUpperCase;
})

names3.forEach(function(name) {
    console.log(name);
}, this);

function fordiviskal(arr) {
    var str = '';
    str += '<ul>';
    arr.forEach(function(tingting) {
        str += '<li>' + tingting + '</li>';
    }, this);

    str += '</ul>';
    return str;
}

var list = fordiviskal(names);
console.log(list);

var cars = [{
        id: 1,
        year: 1997,
        make: "Ford",
        model: "E350",
        price: 3000
    },
    {
        id: 2,
        year: 1999,
        make: "Chevy",
        model: "Venture",
        price: 4900
    },
    {
        id: 3,
        year: 2000,
        make: "Chevy",
        model: "Venture",
        price: 5000
    },
    {
        id: 4,
        year: 1996,
        make: "Jeep",
        model: "Grand Cherokee",
        price: 4799,
    },
    {
        id: 5,
        year: 2005,
        make: "Volvo",
        model: "V70",
        price: 44799
    }
];

var carFilter = function(array, filterType, filterValue) {
    switch (filterType) {
        case "make":
            return cars.filter(function(car) {
                return car.make === filterValue;
            });
        case "newerThan":
            return cars.filter(function(car) {
                return car.year > filterValue;
            });
        case "priceLessThan":
            return cars.filter(function(car) {
                return car.price < filterValue;
            });
    }
};
console.log(carFilter(cars, "make", "Jeep"));
console.log(carFilter(cars, "priceLessThan", 5000));


//4a
var carString = function(car) {
    return car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price;
};

var carSql = function(car) {
    var sql = "INSERT INTO cars (id,year,make,model,price) VALUES (" + carString(car) + ");";
    console.log(sql);
    return sql;
};
console.log("all cars in sql");
cars.forEach(carSql);



//Asynchronous callbacks
//1
// i expect the order of the letters to be:
//aaa
//ddd
//fff
//eee with 1 sec delay
//bbb with 1 sec delay more
//2
var msgPrinter = function(msg, delay) {
    setTimeout(function() {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");

//i was right :)
//This and constructor funtions
//1 + 3
function Person(name) {
    this.name = name;
    //var self = this;
    console.log("Name: " + this.name);
    setTimeout(function() {
        console.log("Hi " + this.name); //Explain this - runs the code in the setTimeout function after the given delay in ms here 2 sec. 
        // this.name refers to inside this codeblock, therefore it is undefined.
    }.bind(this), 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
var p = new Person("Kurt Wonnegut"); //This calls the function
//console.log("I'm global: " + name); //Explain this - the name set on person on the line above set the global variable name to the given string.
//2
//reference eror: name not defined. now we dont define the name in the global scope, but actually for the person object p.

//4
var greeter = function() {
    console.log(this.message);
};
var comp1 = {
    message: "Hello World"
};
var comp2 = {
    message: "Hi"
};

var g1 = greeter.bind(comp1); //We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2); //And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);

//Javascript objects
//1
var myself = {
    name: "Kasper",
    lastName: "Breindal",
    age: 20,
    sex: "male"
};
for (value in myself) {
    console.log(value, myself[value]);
}
delete myself.lastName;

for (value in myself) {
    console.log(value, myself[value]);
}
myself.coolfactor = "toplevel";
for (value in myself) {
    console.log(value, myself[value]);
}
//2 
function person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    //this.getInfo = funtion() {
    //   return "name: " + this.firstName + " " + this.lastName + "age: " + this.age;
    // }
}