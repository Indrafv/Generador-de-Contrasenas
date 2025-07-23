const botonGenerar = document.getElementById('botonGenerar')
const input = document.getElementById('inputContraseña')
const longitudContraseña = document.getElementById('longitudContraseña')
const range = document.getElementById('range')
const ChkMayusculas = document.getElementById('ChkMayusculas')
const ChkMinusculas = document.getElementById('ChkMinusculas')
const ChkNumeros = document.getElementById('ChkNumeros')
const ChkSimbolos = document.getElementById('ChkSimbolos')


function atributosContraseña() {
    let caracteres = '';

    if (ChkMinusculas.checked) {
        caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (ChkMayusculas.checked) {
        caracteres += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    }
    if (ChkNumeros.checked) {
        caracteres += '123456789';
    }
    if (ChkSimbolos.checked) {
        caracteres += '!#$%&/()?¡{}+[]';
    }

    return caracteres;
}

function sincronizarInputs(e) {
    const value = e.target.value;
    longitudContraseña.value = value;
    range.value = value;
}

longitudContraseña.addEventListener('input', sincronizarInputs)
range.addEventListener('input', sincronizarInputs)

function obtenerContraseña() {
    const caracteres = atributosContraseña(); // Aquí sí usamos el valor retornado

    if (caracteres.length === 0) {
        alert("Debes seleccionar al menos una opción");
        return "";
    }

    let contraseña = "";
    for (let i = 0; i < longitudContraseña.value; i++) {
        const indiceLetra = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceLetra];
    }

    return contraseña;
}

botonGenerar.addEventListener('click', function () {
    input.value = obtenerContraseña();
});
