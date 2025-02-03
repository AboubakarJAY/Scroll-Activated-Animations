function isFullyView(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return top >= 0 && bottom <= window.innerHeight;
}

function isPartialView(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return top < window.innerHeight && bottom > 0;
}

let body = document.querySelector("body");
let para1 = document.querySelector(".para1");
let liste = document.querySelectorAll("ol li");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

function scrolling(e) {
  if (isPartialView(para1)) {
    body.style.backgroundColor = "#fefefe";
    para1.classList.add("view");
  } else {
    body.style.backgroundColor = "#3d737f";
    para1.classList.remove("view");
  }

  if (isPartialView(div1)) {
    div1.classList.add("view-card");
  } else {
    div1.classList.remove("view-card");
  }

  if (isPartialView(div2)) {
    div2.classList.add("view-card");
  } else {
    div2.classList.remove("view-card");
  }

  if (isPartialView(div3)) {
    div3.classList.add("view-card");
  } else {
    div3.classList.remove("view-card");
  }

  liste.forEach(function (item) {
    if (isPartialView(item)) {
      item.classList.add("view");
    } else {
      item.classList.remove("view");
    }
  });
}

let isScrolling = false;
window.addEventListener("scroll", throttleScroll);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}
