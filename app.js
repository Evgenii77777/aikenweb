let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

let open_modal = document.querySelectorAll(".open__modal");
let close_modal = document.getElementById("close__modal");
let modal = document.getElementById("modal");
let body = document.getElementsByTagName("body")[0];
for (let i = 0; i < open_modal.length; i++) {
  open_modal[i].onclick = function () {
    modal.classList.add("modal__vis");
    modal.classList.remove("bounceOutDown");
    body.classList.add("body__block");
  };
}
close_modal.onclick = function () {
  modal.classList.add("bounceOutDown");
  window.setTimeout(function () {
    modal.classList.remove("modal__vis");
    body.classList.remove("body__block");
  }, 500);
};
