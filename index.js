let btnEncriptar = document.querySelector(".button_encrypt");
let btnDesencriptar = document.querySelector(".button__decrypt");
let muneico = document.querySelector(".is__img");
let contenedorParrafo = document.querySelector(".is__p");
let resultado = document.querySelector(".out__resultado");

btnEncriptar.onClick = encriptar;
btnDesencriptar.onClick = desencriptar;

function encriptar() {
  ocultarAdelante();
  let cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  ocultarAdelante();
  let cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
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

    return textoFinal;
  }
}
function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }

    return textoFinal;
  }
}

const btncopiar = document.querySelector(".copiar__btn");
btncopiar.addEventListener(
  "click",
  (copiar = () => {
    let contenido = querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
  })
);
