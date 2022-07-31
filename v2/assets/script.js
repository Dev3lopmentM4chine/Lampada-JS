//SELECIONANDO ELEMENTOS
const img = document.getElementById('imagem')
const btn = document.getElementById('turnOn')

//EVENTOS
img.addEventListener('mouseover', turnOn)
img.addEventListener('mouseout', turnOff)
img.addEventListener('dblclick', broken)
btn.addEventListener('click', function(){
    if(btn.innerHTML == 'Ligar'){
        turnOn()
    }else{
        turnOff()
    }
})

//FUNÇÕES
function turnOn(){
    //Liga a lâmpada caso ela não esteja quebrada.
    if(!isbroken()){
        img.src = 'assets/image/ligada.jpg'
        btn.innerHTML = 'Desligar'
    }else{
        btn.innerHTML = 'Desligar'
    }
}
function turnOff(){
    //Apaga a lâmpada se ela não estiver quebrada.
    if(!isbroken()){
        img.src = 'assets/image/desligada.jpg'
        btn.innerHTML = 'Ligar'
    }else{
        btn.innerHTML = 'Ligar'
    }
}
function isturnOn(){
    //Verifica se a lâmpada esta ligada.
    return img.src.indexOf('desligada') > -1
}
function isbroken(){
    //Verifica se a lâmpada esta quebrada.
    return img.src.indexOf('quebrada') > -1
}
function broken(){
    //Quebrar a lâmpada.
    img.src = 'assets/image/quebrada.jpg'
}
