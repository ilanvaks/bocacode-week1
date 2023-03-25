// 1.Write a function that multiplies two numbers. Invoke the function.
//2. Write a function named assignGrade, that takes one argument, a number score (example: 90).
//Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
//Invoke that function for a few different scores and log the result to make sure it works for each case.
//3. Write an array containing items of the same data type.


//1.
function myTable(param1, param2) {
    const myNumber = param1 * param2
    return myNumber
}

function myTable2(param1 = 4, param2 = 3) {
    return (param1 * param2)
}

const result1 = myTable(5,2)
const result2 = myTable2(10,900)
const result3 = myTable2("a", "b")
const result4 = myTable2() 
const result5 = myTable2(NaN,1)

console.log(result1)
console.log(result2)
console.log(result3) 
console.log(result4)
console.log(result5)

//2. Write a function named assignGrade, that takes one argument, a number score (example: 90).
//Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
//Invoke that function for a few different scores and log the result to make sure it works for each case.

function assignGrade(grade) {
    if (grade >= 90) {
        return "A"
    } else if (grade >= 80) {
        return "B"
    } else if (grade >= 70) {
        return "C" 
    } else {
        return "D"
    }
}
let myGrade = assignGrade(60)
console.log(myGrade)
// log came back D

//3. Write an array containing items of the same data type.

const favoriteSports = [
    "Basketball",
    "Baseball",
    "Football",
    "Volleyball"
]

//4. Write a function to get the first element in an array. Invoke the function. (edited) 

function getFirstFromList(favoriteSports) {
    return favoriteSports[0]
}
getFirstFromList(favoriteSports) 
 

// wrong way : getFirstFromList(favoriteSports) =>  favoriteSports[0]
// right way :const getFirstFromList = (favoriteSports) =>  favoriteSports[0]

// const expressionName = () => {}