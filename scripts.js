const boton1 = document.getElementById("encriptar");
const boton2 = document.getElementById("desencriptar");
const boton3 = document.getElementById("copiar");
const textcopiar = document.getElementById("textencrip");

boton1.addEventListener("click", Encriptar);
boton2.addEventListener("click", Desencriptar);
boton3.addEventListener("click", copiarAlPortapapeles);

function Encriptar() {
    document.getElementById("imagen2").style.display = "none";
    document.getElementById("frame5").style.display = "none";
    document.getElementById("textarea2").style.display = "flex";
    document.getElementById("boton3").style.display = "flex";

    const a = "ai";
    const e = "enter";
    const i = "imes";
    const o = "ober";
    const u = "ufat";

    var cadenaOrigen = document.getElementById("encripdescrip").value;
    let cadenaNueva = "";
    let Ncadena = cadenaOrigen.length;
    

    for(let j=0; j < Ncadena; j++){
        let valor = cadenaOrigen[j];
        if(valor == "a"){
            cadenaNueva = cadenaNueva + a;
        }else if(valor == "e"){
            cadenaNueva = cadenaNueva + e;
        }else if(valor == "i"){
            cadenaNueva = cadenaNueva + i;
        }else if(valor == "o"){
            cadenaNueva = cadenaNueva + o;
        }else if(valor == "u"){
            cadenaNueva = cadenaNueva + u;
        }else{
            cadenaNueva = cadenaNueva + valor;
        }
    }
    textcopiar.value = cadenaNueva;
}

function Desencriptar() {
    
    document.getElementById("imagen2").style.display = "none";
    document.getElementById("frame5").style.display = "none";
    document.getElementById("textarea2").style.display = "flex";
    document.getElementById("boton3").style.display = "flex";
    
    const ai = "a";
    const enter = "e";
    const imes = "i";
    const ober = "o";
    const ufat = "u";

    var cadenaOrigen = document.getElementById("encripdescrip").value;
    let cadenaNueva = "";
    let Ncadena = cadenaOrigen.length;

    for(let j=0; j < Ncadena; j++){
        let valor = cadenaOrigen[j];
        if(valor == "a"){
            cadenaNueva = cadenaNueva + ai;
            j++;
        }else if(valor == "e"){
            cadenaNueva = cadenaNueva + enter;
            j = j + 4;
        }else if(valor == "i"){
            cadenaNueva = cadenaNueva + imes;
            j = j + 3;
        }else if(valor == "o"){
            cadenaNueva = cadenaNueva + ober;
            j = j + 3;
        }else if(valor == "u"){
            cadenaNueva = cadenaNueva + ufat;
            j = j + 3;
        }else{
            cadenaNueva = cadenaNueva + valor;
        }
    }
    textcopiar.value = cadenaNueva;
}

function copiarAlPortapapeles() {
    textcopiar.select();
    document.execCommand('copy');
}