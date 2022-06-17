let pokemonRepository = (function () {
  let repository = [
    { name: "Bulbasaur", height: 7, color: "blue", type: "poison" },
    { name: "Charmander", height: 6, color: "orange", type: "fire" },
    { name: "Charizard", height: 8, color: "brown", type: ["flying", " fire"] },
  ];
  function add(pokemon) {
    repository.push(pokemon);
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    eventListener(button, pokemon);
  }
  function eventListener(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.add({
  name: "Steelix",
  height: 30,
  color: "grey",
  type: "rock head",
});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
