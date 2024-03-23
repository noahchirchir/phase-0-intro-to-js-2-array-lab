let cats = ["Milo", "Otis", "Garfield"]; // Initialize the cats array

function destructivelyAppendCat(name) {
    cats.push(name); // Append the cat to the end of the cats array
}

function destructivelyPrependCat(name) {
    cats.unshift(name); // Prepend the cat to the beginning of the cats array
}

function destructivelyRemoveLastCat() {
    cats.pop(); // Remove the last cat from the cats array
}

function destructivelyRemoveFirstCat() {
    cats.shift(); // Remove the first cat from the cats array
}

function appendCat(name) {
    let newCats = [...cats, name]; // Create a new array with the additional cat
    return newCats; // Return the new array
}

function prependCat(name) {
    let newCats = [name, ...cats]; // Create a new array with the additional cat at the beginning
    return newCats; // Return the new array
}

function removeLastCat() {
    let newCats = cats.slice(0, -1); // Create a new array without the last cat
    return newCats; // Return the new array
}

function removeFirstCat() {
    let newCats = cats.slice(1); // Create a new array without the first cat
    return newCats; // Return the new array
}

