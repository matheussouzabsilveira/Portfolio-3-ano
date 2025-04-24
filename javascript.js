

function menu(){
    let aside = document.querySelector("#aside").classList.toggle("aside-animation")
}

function asideOff(){
    let larguraTela = window.innerWidth
    let aside = document.querySelector("#aside")
    if(larguraTela > 720){
        aside.classList.remove("aside-animation")
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