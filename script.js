document.addEventListener('DOMContentLoaded', function () {
  const alternarTema = document.getElementById('alternarTema');
  const titulo = document.getElementById('titulo');
  const ligarSom = new Audio('salamisound-1453300-switch-toggle-or-rotary.mp3');
  const desligarSom = new Audio('salamisound-5290169-switch-turn-one-time-toggle.mp3'); 

  alternarTema.addEventListener('change', function () {
    if (alternarTema.checked) {
      document.body.classList.add('modo-escuro');
      titulo.innerText = 'Escuro';
      ligarSom.play(); // Reproduz o som de ligar
    } else {
      document.body.classList.remove('modo-escuro');
      titulo.innerText = 'Claro';
      desligarSom.play(); // Reproduz o som de desligar
    }
  });
});

// Fonte dos audios salamisound.com