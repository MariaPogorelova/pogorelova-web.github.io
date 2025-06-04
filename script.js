// Инициализация карты Google Maps
function initMap() {
  const companyLocation = { lat: 55.7558, lng: 37.6173 }; // Москва, Красная площадь (пример)
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: companyLocation,
  });
  const marker = new google.maps.Marker({
    position: companyLocation,
    map: map,
    title: "Кофейня Арома",
  });
}

// Обработка формы обратной связи
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Пожалуйста, заполните все поля корректно.";
      status.style.color = "red";
      return;
    }

    // Имитация отправки данных (например, на сервер)
    status.textContent = "Отправка...";
    status.style.color = "#d2691e";

    // Здесь можно добавить реальный запрос на сервер через fetch/ajax
    setTimeout(() => {
      status.textContent = "Спасибо за ваше сообщение!";
      status.style.color = "green";
      form.reset();
    }, 1500);
  });
});
