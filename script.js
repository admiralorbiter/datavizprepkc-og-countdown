const year = new Date().getFullYear();
const date = new Date(year, 2,3).getTime();
const month = new Date().getMonth();
const dateNextYear = new Date(year + 1, 2, 3).getTime();

//Function to generate the countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference from the set date and today's date
  let diff;
  if(month > 6) {
    diff = dateNextYear - today;
  } else {
    diff = date - today;
  }

  //Calculate the time left based on days, hours, minutes and seconds
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  //Generate the elements to display the time left
  document.getElementById("timer").innerHTML =
    " <div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \ <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \ <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \ <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div> \ </div>";
}, 1000);