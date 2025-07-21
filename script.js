const botonGenerar = document.getElementById('botonGenerar')
const input = document.getElementById('inputContraseña')
const longitudContraseña = document.getElementById('longitudContraseña')
const range = document.getElementById('range')

let letraRandom = 'abcdefghijklmnopqrstuvwxyz123456789!#$%&/()?¡{}+[]'
let numeroRandom = 1

function sincronizarInputs(e) {
    const value = e.target.value
    longitudContraseña.value = value
    range.value = value
}

longitudContraseña.addEventListener('input', sincronizarInputs)
range.addEventListener('input', sincronizarInputs)

function obtenerContraseña() {
    let contraseña = ""
    for (let i = 0; i < longitudContraseña.value; i++) {
        indiceLetra = Math.floor(Math.random() * letraRandom.length)
        contraseña += letraRandom[indiceLetra]
    }

    return contraseña
}



botonGenerar.addEventListener('click', function (e) {
    input.value = obtenerContraseña()
})