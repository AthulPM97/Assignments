let multiply = function(x,y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3)