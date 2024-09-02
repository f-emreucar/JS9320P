let characters = [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      homeworld: "Rodia",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ];
  
  const characterDiv = document.getElementById("galaxy");
  const toggleButton = document.getElementById("toggleButton");
  const radioFilterHtml = document.getElementById("filter-characters");
  const filteredCharacter = document.getElementById("filteredCharacters");
  
  let charactersRender = false;
  
  function toggleRender() {
    createInputFilter();
    if (charactersRender) {
      characterDiv.innerHTML = "";
      charactersRender = false;
      toggleButton.textContent = "Starwars Karakterleri Göster";
      radioFilterHtml.innerHTML = "";
    } else {
      characters.forEach((karakter) => {
        characterDiv.innerHTML += `<div class="col-lg-4 col-sm-6 mb-5"  data-id="${karakter.homeworld}">
        <div class="card text-white bg-dark border-light" style="width: 18rem">
          <img src="${karakter.pic}" class="card-img-top" alt="" />
          <div class="card-body">
            <p class="card-text">
              ${karakter.name}
            </p>
          <p class="card-text">
              ${karakter.homeworld}
            </p>
          </div>
        </div>
      </div>`;
        charactersRender = true;
      });
      toggleButton.textContent = "Starwars Karakterleri Gizle";
    }
  }


// 
const characterHomeWorldData = characters.map(
    (character) => character.homeworld
  );
  
  const uniqueHomeWorld = [...new Set(characterHomeWorldData)];
  
  function createInputFilter() {
    radioFilterHtml.innerHTML = "";
    uniqueHomeWorld.forEach((homeworld) => {
      radioFilterHtml.innerHTML += `
             <div class="form-check mb-4 col-lg-3 col-md-6 col-sm-12">
            <input type="radio" class="form-check-input" value="${homeworld}" name="exampleRadioInput">
            <label for="" class="form-check-label text-white fs-6">${homeworld}</label>
          </div>
      `;
    });
  }
  
  let filteredHomeWorld;
  function filterCharacters(homeworldId) {
    filteredHomeWorld = characters.filter(
      (character) => character.homeworld == homeworldId
    );
    characterDiv.innerHTML = filteredHomeWorld.map(
      (character) =>
        `<div class="col-lg-4 col-sm-6 mb-5" data-id="${character.homeworld}">
        <div class="card text-white bg-dark border-light" style="width: 18rem" >
          <img src="${character.pic}" class="card-img-top" alt="" />
          <div class="card-body">
            <p class="card-text">
              ${character.name}
            </p>
          <p class="card-text">
              ${character.homeworld}
           </p>
          </div>
        </div>
      </div>`
    );
  }
  radioFilterHtml.addEventListener("change", (radio) => {
    if (radio.target.name == "exampleRadioInput") {
      const homeworldId = radio.target.value;
      filterCharacters(homeworldId);
    }
  });
  





