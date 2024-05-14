const button = document.getElementById('button')
const OFFSET = 80;
button.addEventListener('click', () => {
  alert('Nice try hehe!');
  window.location.reload();
})

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = button.getBoundingClientRect()
  
  horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

  const horizontalOffset = buttonBox.width / 2 + OFFSET
  const verticalOffset = buttonBox.height / 2 + OFFSET

  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
      buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    )
  }
})

function setButtonPosition(left, top) { 
  const windowBox = document.body.getBoundingClientRect()
  const buttonBox = button.getBoundingClientRect()
  
  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET
  }

  button.style.transition = '0.05s'; 
  button.style.left = `${left}px`
  button.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}


document.addEventListener('mousemove', function(e) {
  console.log("mouse is moving !")
  let x = e.clientX / window.innerWidth - 0.5;
  let y = e.clientY / window.innerHeight - 0.5;
  document.getElementById('parallaxBg').style.transform = `translate(${x * 100}px, ${y * 100}px)`;
});