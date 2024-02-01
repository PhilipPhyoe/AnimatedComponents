const box = document.querySelector(".threeD");
const counter = document.getElementById("counter");
var start = 1;
/*
box.addEventListener("mousemove", (event) => {
  const mouseX = event.pageX;
  const mouseY = event.pageY;
  console.log(mouseX, mouseY);
});
*/

function counting() {
  if (start < 100) {
    counter.innerHTML = start;
    start += 1;
  } else {
    clearInterval();
  }
}
setInterval(counting, 20);
/*
setInterval(function () {
  counter.innerHTML += "Hello";
}, 2000);
*/
