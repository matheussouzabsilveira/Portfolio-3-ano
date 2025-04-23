

function menu(){
    let aside = document.querySelector("#aside")

    let currentLeft = window.getComputedStyle(aside).left;

    alert(currentLeft)

    if (currentLeft === "-300px") {
        aside.style.left = "0px";
    } else if (currentLeft === "0px") {
        aside.style.left = "-300px";
    }

}

function asideOff(){
    let larguraTela = window.innerWidth
    let aside = document.querySelector("#aside")
    if(larguraTela > 720){
        aside.style.left = "-300px"
    }
}

function card5(){
    window.location.href = "tecnico.html"
}

function card4(){
    window.location.href = "humanas.html"
}

function card3(){
    window.location.href = "mtm.html"
}

function card2(){
    window.location.href = "linguagens.html"
}

function card1(){
    window.location.href = "ciencias.html"
}