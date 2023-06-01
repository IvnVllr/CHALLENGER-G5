// IGNORAR MAYUSCULAS Y ACENTUACIÓN
function convertirMinusculas(){
    let textarea = document.getElementById("texto");
    textarea.value = textarea.value.toLowerCase();
};

function ignorarAcentuacion(){
    let textarea = document.getElementById("texto");
    let textoSinAcentos = textarea.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    textarea.value = textoSinAcentos;
};

//COPIAR

function copiar (){
    const botonCopiar = document.getElementById("boton-copiar");
    var textoEncriptado = document.getElementById("mensaje-en-des");

    botonCopiar.addEventListener("click", e =>{
        textoEncriptado.select();
        document.execCommand("copy");
        botonCopiar.value="Copiado ✔"
        botonCopiar.style.background="#449e48";
        botonCopiar.style.color="white";
        botonCopiar.style.border="1px solid #3db143";
        setTimeout(() => {
            botonCopiar.value="Copiar"
            botonCopiar.style.background="";
            botonCopiar.style.color="";
            botonCopiar.style.border="";
          }, 1000);
    });
};

// ENCRIPTADOR

function encriptar(){
    var texto = document.getElementById("texto").value;
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parafoMensaje = document.getElementById("parrafo-mensaje");
    var muñeco = document.getElementById("muñeco");
    var textoEncriptar = document.getElementById("mensaje-en-des");
    var botonCopiar = document.getElementById("boton-copiar");
    
    var textoEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufast");

    if (texto.length != 0){
        document.getElementById("mensaje-en-des").value = textoEncriptado;
        textoEncriptar.style.visibility="visible";
        botonCopiar.style.visibility="visible";
        tituloMensaje.textContent = "";
        parafoMensaje.textContent = "";
        muñeco.style.visibility="hidden";
    } else {
        alert("Debes ingresar un texto primero");
    };
};

//DESENCRIPTADOR

function desencriptar(){
    var texto = document.getElementById("texto").value;
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parafoMensaje = document.getElementById("parrafo-mensaje");
    var muñeco = document.getElementById("muñeco");
    var textoEncriptar = document.getElementById("mensaje-en-des");
    var botonCopiar = document.getElementById("boton-copiar");

    const textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufast/gi, "u")

    if (texto.length != 0){
        document.getElementById("mensaje-en-des").value = textoDesencriptado;
        textoEncriptar.visibility="visible";
        botonCopiar.visibility="visible";
        botonCopiar.style.display="";
        tituloMensaje.textContent = "";
        parafoMensaje.textContent = "";
        muñeco.style.visibility="hidden";
    } else {
        alert("Debes ingresar un texto primero");
    };
};

//cambiar de color Botones encrip y descr

function cambiarcolor(){
    const botonEncriptar = document.getElementById("boton-encriptar");
    botonEncriptar.addEventListener("click", e =>{
        botonEncriptar.value = "Encriptado ✔"
        botonEncriptar.style.background="#449e48";
        botonEncriptar.style.color="white";
        botonEncriptar.style.border="1px solid #3db143";
        setTimeout(() => {
            botonEncriptar.value="Encriptar"
            botonEncriptar.style.background="";
            botonEncriptar.style.color="";
            botonEncriptar.style.border="";
          }, 1000);
    });

    const botonDesencriptar = document.getElementById("boton-desencriptar");
    botonDesencriptar.addEventListener("click", e =>{
        botonDesencriptar.value = "Desencriptado ✔"
        botonDesencriptar.style.background="#449e48";
        botonDesencriptar.style.color="white";
        botonDesencriptar.style.border="1px solid #3db143";
        setTimeout(() => {
            botonDesencriptar.value="Desencriptar"
            botonDesencriptar.style.background="";
            botonDesencriptar.style.color="";
            botonDesencriptar.style.border="";
          }, 1000);
    });
}

//FUNCION HACER QUE EL TEXTAREA AUMENTE SI SOBREPASA
// function ajustarAltura(){
//     const texto = document.getElementById("texto");
//     texto.style.height = "auto";
//     texto.style.height = texto.scrollHeight + "px";

//     const textoEncript = document.getElementById("mensaje-en-des");
//     textoEncript.style.height = "auto"
//     textoEncript.style.height = textoEncript.scrollHeight + "px";

//     const contenedor = document.querySelector(".contenedor");
//     contenedor.style.height = contenedor.scrollHeight + "px";

// }
