const myCollection = {
  nombre : 'Jose',
  age : 32
}

// Deconstruction: asigning the vale to the variable, syntaxis:
const {nombre} = myCollection; 


alert(myCollection.age);
alert(nombre);


const myProduct = {
  nombre : 'Juguete 01',
  price: 3202
}

// Deconstruction with diferente variable name then the original object key
const {nombre: nombreCliente} = myProduct;
alert(nombreCliente);



const myHouse = {
  doors : 6,
  windows: 99,
  location: {
    satate: "Mexico state",
    number: 22
  }
}

const {doors: myDoors, location: satate} = myHouse;

console.log(satate);


// spread operator "..."
// it take the content and add it here
const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b];
console.log(c); // [1, 2, 3, 4]
