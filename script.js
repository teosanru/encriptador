const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function visibilidad() {
    var x = document.getElementById('ningun');
    if (x.style.visibility !== 'hidden') {
      x.style.visibility = 'hidden';
    }
  }

  function showElem() {
    document.getElementById("img").style.visibility = "visible";
  }

  function hideElem() {
    document.getElementById("img").style.visibility = "hidden";
  }

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    hideElem();
    visibilidad();
    inputTexto.value = "";

  
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if( stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;

    inputTexto.value = "";

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if( stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
     
        var div=document.createElement("div");
        document.body.appendChild(div);
        div.style.fontSize='46px';
        div.innerText="Texto Copiado";
        div.id = 'myDivId';
        div.style.position = 'fixed';
        div.style.top = '400px';
        div.style.left = '800px';
        div.style.width = '280px';
        div.style.height = '60px';
        div.style.backgroundColor = 'blue';
        setTimeout(() => div.style.display="none", 2000);
    
 
    inputTexto.value = "";
    

}

function refrescar() {
    location.reload();
}