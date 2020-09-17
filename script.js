var animal = Math.floor( Math.random() * 6 ) + 1;


console.log ("animal " + animal);


if (animal === 1) {
  animal = "Squirrel";
}

else if (animal === 2) {
  animal = "Bee";
}

else if (animal === 3) {
   animal = "Cat";
}

else if (animal === 4) {
   animal = "Tiger";
}

else if (animal === 5) {
   animal = "Sloth";
}

else if (animal === 6) {
   animal = "Giraffe";
}


var food = Math.floor( Math.random() * 6 ) + 1;

console.log ("food " + food);


if (food === 1) {
   food = "pizza";
}

else if (food === 2) {
   food = "peanuts";
}

else if (food === 3) {
   food = "steak";
}

else if (food === 4) {
   food = "grass";
}

else if (food === 5) {
   food = "honey";
}

else if (food === 6) {
   food = "fish";
}


var environment = Math.floor( Math.random() * 6 ) + 1;

console.log ("environment " + environment);

if (environment === 1) {
   environment = "bee hive";
}

else if (environment === 2) {
   environment = "cave";
}

else if (environment === 3) {
   environment = "living room";
}

else if (environment === 4) {
   environment = "tree";
}

else if (environment === 5) {
   environment = "desert";
}

else if (environment === 6) {
   environment = "zoo";
}


document.querySelector(".output").innerHTML = `${animal}s love to eat ${food} from the ${environment}.`

