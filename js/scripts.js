let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=148";

  let input = $("input");
  input.on("input", filterList);

  // filter function to search pokemon while entering pokemon name
  function filterList() {
    let inputValue = $("input").val().toLowerCase();
    let list = $("li");
    list.each(function () {
      let item = $(this);
      let name = item.text().toLowerCase();
      if (name.includes(inputValue)) {
        item.show();
      } else {
        item.hide();
      }
    });
  }

  // show the modal content
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    modalBody.empty();

    // Creating elements for name in modal content
    let namePokemon = $(`<h1>${pokemon.name}</h1>`);
    //Creating image in modal content
    let imagePokemon = $(
      `<img class="modal-img mx-auto" src="${pokemon.svgUrl}" alt="Image of ${pokemon.name}">`
    );
    //Creating element for height in modal content
    let heightPokemon = $(`<p>height : ${pokemon.height} mm</p>`);
    // Creating element for weight in modal content
    let weightPokemon = $(`<p>weight : ${pokemon.weight} grams</p>`);
    //Creating element for type in modal content
    let typesPokemon = $(`<p>types : ${pokemon.types}</p>`);

    modalTitle.append(namePokemon);
    modalBody.append(imagePokemon);
    modalBody.append(heightPokemon);
    modalBody.append(weightPokemon);
    modalBody.append(typesPokemon);
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let ul = document.querySelector("ul");
    let listPokemon = document.createElement("li");
    listPokemon.classList.add("col-sm-6", "col-md-4", "col-lg-3");
    let button = document.createElement("button");
    button.innerText = capitalizeWord(pokemon.name);
    button.addEventListener("click", (event) => {
      showDetails(pokemon);
      event.target.blur();
    });

    //Add classes & attributes to list item
    button.classList.add("btn", "btn-block");
    button.classList.add("m-1", "pokemon-button");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", ".modal");

    listPokemon.appendChild(button);
    ul.appendChild(listPokemon);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //LOADLIST___________________
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          // console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //LOADDETAILS_____________________
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.svgUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        let types = [];
        details.types.forEach(function (item) {
          types.push(capitalizeWord(item.type.name));
        });
        item.types = types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function capitalizeWord(word) {
    if (typeof word !== "string") {
      return "";
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
