let username = document.querySelector(`#username`);
let frameSelect = document.querySelector(`#frame-select`);
let framePicker = document.querySelector(`#frame-picker`);
let tshirt = document.querySelector(`#tshirt-picker`);
let hair = document.querySelector(`#hair-range`);
let glasses = document.querySelector(`#glasses-check`);
let earings = document.querySelector(`#earings-check`);

let imgHair = document.querySelector(`.hair`);



username.addEventListener(`input`, function(event) {
    document.querySelector(`.username-container`).innerHTML = event.target.value;
});


framePicker.addEventListener(`input`, function(evt) {
    document.querySelector(`.frame`).style.backgroundColor = evt.target.value;
});


tshirt.addEventListener(`input`, function(e) {
    document.querySelector(`.tshirt-color`).style.fill = e.target.value;
});


frameSelect.addEventListener(`input`, function(e) {
    document.querySelector(`.frame`).classList = `frame frame-${e.target.value}`;
});


hair.addEventListener(`input`, function(event) {

    imgHair.src = `assets/hair-${event.target.value}.svg`;
})


function createRange(item) {
    document
        .querySelector(`#${item}-check`)
        .addEventListener(`input`, function (evt) {
        document.querySelector(`#${item}-range`).disabled = !evt.target.checked;
        document.querySelector(`.${item}`).classList.toggle(`hidden`);
    });
    document
        .querySelector(`#${item}-range`)
        .addEventListener(`input`, function (evt) {
        document.querySelector(
            `.${item}`
        ).src = `assets/${item}-${evt.target.value}.svg`;
    });
}

  // Шляпа
    createRange(`hat`);
  // Очки
    createRange(`glasses`);
  // Серёжки
    createRange(`earings`);
