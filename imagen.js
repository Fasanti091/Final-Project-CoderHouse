let redBtn = document.getElementById("rojo");
let blueBtn = document.getElementById("azul");
let greenBtn = document.getElementById("verde");
let greyBtn = document.getElementById("gris");
let yellowBtn = document.getElementById("amarillo");
let blackBtn = document.getElementById("negro");
let imgchange = document.getElementById("imgchange");

redBtn.onclick = function() {
    imgchange.src = "./asset/img/Jumanji-hbo-max.jpg";
}

blueBtn.onclick = function() {
    imgchange.src = "./asset/img/1-peliculas-de-accion-plane.jpg";
}

greenBtn.onclick = function() {
    imgchange.src = "./asset/img/16591757825079.jpg";
}

greyBtn.onclick = function() {
    imgchange.src = "./asset/img/peliculas-de-ciencia-ficcion.png";
}

yellowBtn.onclick = function() {
    imgchange.src = "./asset/img/avatar-uno-de-los-exitos-del-2022-1486569.jpg";
}

blackBtn.onclick = function() {
    imgchange.src = "./asset/img/every-james-cameron-movie-ranked_bxg2.jpg";
}