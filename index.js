let btnEncriptar = document.querySelector(".button_encrypt");
let btnDesencriptar = document.querySelector(".button__decrypt");
let muneico = document.querySelector(".is__img");
let contenedorParrafo = document.querySelector(".is__p");
let resultado = document.querySelector(".out__resultado");
let outputDiv = document.querySelector(".out_d");

// btnEncriptar.onClick = encriptar;
// btnDesencriptar.onClick = desencriptar;

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);

function encriptar() {
  ocultarAdelante();
  let cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
  mostrarDiv();
}

function desencriptar() {
  ocultarAdelante();
  let cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
  mostrarDiv();
}

function recuperarTexto() {
  let cajatexto = document.querySelector(".textbox__input");
  return cajatexto.value;
}

function ocultarAdelante() {
  muneico.classList.add("ocultar");
  contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  /* Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}
function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a" && texto[i + 1] == "i") {
      textoFinal = textoFinal + "a";
      i++;
    } else if (texto[i] == "e" && texto.substring(i, i + 5) == "enter") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i" && texto.substring(i, i + 4) == "imes") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o" && texto.substring(i, i + 4) == "ober") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u" && texto.substring(i, i + 4) == "ufat") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

const btncopiar = document.querySelector(".copiar__btn");
btncopiar.addEventListener("click", () => {
  let contenido = document.querySelector(".out__resultado").textContent;
  navigator.clipboard.writeText(contenido);
});

function mostrarDiv() {
  outputDiv.classList.remove("ocultar");
}
