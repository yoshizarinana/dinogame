
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {

    if(character.classList == "animate"){
        return;
    }

    character.classList.add("animate");

    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

setInterval(function(){

    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    let blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 90 && blockLeft > 40 && characterTop > 130){

        block.style.animation = "none";

        alert("Game Over! Score: " + counter);

        counter = 0;

        block.style.animation = "block 1s infinite linear";
    }

    else{
        if(blockLeft < 5 && blockLeft > -5){
            counter += 500;
        }

        document.getElementById("scoreSpan").innerHTML = counter;
    }

},10);