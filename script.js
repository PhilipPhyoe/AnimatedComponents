const box = document.querySelector(".threeD");

box.addEventListener("mousemove", (event) => {
  const mouseX = event.pageX;
  const mouseY = event.pageY;
  console.log(mouseX, mouseY);
});
