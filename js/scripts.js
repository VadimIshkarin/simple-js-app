//IIFE - pokemonList1
let pokemonRepository = (function () {
  let pokemonList1 = [
    { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
    { name: "Charmander", height: 6, color: "orange", type: "fire" },
    { name: "Charizard", height: 8, color: "brown", type: ["flying", " fire"] },
  ];
  function add(pokemon) {
    pokemonList1.push(pokemon);
  }
  function getAll() {
    return pokemonList1;
  }
  return {
    add: add,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.add({
  name: "Dino",
  height: 11,
  color: "green",
  type: "fire",
});

//FOR EACH method that iterates over each item in pokemonList (an array of objects).
let pokemonList = [
  { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
  { name: "Charmander", height: 6, color: "orange", type: "fire" },
  { name: "Charizard", height: 8, color: "brown", type: ["flying", " fire"] },
];

pokemonList.forEach(function (pokemon) {
  if (pokemon.height >= 8) {
    document.write(
      `${"<p>" + pokemon.name} height is ${
        pokemon.height
      }: - Wow, that's big!, color is ${pokemon.color}, type is ${
        pokemon.type
      }.`
    );
  } else {
    document.write(
      `${"<p>" + pokemon.name} height is ${pokemon.height}, color is ${
        pokemon.color
      }, type is ${pokemon.type}.`
    );
  }
});

//FOR LOOP that iterates over each item in pokemonList (an array of objects) and document write () pokemon name, color, height, type and don't use console.log.
// let pokemonList = [
//   { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
//   { name: "Charmander", height: 6, color: "orange", type: "fire" },
//   { name: "Charizard", height: 8, color: "brown", type: ["flying", " fire"] },
// ];

// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height < 8 && pokemonList[i].height > 6) {
//     document.write(
//       `${pokemonList[i].name} height is ${pokemonList[i].height}, color is ${pokemonList[i].color}, type is ${pokemonList[i].type}.`
//     );
//   } else if (pokemonList[i].height < 7 && pokemonList[i].height > 5) {
//     document.write(
//       `${"<p>" + pokemonList[i].name} height is ${
//         pokemonList[i].height
//       }, color is ${pokemonList[i].color}, type is ${pokemonList[i].type}.`
//     );
//   } else {
//     document.write(
//       `${"<p>" + pokemonList[i].name} height is ${
//         pokemonList[i].height
//       }: - Wow, that's big!, color is ${pokemonList[i].color}, type is ${
//         pokemonList[i].type
//       }.`
//     );
//   }
// }

//FOR OF LOOP that iterates over each item in pokemonList (an array of objects)
// let animalList = [
//   { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
//   { name: "Charmander", height: 6, color: "orange", type: "fire" },
//   { name: "Charizard", height: 8, color: "brown", type: "flying" },
// ];

// for (let animal of animalList) {
//   if (animal.height >= 8) {
//     console.log(
//       `${animal.name} height is ${animal.height}: - Wow, that's big!, color is ${animal.color}, type is ${animal.type}.`
//     );
//   } else {
//     console.log(
//       `${animal.name} height is ${animal.height}, color is ${animal.color}, type is ${animal.type}.`
//     );
//   }
// }
