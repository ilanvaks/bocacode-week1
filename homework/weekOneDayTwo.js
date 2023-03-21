//Write a switch statement that takes an animal and logs the sound that animal makes to the console. Include at least 3 animals. 
//Invoke the function.
//2.   Write a function that takes the name of a fruit and logs the color of that fruit to the console. 
//Use an if-else statement. Include at least 4 fruit options.  Invoke the function.
//3.   Write a function that adds two numbers together.  Invoke the function.

let animal = "duck"

switch(animal) {
    case "tiger":
        console.log("RAWRR!")
        break;
    case "bird":
        console.log("Chirp")
        break;
    case "duck":
        console.log("quack");

}


const fruit = "Apple"

if (fruit === "Apple") {
    console.log("Color is red")
} else if (fruit === "Bananna") {
    console.log("Colors is Yellow")
} else if (fruit === "Orange") {
    console.log("Color is orange")
} else if (fruit === "Blueberry") {
    console.log("Color is blue")
}

console.log("Apple")

function myFunction(parameter1, parameter2) {
    const totalNumber = parameter1 + parameter2
    console.log(totalNumber)
}

myFunction(6, 7)
