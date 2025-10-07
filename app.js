"use strict";

// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

// Den SMARTE måde - funktion der både genererer HTML og tilføjer til DOM!
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");
  const actorsString = movieObject.actors.join(", ");
  const director = movieObject.director || movieObject.directors || ", ";

  const movieHTML = `
    <article class="movie-card" tabindex="0" data-description="${movieObject.description}">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${director}</p>
      </div>
    </article>
  `;

  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet fra JSON!`);

  const newCard = movieListContainer.lastElementChild;

  newCard.addEventListener("click", function () {
    console.log(`🎬 Klik på: "${movieObject.title}"`);
    showMovieDetails(movieObject);
  });

  // Tilføj også keyboard event til displayMovie:
  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showMovieDetails(movie);
    }
  });
  
}

/* //#region Java
// ========== MOVIE APP - SESSION 2 ==========
// Movie objects created from HTML data

console.log("✅ Movie objects loaded and ready for DOM manipulation!");

// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

// Den SMARTE måde - funktion der både genererer HTML og tilføjer til DOM!
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  // Tilføj direkte til DOM
  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet til DOM!`);
}

// Ryd container først
movieListContainer.innerHTML = "";

//Slet alt over??

// I stedet for mange separate variabler, definer alt data direkte i arrayet!
// Sådan gør man i virkeligheden!!
const movies = [
  {
    id: 1,
    title: "Barbie",
    year: 2023,
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 7.0,
    director: "Greta Gerwig",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    description:
      "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
  }, 
  // Hver film er 1 element!
  {
    id: 2,
    title: "Dune",
    year: 2021,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.0,
    director: "Denis Villeneuve",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    description:
      "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    year: 2024,
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.7,
    director: "Denis Villeneuve",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: ["Action", "Sci-fi"],
    rating: 7.8,
    directors: "Daniel Kwan and Daniel Scheinert aka Daniels",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    actors: [
      "Michelle Yeoh",
      "Ke Huy Quan",
      "Jamie Lee Kurtis",
      "Stephanie Hsu",
    ],
    description:
      "A hilarious and big-hearted sci-fi action adventure about an exhausted Chinese American woman (Michelle Yeoh) who can't seem to finish her taxes.",
  },
  {
    id: 5,
    title: "Fight Club",
    year: 1999,
    genre: ["Action", "Mystery", "Thriller/drama"],
    rating: 8.8,
    director: "David Fincher",
    image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    description:
      "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8,
    director: "Robert Zemeckis",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    actors: ["Tom Hanks", "Robin Wright"],
    description:
      "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
  },
  {
    id: 7,
    title: "Good Fellas",
    year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    rating: 8.7,
    director: "Martin Scorsese",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
    actors: ["Ray Liotta", "Robert De Niro"],
    description:
      "Henry Hill, a poor Irish-Italian growing up in 1950s New York City, rises through the ranks of his neighborhood's organized crime branch; he ends up in the FBI's witness protection program after testifying against his former partners.",
  },
  {
    id: 8,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Adventure", "Sci-fi"],
    rating: 8.8,
    director: "Christopher Nolan",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    actors: ["Leonardo DiCaprio", "Cillian Murphy"],
    description:
      "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.",
  }
];

console.log("Movies array:", movies);
console.log("Antal movies:", movies.length);

// Nu kan vi tilgå movies via array indeks
console.log("Første movie:", movies[0]); // Barbie
console.log("Anden movie:", movies[1]); // Dune
console.log("Sidste movie:", movies[movies.length - 1]); // Inception

// Test displayMovie med array elementer
movieListContainer.innerHTML = ""; // Ryd først

// Tilføj kun de første 3 movies via array indeks
displayMovie(movies[0]); // Barbie
displayMovie(movies[1]); // Dune
displayMovie(movies[2]); // Dune: Part Two

console.log("3 movies tilføjet via array indeks!");

movieListContainer.innerHTML = ""; // Rydder

// For-of loop - går gennem hver movie i arrayet - const element of iterable
for (const movie of movies) {
  displayMovie(movie);
  console.log(`Tilføjet movie: ${movie.title}`);
}

console.log("Alle movies tilføjet via for-of loop! 🎉");


// Den ultimative funktion - vis alle movies i ét kald!
function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  // Loop gennem alle movies og vis dem (bruger for-of loop!)
  for (const movie of movieArray) {
    displayMovie(movie);
    console.log(`${movie.title} displayed`);
  }

  console.log(`🎉 ${movieArray.length} movies displayed successfully!`);
}

// Test den ultimative funktion
displayMovies(movies);

// Opret et nyt movie object
const RACEFavoriteMovie = {
  id: 9,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  rating: 8.7,
  directors: "Lana & Lilly Wachowski",
  image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  description:
    "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
};

// Tilføj til array og vis alle
movies.push(RACEFavoriteMovie);
displayMovies(movies);

console.log(`Nu vises ${movies.length} movies!`);

// ========== ASYNC MOVIE LOADER ==========

async function loadMovies() {
  console.log("🚀 Starter hentning af movie data...");

  // Vent på at få response fra serveren
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");

  console.log("📡 Response modtaget:", response);
  // Response (som set i console)
  // status: 200,        // ← HTTP status (200 = success)
  // ok: true,           // ← Alt gik godt
  // url: "https://...", // ← URL der blev hentet fra

  // Vent på at konvertere response til JavaScript objekter
  const moviesFromJSON = await response.json();

  console.log("🎬 Movies fra JSON:", moviesFromJSON);
  console.log("📊 Antal movies:", moviesFromJSON.length);
  console.log("🎭 Første movie:", moviesFromJSON[0]);

  return moviesFromJSON;
}

// Kald funktionen
loadMovies();

function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet fra JSON!`);
}

// Test din eksisterende funktion med JSON data
async function testDisplayMovie() {
  console.log("🧪 Tester displayMovie med JSON data...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const moviesFromJSON = await response.json();

  // Vis første movie som test
  displayMovie(moviesFromJSON[0]);
  console.log("✅ Test fuldført - det virkede!");
}

// Kør testen
testDisplayMovie();


//#endregion */

//#region Display all movies
// ========== DISPLAY ALL MOVIES ==========

function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  console.log(`🎬 Viser ${movieArray.length} movies...`);

  // Loop gennem alle movies
  for (const movie of movieArray) {
    displayMovie(movie); // Samme funktion til alt!
  }

  console.log(`🎉 ${movieArray.length} movies vist successfully!`);
}
//#endregion

// ========== MAIN ASYNC FUNCTION ==========

async function loadMovies() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const moviesFromJSON = await response.json();

  console.log("📊 JSON data modtaget:", moviesFromJSON.length, "movies");

  // Vis alle movies fra JSON!//
  displayMovies(moviesFromJSON);
}

// Start processen
loadMovies();

// Del 3
// #0: Listen for page load
window.addEventListener("load", initApp);

let allMovies = []; // Global array to hold all movies

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies(); // Fetch and display movies
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
}

// #2: Fetch movies from JSON and display them
async function getMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();
  populateGenreDropdown();
  console.log("📊 JSON data modtaget:", allMovies.length, "movies");
  displayMovies(allMovies);
}

// #3: Render all movies in the grid
function displayMovies(movies) {
  console.log(`🎬 Viser ${movies.length} movies`);
  document.querySelector("#movie-list").innerHTML = "";
  for (const movie of movies) {
    displayMovie(movie);
  }
}

/*//#region 
// #5: Søg i movie titler
function searchMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();

  const filteredMovies = allMovies.filter(movie => {
    return movie.title.toLowerCase().includes(searchValue);
  });

  displayMovies(filteredMovies);
}
//#endregion*/

// #5: Kombineret søgning og genre filtrering
function filterMovies() {
  const searchValue = document
    .querySelector("#search-input")
    .value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  // Start med alle movies
  let filteredMovies = allMovies;

  // TRIN 1: Filtrer på søgetekst
  if (searchValue) {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // TRIN 2: Filtrer på genre
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.genre.includes(genreValue);
    });
  }

  // TRIN 3: Sorter resultater
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year); // Nyeste først
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating); // Højeste først
  }

  displayMovies(filteredMovies);
}

// #6: Udfyld genre-dropdown med alle unikke genrer
function populateGenreDropdown() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  // Fjern gamle options undtagen 'Alle genrer'
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  const sortedGenres = Array.from(genres).sort();
  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }
}

// #7: Vis movie detaljer (midlertidig løsning med alert)
function showMovieDetails(movie) {
  console.log("📊 Viser detaljer for:", movie.title);

  // Vis i alert (midlertidig løsning)
  const movieInfo = `🎬 ${movie.title} (${movie.year})
🎭 ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎯 Instruktør: ${movie.director}
👥 Skuespillere: ${movie.actors.join(", ")}

📝 ${movie.description}`;

  alert(movieInfo);

  // TODO: Næste gang laver vi modal dialog!
}



