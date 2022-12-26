//VARIABLES EVENT
const btn_en = document.querySelector("#encriptar");
const btn_des = document.querySelector("#desencriptar");
const btn_cop = document.querySelector("#copiar");

//EVENTOS
btn_en.addEventListener("click", encriptar);
btn_des.addEventListener("click", desencriptar);
btn_cop.addEventListener("click", copiar)

//VARIABLES
const respuesta = document.getElementById("resultado");
const imagen = document.getElementById("munieco");
const mensaje = document.getElementById("mensaje");

//FUNCIONES

function encriptar(){
    const texto = document.querySelector("#texto").value;
    var encriptado = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat"); 
    if (validarTexto(texto)) {
        respuesta.textContent = encriptado;
        imagen.style.display = "none";
        mensaje.style.display = "none";
        respuesta.style.display = "block";
        btn_cop.style.display = "flex";
    } 
}

function desencriptar(){
    const texto = document.querySelector("#texto").value;
    var desencriptado = texto.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    if (validarTexto(texto)) {
        respuesta.textContent = desencriptado;
        imagen.style.display = "none";
        mensaje.style.display = "none";
        respuesta.style.display = "block";
        btn_cop.style.display = "flex";
    }
}

function validarTexto(e){
    if (/^[a-z\u00f1\s]+$/.test(e) && e != null && e.length > 0 && e.trim() !== "") {
        return true;
    } else {
        imagen.style.display = "block";
        mensaje.style.display = "block";
        respuesta.style.display = "none";
        btn_cop.style.display = "none";
        alert("[ERROR] Debe utilizar solo letras minusculas");
    }
}

function copiar(){
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("resultado").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}