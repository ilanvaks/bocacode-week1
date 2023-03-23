const shirt = {
    shirt: "cotton shirt",
    color: "black",
    quantity: 3, 
    size: "medium", 
    like: true
}

// bracket notation
const shirtSize = shirt["size"]
// dot notation
const shirtLike = shirt.like 

console.log("size:", shirtSize)
console.log("like:", shirtLike)