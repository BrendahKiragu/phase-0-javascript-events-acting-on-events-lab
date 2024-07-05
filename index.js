// Your code here
const dodger = document.getElementById("dodger")
// dodger.style.backgroundColor= "#FF69B4"
// dodger.style.bottom = '100px'

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  
  // Taking 400 as the maximum width of the container
  if (left < 400 - dodger.offsetWidth) {
    dodger.style.left = `${left + 1}px`; // Increases the left value to move right
  }
}

