document.addEventListener("DOMContentLoaded", () => {
  const faq = document.querySelectorAll(".faq__item");

  faq.forEach((faq) => {
    faq.addEventListener("click", () => {
      const answer = faq.querySelector(".faq__answer");
      answer.classList.toggle("open");

      // switch img and anim
      if (answer.classList.contains("open")) {
        faq.querySelector(".faq__btn_close").style.backgroundImage =
          "url(assets/images/icon-minus.svg)";
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        faq.querySelector(".faq__btn_close").style.backgroundImage =
          "url(assets/images/icon-plus.svg)";
        answer.style.maxHeight = 0 + "px";
      }
    });
  });
});
