//api from tmdb

const api = "api_key=738501b22fbaa27c3cbc6d7ac6ed3b07";

//bse url of site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

//request for movies data

const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanticMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

//used to turcunate

function truncate(str, n){
    return str?.length > n? str.substr(0, n-1)  + "..." : str;
}

//banner

fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())      //data jo aayega vo json format m data aajayega convert hookr

    .then((data) => {
        
        //every refresh the movie will be change

    const setMovie = 
        data.results[Math.floor(Math.random() * data.results.length - 1)];          //refresh k liye.... random number waala movie genrate krenge and floor use kiya so that decimal waala roundoff hookr integer value m aajaye 

    
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");

    banner.style.backgroundImage = 
        "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
    });

//movies rows
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        //row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {                                //for loop until page fills
            const poster = document.createElement("img");
            poster.className = "row_postersLarge";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//top trend
fetch(requests.fetchTrending)
    .then((res) => res.json)

    .then((data) =>{
        const headrow = document.getElementById("headrow");
        const row = document.getElementById("div");

        row.className = "row";
        headrow.append(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.append(title);
        
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {               //loop
            const poster = document.createElement("img");
            poster.className = "row_postersLarge";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//action movies
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {

        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_postersLarge";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//romantic
fetch(requests.fetchRomanticMovies)
    .then((res) => res.json())
    .then((data) => {

        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Romantic Movies";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_postersLarge";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {

        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_postersLarge";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//horror 

    fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {

        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_postersLarge";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//documentries
fetch(requests.fetchDocumentries)
    .then((res) => res.json())
    .then((data) => {

        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Documentries";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_postersLarge";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });