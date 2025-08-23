document.addEventListener("DOMContentLoaded", () => {
  const faq = document.querySelectorAll(".faq__item");
  faq.forEach((faq) => {
    faq.querySelector(".faq__question").addEventListener("click", (e) => {
      const answer = faq.querySelector(".faq__answer");
      answer.classList.toggle("open");

      if (answer.classList.contains("open")) {
        faq.querySelector(".faq__btn_close").style.backgroundImage =
          "url(../images/icon-plus.svg);";
      } else {
        faq.querySelector(".faq__btn_close").style.backgroundImage =
          "url(../images/icon-minus.svg);";
      }
    });
  });
});
