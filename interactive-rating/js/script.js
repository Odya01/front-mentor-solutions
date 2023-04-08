// click btn and visibility window
const btn = document.querySelector('#submit-btn');
const div = document.querySelector('.container-d');

btn.addEventListener('click', () =>{
  div.classList.add('visibility');
  //либо .toggle;
});
// end

// выбор номера рейтинга
const num = document.getElementsByClassName('num');
const numRating = document.querySelector('.num-rating');

for (let rating of num){
  rating.addEventListener('click', function (event) {
    let eventNumber = event.target;
    numRating.innerText = eventNumber.value;
  });
}