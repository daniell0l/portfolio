function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  let i = 0;

  function digitar() {
    setTimeout(() => {
      elemento.innerHTML += arrTexto[i];
      i++;

      if (i < arrTexto.length) {
        digitar();
      } else {
        setTimeout(() => {
          elemento.innerHTML = '';
          i = 0;
          digitar();
        }, 2000);
      }
    }, 75);
  }

  digitar();
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);
