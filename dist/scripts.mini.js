let pokemonRepository = (function () {
  let e = [];
  function a(a) {
    e.push(a);
  }
  function b() {
    return e;
  }
  function c(a) {
    d(a).then(function () {
      var b;
      let c, d, e, f, g, h, i;
      (b = a),
        (c = $(".modal-body")),
        (d = $(".modal-title")),
        d.empty(),
        c.empty(),
        (e = $(`<h1>${b.name}</h1>`)),
        (f = $(
          `<img class="modal-img mx-auto" src="${b.svgUrl}" alt="Image of ${b.name}">`
        )),
        (g = $(`<p>height : ${b.height} mm</p>`)),
        (h = $(`<p>weight : ${b.weight} grams</p>`)),
        (i = $(`<p>types : ${b.types}</p>`)),
        d.append(e),
        c.append(f),
        c.append(g),
        c.append(h),
        c.append(i);
    });
  }
  function d(a) {
    return fetch(a.detailsUrl)
      .then(function (a) {
        return a.json();
      })
      .then(function (b) {
        (a.imageUrl = b.sprites.front_default),
          (a.svgUrl = b.sprites.other.dream_world.front_default),
          (a.height = b.height),
          (a.weight = b.weight),
          (a.types = b.types);
        let c = [];
        b.types.forEach(function (a) {
          c.push(f(a.type.name));
        }),
          (a.types = c);
      })
      .catch(function (a) {
        console.error(a);
      });
  }
  function f(a) {
    return "string" != typeof a ? "" : a.charAt(0).toUpperCase() + a.slice(1);
  }
  return (
    $("input").on("input", function () {
      let a = $("input").val().toLowerCase();
      $("li").each(function () {
        let b = $(this);
        b.text().toLowerCase().includes(a) ? b.show() : b.hide();
      });
    }),
    {
      add: a,
      getAll: b,
      addListItem: function (d) {
        let e = document.querySelector("ul"),
          b = document.createElement("li");
        b.classList.add("col-sm-6", "col-md-4", "col-lg-3");
        let a = document.createElement("button");
        (a.innerText = f(d.name)),
          a.addEventListener("click", (a) => {
            c(d), a.target.blur();
          }),
          a.classList.add("btn", "btn-block"),
          a.classList.add("m-1", "pokemon-button"),
          a.setAttribute("data-toggle", "modal"),
          a.setAttribute("data-target", ".modal"),
          b.appendChild(a),
          e.appendChild(b);
      },
      loadList: function () {
        return fetch("https://pokeapi.co/api/v2/pokemon/?limit=148")
          .then(function (a) {
            return a.json();
          })
          .then(function (b) {
            b.results.forEach(function (b) {
              a({ name: b.name, detailsUrl: b.url });
            });
          })
          .catch(function (a) {
            console.error(a);
          });
      },
      loadDetails: d,
      showDetails: c,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (a) {
    pokemonRepository.addListItem(a);
  });
});
