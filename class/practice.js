// // const totalIteration = 1;

// // for (let i=0; i < totalIteration; i++ ) {
// //     console.log(i);
// // }


// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments

 function tellFortune (numberOfChildren, partnersName, geoLocation, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${geoLocation} and married to ${partnersName} with ${numberOfChildren} kids, `)
 }

 tellFortune (3, "John", "New York", "Software Engineer")

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge (puppyAge) {
    const dogAgeResult = 7 * puppyAge 
    return (`Your dog is ${dogAgeResult} years old in dog years.`)
}

console.log(calculateDogAge(2))