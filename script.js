const year = new Date().getFullYear();
const date = new Date(year, 2,3).getTime();
const dateNextYear = new Date(year + 1, 2, 3).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month > 6) {
    diff = dateNextYear - today;
  } else {
    diff = date - today;
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    " <div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
      <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
      <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
      <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div> \
      </div>";
}, 1000);