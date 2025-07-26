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

  const parentWidth = toggleBtn.offsetWidth;
  const sliderWidth = slider.offsetWidth;

  const rightPosition = parentWidth - sliderWidth;

  if (isLeftActive) {
    slider.style.left = '0px';

    left.classList.replace('text-orange-400', 'text-white');
    right.classList.replace('text-white', 'text-orange-400');

    left.classList.replace('text-lg', 'text-2xl');
    right.classList.replace('text-2xl', 'text-lg');

    left.classList.replace('ml-0', 'ml-3 md:ml-6');
    right.classList.replace('mr-3 md:mr-6', 'mr-0');
  } else {
    slider.style.left = `${rightPosition}px`;

    left.classList.replace('text-white', 'text-orange-400');
    right.classList.replace('text-orange-400', 'text-white');

    left.classList.replace('text-2xl', 'text-lg');
    right.classList.replace('text-lg', 'text-2xl');

    left.classList.replace('ml-3 md:ml-6', 'ml-0');
    right.classList.replace('mr-0', 'mr-3 md:mr-6');
  }
});

const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');
  const countSpan = document.getElementById('count');

  let count = 1;

  function flashButton(button) {
    // Сохраняем оригинальные классы
    const originalClass = button.className;

    // Добавляем временный градиент
    button.classList.remove('border', 'border-gray-400');
    button.classList.add('bg-gradient-to-r', 'from-orange-500', 'to-red-500');

    // Вернуть через 300мс
    setTimeout(() => {
      button.className = originalClass;
    }, 300);
  }

  decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      countSpan.textContent = count;
      flashButton(decreaseBtn);
    }
  });

  increaseBtn.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;
    flashButton(increaseBtn);
  });

  const SecdecreaseBtn = document.getElementById('2decrease');
  const SecincreaseBtn = document.getElementById('2increase');
  const SeccountSpan = document.getElementById('2count');

  let Seccount = 1;

  function SecflashButton(button) {
    // Сохраняем оригинальные классы
    const originalClass = button.className;

    // Добавляем временный градиент
    button.classList.remove('border', 'border-gray-400');
    button.classList.add('bg-gradient-to-r', 'from-orange-500', 'to-red-500');

    // Вернуть через 300мс
    setTimeout(() => {
      button.className = originalClass;
    }, 300);
  }

  SecdecreaseBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      countSpan.textContent = count;
      flashButton(decreaseBtn);
    }
  });

  SecincreaseBtn.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;
    flashButton(increaseBtn);
  });


  //FILTR

  const checkboxes = document.querySelectorAll('.filter');
  const products = document.querySelectorAll('.product');
  const showAllBtn = document.getElementById('showAll');

  // Функция для фильтрации
  function filterProducts() {
    const selected = Array.from(checkboxes)
                          .filter(cb => cb.checked)
                          .map(cb => cb.value);

    products.forEach(product => {
      const category = product.dataset.category;
      if (selected.length === 0 || selected.includes(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  // Вешаем событие на каждый чекбокс
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
  });

  // Кнопка "Показать всё"
  showAllBtn.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = false); // снять все галочки
    products.forEach(product => product.style.display = 'block'); // показать все
  });