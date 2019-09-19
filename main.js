var input = document.querySelector(".input");
var form = document.querySelector("form");
var txt = document.querySelector(".name");

var so = document.querySelector(".so");

var button = document.querySelector(".sub");
var reset = document.querySelector(".reset");

var list = document.querySelector(".list");

nome = "";
idade = "";
cabelo = "";

input.focus();

//* create var's

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nome == "") {

        nome = input.value;
        txt.innerHTML = "welcome <span>" + nome + "</span>, how old are you?";

        input.value = "";

    } else if (idade == "") {
        idade = input.value;

        var calculo = 2019 - idade;

        txt.innerHTML = "oh, you have <span>" + idade + "</span>, so you were born in <span>" + calculo + "</span>.";

        //* criar um h3 novo

        var para = document.createElement("h3");
        var node = document.createTextNode("What's your hair color?");
        para.appendChild(node);
        txt.appendChild(para);

        if (idade >= 90) {
            txt.innerHTML += " (and you're a bit old :p)"
        }

        input.value = "";

    } else if (cabelo == "") {
        cabelo = input.value;

        txt.innerHTML = "oh, so your hair color's <span>" + cabelo + "</span>, it's beautiful!";

        input.value = "";
        input.focus();

        button.style.display = "block";
        input.style.display = "none";

        //* see all button

        button.addEventListener("click", () => {

            var li_name = document.querySelector(".li-name");
            var li_yo = document.querySelector(".li-yo");
            var li_hair = document.querySelector(".li-hair");

            button.style.display = "none";
            txt.style.display = "none";

            so.style.display = "block";
            reset.style.display = "block";
            list.style.display = "block";


            li_name.innerHTML = "your name is <span>" + nome + "</span>";
            li_yo.innerHTML = "you are <span>" + idade + "</span>";
            li_hair.innerHTML = "and your hair color is <span>" + cabelo + "</span> :))";
        });

        reset.addEventListener("click", () => {
            location.reload();
        })
    }

});