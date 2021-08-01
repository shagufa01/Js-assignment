// function declaration
function add(a,b){
    var sum = a+b;
    return sum;
}
var sum1=add(2,5);
console.log(sum1);


// functional hosting
var sum1=add(5,5);
console.log(sum1);

function add(a,b){
    var sum = a+b;
    return sum;
}

// function expression
var sub2 = function(c,d) {
    var sub = d-c;
    return sub;
}
var res=sub2(6,9);
console.log(res);


// assignment

const percentage = 95;
switch(true){
    case percentage<35:
    console.log("failed");
    break;

    case percentage==35:
    console.log("passed");
    break;

    case percentage<80:
    console.log("FC");
    break;

    case percentage>80:
    console.log("FCD");
    break;

    default: 
    console.log("enter the correct information");
}

// testing

var division=1;
switch(division){
    case 1 :
        console.log("first division");
        break;

    case 2 :
        console.log("second division");
        break;

    case 3 :
        console.log("third division");    

    default:
        console.log("Passed!");    
}

// array

var flowers = ["rose", "tulip", "lotus", "sunflower", "hibiscus", "jasmine", "lavender"]
console.log(flowers[0]);
console.log(flowers[1]);
console.log(flowers[2]);
console.log(flowers[3]);
console.log(flowers[4]);
console.log(flowers[5]);
console.log(flowers[6]);
console.log(flowers.length);

var animals = ["lion", "tiger", "leopard", "fox", "giraffe", "panda", "horse"]
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);
console.log(animals[5]);
console.log(animals[6]);
console.log(animals.length);

// push
animals.push("bear");
console.log(animals);

// pop
animals.pop();
console.log(animals);

// unshift
animals.unshift("gorilla");
console.log(animals);

// shift
animals.shift();
console.log(animals);

// splice
animals.splice(3,0,"deer");
console.log(animals);

animals.splice(4,1,"wolf");
console.log(animals);

animals.splice(1,3,"cat","dog");
console.log(animals);

// reverse
animals.reverse();
console.log(animals);

// concat
var collect = flowers.concat(animals);
console.log(collect);

var arrange = animals.concat(flowers);
console.log(arrange);
