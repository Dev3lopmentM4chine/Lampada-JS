let img = document.getElementById('imagem')
let turnOn = document.getElementById('turnon')
let turnOff = document.getElementById('turnoff')
turnOn.addEventListener('click', on)
turnOff.addEventListener('click', off)
img.addEventListener('mouseenter', entrou)
img.addEventListener('mouseout', saiu)
img.addEventListener('dblclick', quebrou)

function broken(){
    return img.src.indexOf('quebrada') > -1
}
function quebrou(){
    img.src = 'assets/image/quebrada.jpg'
}
function entrou(){
    if(!broken()){
        img.src = 'assets/image/ligada.jpg'
    }
}
function saiu(){
    if(!broken()){
        img.src = 'assets/image/desligada.jpg'
    }
}
function on(){
    if(!broken()){
        img.src = 'assets/image/ligada.jpg'
    }
}
function off(){
    if(!broken()){
        img.src = 'assets/image/desligada.jpg'
    }
}