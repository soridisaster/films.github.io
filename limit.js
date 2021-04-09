let generalCollection = [];

class Movie{
    constructor(){
        
        if(JSON.parse(localStorage.getItem('generalCollection')) != null){
            generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
            this.id = generalCollection[generalCollection.length-1].id + 1;
        }
        else this.id = 0;
        this.titleMovie = document.getElementById("title").value.trim(),
        this.country = document.getElementById("country").value.trim(),
        this.genre = document.getElementById("genre").value.trim(),
        this.director1 = document.getElementById("director").value.trim(), 
        this.age = document.getElementById("age").value, 
        this.photo = document.getElementById("photo").value.trim(),
        this.date = new Date(document.getElementById("year").value.trim())
    }
}


formMovie.addEventListener("submit", sumbitForm);

function sumbitForm(){
    clearDivMessageError();
    if(checkEmptyInput() == false){
        createMovie();
        addMessageSuccess("Фильм добавлен");
    }
    event.preventDefault();
}

function createMovie(){
    let movie = new Movie();

    if(JSON.parse(localStorage.getItem('generalCollection')) != null){
        generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
    }

    generalCollection.push(movie);
    localStorage.setItem('generalCollection', JSON.stringify(generalCollection));
}


function checkEmptyInput(){
    let res = false;

    if(document.getElementById("title").value.trim() == ""){
        addMessageError("Введите Название");
        res = true;
    }
    if(document.getElementById("country").value.trim() == ""){
        addMessageError("Введите Страну");
        res = true;
    }
    if(document.getElementById("genre").value.trim() == ""){
        addMessageError("Введите Жанр");
        res = true;
    }
    if(document.getElementById("director").value.trim() == ""){
        addMessageError("Введите имя Режиссер");
        res = true;
    }
    if(document.getElementById("year").value.trim() == ""){
        addMessageError("Введите дату");
        res = true;
    }
    return res;
}

function addMessageError(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "error");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function addMessageSuccess(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "success");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function clearDivMessageError(){
    let div = document.getElementById('message');

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}