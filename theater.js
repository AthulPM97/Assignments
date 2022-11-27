console.log('person1 shows ticket');
console.log('person2 shows ticket');

const person3PromiseToShowTicketWhenWifeArrives = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve("ticket");
        }, 3000);
});

const getPopcorn = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('popcorn');
    }, 3000);
});

const addButter = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('butter');
    }, 3000);
});

const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('cold drinks');
    }, 3000);
})

person3PromiseToShowTicketWhenWifeArrives.then((ticket) => {
    console.log(`got the ${ticket}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);
});
  
getPopcorn.then((popcorn) => {
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);
});

addButter.then((butter) => {
    console.log(`added ${butter}`);
});

getColdDrinks.then((drinks) => {
    console.log(`got the ${drinks}`);
});

Promise.all([person3PromiseToShowTicketWhenWifeArrives,
    getPopcorn, addButter, getColdDrinks]).then(() => {
    console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);
});
  