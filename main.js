$(document).ready(function () {
  let currentFloor = 2; //переменная где хранится текущий этаж
  let floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
  let counterUp = $(".counter-up"); //кнопка увеличения этажа
  let counterDown = $(".counter-down"); //кнопка уменьшения этажа
  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");
  let viewFlatsButton = $(".view-flats")
  //функция при наведении мышью на этаж
  floorPath.on("mouseover", function(){
    floorPath.removeClass('current-floor'); // удаялем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $('.counter').text(currentFloor); //записываем значение этажа в счетчик справа
  });

  floorPath.on('click', toggleModal); //при клике на этаж - вызывает окно
  modalCloseButton.on('click', toggleModal); //при клике на крестик  - закрывает окно
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа ( не больше 18)
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //здесь мы приводим к формату en-US т.е. 0... цифры после клика на стрелочку
      $('.counter').text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); //очищаем от класса все этажи, чтобы выделение пропадало с других этажей, отличных от выделенного
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //toggleClass - добавляет класс, таким образом подсвечивая его
    }
  });
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //здесь мы приводим к формату en-US т.е. 0... цифры после клика на стрелочку
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor'); //очищаем от классавсе этажи, чтобы выделение пропадало с других этажей, отличных от выделенного
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal() { // функция открыть-закрыть окно
    modal.toggleClass("is-open"); 
  }
});

