// var obj = {value: 2};

// var addTothis = function(a,b,c) {
//     return this.value + a + b + c;
// };

// //console.log(addTothis.call(obj, 1,2,3));
//  var arr = [1,2,3];
// // console.log(addTothis.apply(obj, arr));

// var bound = addTothis.bind(obj); 

// console.log(bound(1,2,3));

var student = {age: 20};

var printName = function() {
    return this.age
}

var bound = printName.bind(student);

console.log(bound());