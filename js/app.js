const galleta = document.querySelector("#imagengalleta")
const contadortxt = document.querySelector("#contador")
const btnboton = document.querySelector("#boton")
const nivel = document.querySelector("#nivel")

let contador = 0
let n = 0
// comprobar si tengo el iten en otro navegador
if (localStorage.getItem("clicks")) {
    let contador = localStorage.getItem('clicks')
}
if(localStorage.getItem("nivel")){
    n = localStorage.getItem("nivel")
}
// leer los click en el storage
contadortxt.innerHTML = `Clicks: ${contador}`
nivel.innerHTML = `nivel ${n}`

// le sumamos uno a contador
galleta.addEventListener('click', () =>{
contador++
// guardar el valor de contador en localstorage
localStorage.setItem("clicks", contador)

// mostrar contador en pantalla

contadortxt.innerHTML = `Clicks: ${contador}`
// agrandar la galleta
galleta.classList.add('grande')

// quitar la clase grande

setTimeout(() => {
    galleta.classList.remove('grande')
}, 100);
// comprobar si ha subido de nivel
// cambio de nivel cada dienclicks
if((contador % 10) === 0){
    galleta.classList.add('giro')
    n = contador / 10 
    n = parseInt(n)
    nivel.innerHTML = `nivel ${n}`

    localStorage.setItem("nivel", n)
}

// quitar la clase grande

setTimeout(()=>{
    galleta.classList.remove('grnde')
    galleta.classList.remove('giro')
}, 100)
})

btnboton.addEventListener('click',()=>{
    contador = 0
    n = 0
    contadortxt.innerHTML = `Clicks: ${contador}`
    nivel.innerHTML =`nivel ${n}`
    localStorage.setItem("clicks", contador)
})

