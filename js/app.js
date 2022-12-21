// const footer = document.querySelector("footer");
// const searchInput = document.querySelector("#search-anime");
// searchInput.addEventListener("keypress", function () {
//   fetch(`https://api.jikan.moe/v4/anime?q=` + searchInput.value)
//     .then((ress) => ress.json())
//     .then((ress) => {
//       showCards(ress);
//       //   Show Footer After API Success
//       footer.style.display = "block";
//     });
// });

// const searchButton = document.querySelector("#search-button");
// searchButton.addEventListener("click", function () {
//   fetch(`https://api.jikan.moe/v4/anime?q=` + searchInput.value)
//     .then((ress) => ress.json())
//     .then((ress) => {
//       showCards(ress);
//       footer.style.display = "block";
//     });
// });

const footer = document.querySelector("footer");
const searchInput = document.querySelector("#search-anime");
const searchButton = document.querySelector("#search-button");
$(searchInput).on("keypress", function () {
  $.ajax({
    url: `https://api.jikan.moe/v4/anime?q=` + searchInput.value,
    success: (ress) => {
      showCards(ress);
      footer.style.display = "block";
    },
    error: (err) => {
      console.error("Terjadi Kesalahan : " + err);
    },
  });
});

$(searchButton).on("click", function () {
  $.ajax({
    url: `https://api.jikan.moe/v4/anime?q=` + searchInput.value,
    success: (ress) => {
      showCards(ress);
      footer.style.display = "block";
    },
    error: (err) => {
      console.error("Terjadi Kesalahan : " + err);
    },
  });
});

function showCards(ress) {
  const animeContainer = document.querySelector(".anime-container");
  let cards = "";
  const animeData = ress.data;
  animeData.map((x) => {
    cards += `<a href="${x.url}" target="_blank"><div class="card">
    <div class="images">
      <img src="${x.images.webp.image_url}" alt=".." />
    </div>
    <div class="title">
      <h1>${x.title}</h1>
    </div>
  </div></a>`;
    animeContainer.innerHTML = cards;
  });
}
