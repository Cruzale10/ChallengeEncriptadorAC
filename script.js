document.querySelector('.btn-encriptar').addEventListener('click', function() {
    const inputTexto = document.querySelector('.cajatexto').value;
    const textoEncriptado = encriptarTexto(inputTexto);
    mostrarResultado(textoEncriptado);
});

document.querySelector('.btn-desencriptar').addEventListener('click', function() {
    const inputTexto = document.querySelector('.cajatexto').value;
    const textoDesencriptado = desencriptarTexto(inputTexto);
    mostrarResultado(textoDesencriptado);
});

document.querySelector('.btn-copiar').addEventListener('click', function() {
    copiarTexto();
});

function encriptarTexto(texto) {
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptarTexto(texto) {
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}

function mostrarResultado(resultado) {
    const textoResultado = document.querySelector('.Texto-resultado');
    textoResultado.textContent = resultado;

    // Oculta la sección de "Ningún mensaje fue encontrado" y muestra el resultado
    document.querySelector('.Seccion2 .Contenedor-parrafo').style.display = 'none';
    textoResultado.style.display = 'block';

    // Muestra el botón de copiar
    document.querySelector('.btn-copiar').style.display = 'block';
}

function copiarTexto() {
    const textoResultado = document.querySelector('.Texto-resultado').textContent;
    
    // Crea un elemento temporal para seleccionar y copiar el texto
    const tempInput = document.createElement('textarea');
    tempInput.value = textoResultado;
    document.body.appendChild(tempInput);

    // Selecciona el texto y lo copia al portapapeles
    tempInput.select();
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(tempInput);

    // Opcional: Muestra una alerta o un mensaje indicando que el texto ha sido copiado
    alert('Texto copiado al portapapeles');
}
