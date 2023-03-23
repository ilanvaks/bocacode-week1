// 1.What is the technical term used to create a variable in JavaScript?
// Techincal term for variable in javascript is to declare your variable using let or const.


//2.What is the technical term used to call or execute a function in JavaScript?
// To invoke a function


//3. Create an object called student, including 3 properties with their values.

const student = {
    hairColor: 'Black',
    gender: 'Male',
    age: 23
}
console.log(student)
//4.Create a function that removes the first element of the array 
//below and adds “kiwi” to the end of the array.

let favoriteFruits = ['mango', 'lychee', 'strawberry', 'papaya'] 

function favoriteFoods(favoriteFruits) {
    favoriteFruits.shift()
    favoriteFruits.push('kiwi')
    console.log(favoriteFruits)
}

favoriteFoods(favoriteFruits)