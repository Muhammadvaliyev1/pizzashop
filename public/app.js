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

  const toggleBtn = document.getElementById('toggleBtn');
    const slider = document.getElementById('slider');
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    let isLeftActive = true;

    toggleBtn.addEventListener('click', () => {
      isLeftActive = !isLeftActive;

      if (isLeftActive) {
        slider.classList.remove('left-[41%]');
        slider.classList.add('left-0');

        left.classList.replace('text-orange-400', 'text-white',);
        right.classList.replace('text-white', 'text-orange-400');
        left.classList.replace('text-lg', 'text-2xl',);
        right.classList.replace('text-2xl', 'text-lg');
        left.classList.replace('ml-0', 'ml-6',);
        right.classList.replace('mr-6', 'mr-0');
      } else {
        slider.classList.remove('left-0');
        slider.classList.add('left-[41%]');

        left.classList.replace('text-white', 'text-orange-400',);
        right.classList.replace('text-orange-400', 'text-white',);
        left.classList.replace('text-2xl', 'text-lg',);
        right.classList.replace('text-lg', 'text-2xl');
        left.classList.replace('ml-6', 'ml-0');
        right.classList.replace('mr-0', 'mr-6',);
      }
    });