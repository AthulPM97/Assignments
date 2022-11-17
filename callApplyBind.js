var obj = {value: 2};

var addTothis = function(a,b,c) {
    return this.value + a + b + c;
};

console.log(addTothis.call(obj, 1,2,3));