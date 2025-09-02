function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('ru-RU');
  document.getElementById('clock').textContent = time;
  document.getElementById('date').textContent = date;
}

function goHome() {
  window.location.href = 'index.html';
}

setInterval(updateTime, 1000);
updateTime();

// Закрытие всех меню при клике вне
document.addEventListener('click', function(event) {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (!menu.parentElement.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
});

// Переключение меню при клике на кнопку
document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // предотвращает немедленное закрытие
    const dropdown = button.nextElementSibling;
    const isOpen = dropdown.classList.contains('show');

    // Закрыть другие открытые меню
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));

    if (!isOpen) {
      dropdown.classList.add('show');
    }
  });
});

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Скрываем все слайды
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }  // Если достигнут конец, начать сначала
  slides[slideIndex - 1].style.display = "block";  // Показываем текущий слайд
  setTimeout(showSlides, 7000); // Переход к следующему слайду через 3 секунды
}

showSlides(); // Запуск слайдшоу

// Открытие модального окна с изображением
function openModal(imgElement) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  var caption = document.getElementById("caption");

  modal.style.display = "block"; // Показываем модальное окно
  modalImage.src = imgElement.src; // Устанавливаем изображение в модальное окно
  caption.innerHTML = imgElement.alt; // Добавляем описание картинки в модальное окно
}

// Закрытие модального окна при клике на область модального окна
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none"; // Прячем модальное окно
}

function toggleDropdown() {
  const content = document.getElementById("dropdown-content");
  content.style.display = (content.style.display === "block") ? "none" : "block";
}

// Закрытие при клике вне списка
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
}

function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.style.paddingTop = "0";
    panel.style.paddingBottom = "0";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.paddingTop = "10px";
    panel.style.paddingBottom = "10px";
  }
}

function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  panel.classList.toggle("open");
}


function openModal(img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-image").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function openDoc(url) {
  document.getElementById('docFrame').src = url;
  document.getElementById('docModal').style.display = 'block';
}

function closeDoc() {
  document.getElementById('docModal').style.display = 'none';
  document.getElementById('docFrame').src = '';
}



