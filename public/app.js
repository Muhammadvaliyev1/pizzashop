const button = document.getElementById('menuToggle');
  const lines = button.querySelectorAll('.line');

  let isOpen = false;

  button.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      lines[0].classList.add('-rotate-45', 'translate-y-[9px]');
      lines[1].classList.add('opacity-0');
      lines[2].classList.add('rotate-45', '-translate-y-[9px]');
    } else {
      lines[0].classList.remove('-rotate-45', 'translate-y-[9px]');
      lines[1].classList.remove('opacity-0');
      lines[2].classList.remove('rotate-45', '-translate-y-[9px]');
    }
  });

  document.getElementById('menuToggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('-left-full')) {
      menu.classList.remove('-left-full');
      menu.classList.add('left-1/2');
    } else {
      menu.classList.remove('left-1/2');
      menu.classList.add('-left-full');
    }
  });