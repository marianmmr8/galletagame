const galleta = document.querySelector("#imagengalleta")
const contadortxt = document.querySelector("#contador")
const btnboton = document.querySelector("#boton")

let contador = 0
// comprobar si tengo el iten en otro navegador
if (localStorage.getItem("clicks")) {
    let contador = localStorage.getItem('clicks')
}
// leer los click en el storage
contadortxt.innerHTML = `Clicks: ${contador}`

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
}

// quitar la clase grande

setTimeout(()=>{
    galleta.classList.remove('grnde')
    galleta.classList.remove('giro')
}, 100)
})

btnboton.addEventListener('click',()=>{
    contador = 0
    contadortxt.innerHTML = `Clicks: ${contador}`
    localStorage.setItem("clicks", contador)
})

