
//COPIAR

function copiar (){
    const botonCopiar = document.getElementById("boton-copiar");
    var textoEncriptado = document.getElementById("mensaje-en-des");

    botonCopiar.addEventListener("click", e =>{
        textoEncriptado.select();
        document.execCommand("copy");
        botonCopiar.value="Copiado ✔"
    });
};

// ENCRIPTADOR

function encriptar(){
    var texto = document.getElementById("texto").value;
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parafoMensaje = document.getElementById("parrafo-mensaje");
    var muñeco = document.getElementById("muñeco");
    var botonCopiar = document.getElementById("boton-copiar");
    
    var textoEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufast");

    if (texto.length != 0){
        document.getElementById("mensaje-en-des").value = textoEncriptado;
        document.getElementById("mensaje-en-des").style.visibility="visible";
        document.getElementById("boton-copiar").style.visibility="visible";
        tituloMensaje.textContent = "";
        parafoMensaje.textContent = "";
        muñeco.style.visibility="hidden";
    } else {
        alert("hola");
    };
};

//DESENCRIPTADOR

function desencriptar(){
    var texto = document.getElementById("texto").value;
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parafoMensaje = document.getElementById("parrafo-mensaje");
    var muñeco = document.getElementById("muñeco");
    var botonCopiar = document.getElementById("boton-copiar");

    const textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufast/gi, "u")

    if (texto.length != 0){
        document.getElementById("mensaje-en-des").value = textoDesencriptado;
        document.getElementById("mensaje-en-des").value.visibility=visible;
        botonCopiar.style.display="";
        tituloMensaje.textContent = "";
        parafoMensaje.textContent = "";
        muñeco.style.visibility="hidden";
    } else {
        alert("hola");
    };
};

