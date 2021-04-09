addMoviesOnPage('generalCollection');

function addMoviesOnPage(collection){
    
    document.querySelectorAll(".card").forEach(e => e.remove());

    
    let allMoviesInLS =  JSON.parse(localStorage.getItem(collection));
    
    
    if(allMoviesInLS!=null){
        for(let i=0; i<allMoviesInLS.length; i++) addMovieOnPage(allMoviesInLS[i]);
    }
}

function addMovieOnPage(movie){

    
    let {id, titleMovie, country, genre, director1, age, photo, date} = movie;
    
    let containerMain = document.getElementById("main");

    let cardMovie = document.createElement('div');
    cardMovie.setAttribute("class", "card");
    cardMovie.id = "card";

    let movieTitle = document.createElement('p');
    movieTitle.setAttribute("class", "movieTitle");
    movieTitle.textContent = titleMovie;

    let cardMovieRow = document.createElement('div');
    cardMovieRow.setAttribute("class", "card_row");

    let movieInform = document.createElement('div');
    movieInform.setAttribute("class", "inform");


 
    
    let movieImg = document.createElement('div');
    movieImg.setAttribute("class", "movieImg");

    let img = document.createElement('img');
    img.setAttribute("class", "img");
    img.src = photo;

    movieImg.appendChild(img);

    


    let movieInformRowTitle = document.createElement('div');
    movieInformRowTitle.setAttribute("class", "inform_row");

    let movieParamTitle = document.createElement('pre');
    movieParamTitle.setAttribute("class", "param");
    movieParamTitle.textContent = "Название: ";

    let movieDescriptionTitle = document.createElement('p');
    movieDescriptionTitle.setAttribute("class", "desc");
    movieDescriptionTitle.textContent = titleMovie;

    movieInformRowTitle.appendChild(movieParamTitle);
    movieInformRowTitle.appendChild(movieDescriptionTitle); 

   
    


    let movieInformRowCountry = document.createElement('div');
    movieInformRowCountry.setAttribute("class", "inform_row");

    let movieParamCountry = document.createElement('pre');
    movieParamCountry.setAttribute("class", "param");
    movieParamCountry.textContent = "Страна: ";

    let movieDescriptionCountry = document.createElement('p');
    movieDescriptionCountry.setAttribute("class", "desc");
    movieDescriptionCountry.textContent = country;

    movieInformRowCountry.appendChild(movieParamCountry);
    movieInformRowCountry.appendChild(movieDescriptionCountry); 

 
    


    let movieInformRowGenre = document.createElement('div');
    movieInformRowGenre.setAttribute("class", "inform_row");

    let movieParamGenre = document.createElement('pre');
    movieParamGenre.setAttribute("class", "param");
    movieParamGenre.textContent = "Жанр: ";

    let movieDescriptionGenre = document.createElement('p');
    movieDescriptionGenre.setAttribute("class", "desc");
    movieDescriptionGenre.textContent = genre;

    movieInformRowGenre.appendChild(movieParamGenre);
    movieInformRowGenre.appendChild(movieDescriptionGenre);


    


    let movieInformRowDirector = document.createElement('div');
    movieInformRowDirector.setAttribute("class", "inform_row");

    let movieParamDirector = document.createElement('pre');
    movieParamDirector.setAttribute("class", "param");
    movieParamDirector.textContent = "Режиссер: ";

    let movieDescriptionDirector = document.createElement('p');
    movieDescriptionDirector.setAttribute("class", "desc");
    movieDescriptionDirector.textContent = director1;

    movieInformRowDirector.appendChild(movieParamDirector);
    movieInformRowDirector.appendChild(movieDescriptionDirector);

 


    


    let movieInformRowAge = document.createElement('div');
    movieInformRowAge.setAttribute("class", "inform_row");

    let movieParamAge = document.createElement('pre');
    movieParamAge.setAttribute("class", "param");
    movieParamAge.textContent = "Для зрителей старше: ";

    let movieDescriptionAge = document.createElement('p');
    movieDescriptionAge.setAttribute("class", "desc");
    movieDescriptionAge.textContent = age;

    movieInformRowAge.appendChild(movieParamAge);
    movieInformRowAge.appendChild(movieDescriptionAge);



    let movieInformRowDate = document.createElement('div');
    movieInformRowDate.setAttribute("class", "inform_row");

    let movieParamDate = document.createElement('pre');
    movieParamDate.setAttribute("class", "param");
    movieParamDate.textContent = "Год выхода: ";

    let movieDescriptionDate = document.createElement('p');
    movieDescriptionDate.setAttribute("class", "desc");
    let dateRes = new Date(date);
    let year;

    year = dateRes.getFullYear();

    movieDescriptionDate.textContent =  year;

    movieInformRowDate.appendChild(movieParamDate);
    movieInformRowDate.appendChild(movieDescriptionDate);

    movieInform.appendChild(movieInformRowTitle);
    movieInform.appendChild(movieInformRowCountry);
    movieInform.appendChild(movieInformRowGenre);
    movieInform.appendChild(movieInformRowDirector);
    movieInform.appendChild(movieInformRowAge);
    movieInform.appendChild(movieInformRowDate);


    cardMovieRow.appendChild(movieInform);
    cardMovieRow.appendChild(movieImg);


    cardMovie.appendChild(movieTitle);
    cardMovie.appendChild(cardMovieRow);

    containerMain.appendChild(cardMovie);
}






