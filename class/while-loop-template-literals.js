function loopwhile() {



let i = 0;
const end = 5;

while ( i < end ) {
    const result = i + " " + "hello";
    console.log(result)
    i++
 
}
}

function madLib(name, color, car) {
    const sentence = `Hello your name is ${name}. You drive ${car} which is ${color}.` 
    console.log(sentence);
}

madLib("sloth", "subaru", "silver")