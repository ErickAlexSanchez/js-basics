// Importamos ambas funciones desde functions.js
import { sumatoriaExportable, restaExportable  } from "./functions.js";

// Llamamos a las funciones con los valores 350 y 500
const myNewSuma = sumatoriaExportable(350, 500);
const myNewResta = restaExportable(350, 500);

// Mostramos los resultados con alert
alert(`La suma da ${myNewSuma}`);
alert(`La resta da ${myNewResta}`);



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






// Map & Filter (they create a new array)
/*
map (transform) → same number of elements, but transformed
filter (select) → fewer (or equal) elements, but selected
*/

const myArrayTwo = ['Jose', 'Miguel', 'Antonio', 'Diego'];

const nameLengths = myArrayTwo.map(name => name.length);
console.log('The array content lengths are:', nameLengths);

const longestNames = myArrayTwo.filter(name => name.length > 5);
console.log('The longest names with more than 5 characters are:', longestNames);

// forEach
// Used for side effects (logging, DOM, etc.)
myArrayTwo.forEach(name => console.log(name));

// Adding space to each element (creating a new array)
const spacedArray = myArrayTwo.map(name => name + ' ');
console.log('MyArrayTwo with spaces:', spacedArray);

// Adding space to each element (in the original array, it only gonna work on let tipe variable, not in const)
// myArrayTwo = myArrayTwo.map(name => `${name} `);


// Deconstructin arrays
// The first 2 were ignorated, The 4 (Josuelo) doesnt exist on the array so it can take any value
const [, , Antonele, Diegue,  Josuelo = 'Josuelin'] = myArrayTwo;

console.log(`My Last Array Two ${Antonele}, ${Diegue}, ${Josuelo}`);


// Traditional function
function demoFunciton (firstParam, secondParam) {
    return(firstParam + secondParam);
}

// Arrow function
const myDemoArrowFunct = (a, b) => a + b;


alert(demoFunciton(10,20));
alert(myDemoArrowFunct(100,200));













// API conections


// 1 URL definition
const url = 'https://jsonplaceholder.typicode.com/comments';

// Conecciones sincronas (hasta que se conecta ejecuta lo demás)
function myAPIconnection() {
  fetch(url)
  .then((response) => {
    if(response.ok) {
      return response.json()
    }
    throw new Error("No se pudo conectar con la API");
  })
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
}

myAPIconnection();



// Conecciones asincronas (continua ejecución del resto del código mientras espera resultado)

const myAsyncAPIConnection = async () => {
try {
  const response = await fetch(url) 
  if (!response.ok) {
    throw new Error("Error en conexión con API");
    
  }
  const data = await response.json()
  console.log(data)
} catch (error) {
  console.log(error.message)
}


}

myAsyncAPIConnection();



// Consulta simultanea de múltiples API's de forma asincrona
const url1 = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/users";


const multyAPIAsyncReques = async () => {
  try {
    const inicioPerformance = performance.now();


    const [response1, response2, response3] = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);

    const [data1, data2, data3] = await Promise.all([response1.json(), response2.json(), response3.json()]);

    console.log(data1);
    console.log(data2);
    console.log(data3);

    const finPerformance = performance.now();
    console.log(`Performance es: ${finPerformance - inicioPerformance}`);
  } catch (error) {
    console.log(error.message);
  }
}


multyAPIAsyncReques()




// Clases 
class MyTemplate {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return `Hi ${this.name}`;
  }
}

const userOne = new MyTemplate('Rick', 32);

alert(userOne.sayHi());


// DOM
const btn = document.querySelector(".btn");

btn.addEventListener('click', () =>{
  alert(userOne.name);
})













