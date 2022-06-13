//Never use FOR LOOP with Arrays, better to use Array helper methods such as forEach, map, reduce!!!

//FOR LOOP that iterates over each item in pokemonList (an array of objects)
let pokemonList = [
  { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
  { name: "Charmander", height: 6, color: "orange", type: "fire" },
  { name: "Charizard", height: 8, color: "brown", type: ["flying", " fire"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 8 && pokemonList[i].height > 6) {
    document.write(
      `${pokemonList[i].name} height is ${pokemonList[i].height}, color is ${pokemonList[i].color}, type is ${pokemonList[i].type}.`
    );
  } else if (pokemonList[i].height < 7 && pokemonList[i].height > 5) {
    document.write(
      `${"<p>" + pokemonList[i].name} height is ${
        pokemonList[i].height
      }, color is ${pokemonList[i].color}, type is ${pokemonList[i].type}.`
    );
  } else {
    document.write(
      `${"<p>" + pokemonList[i].name} height is ${
        pokemonList[i].height
      }: - Wow, that's big!, color is ${pokemonList[i].color}, type is ${
        pokemonList[i].type
      }.`
    );
  }
}

// //FOR LOOP that iterates over each item in pokemonList (an array of objects)
// let pokemonList = [
//   { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
//   { name: "Charmander", height: 6, color: "orange", type: "fire" },
//   { name: "Charizard", height: 8, color: "brown", type: ["flying", " fire"] },
// ];

// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height < 8 && pokemonList[i].height > 6) {
//     document.write("<p>" + pokemonList[0].name + ", " + "<p/>");
//     console.log(
//       `${pokemonList[i].name} height is ${pokemonList[i].height}, color is ${pokemonList[i].color}, type is ${pokemonList[i].type}.`
//     );
//   } else if (pokemonList[i].height < 7 && pokemonList[i].height > 5) {
//     document.write("<p>" + pokemonList[1].name + ", " + "<p/>");
//     console.log(
//       `${pokemonList[i].name} height is ${pokemonList[i].height}, color is ${pokemonList[i].color}, type is ${pokemonList[i].type}.`
//     );
//   } else {
//     document.write("<p>" + pokemonList[2].name + ". " + "<p/>");
//     console.log(
//       `${pokemonList[i].name} height is ${pokemonList[i].height}: - Wow, that's big!, color is ${pokemonList[i].color}, type is ${pokemonList[i].type}.`
//     );
//   }
// }

//Better to use FOR OF LOOP:
//FOR OF LOOP that iterates over each item in pokemonList (an array of objects)
// let pokemonList = [
//   { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
//   { name: "Charmander", height: 6, color: "orange", type: "fire" },
//   { name: "Charizard", height: 8, color: "brown", type: "flying" },
// ];

// for (let pokemon of pokemonList) {
//   console.log(
//     `${pokemon.name} height is ${pokemon.height}, color is ${pokemon.color}, type is ${pokemon.type}.`
//   );
// }
