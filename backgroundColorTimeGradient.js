//run in browser console
let r = document.body.style.backgroundColor?.split("(")[1]?.split(",")[0] || 255;
let g = document.body.style.backgroundColor?.split(",")[1]?.split(",")[0] || 255;
let b = document.body.style.backgroundColor?.split(",")[2]?.split(")")[0] || 255;
let rUp = false;
let gUp = false;
let bUp = false;
let rotateDeg = document.body.style.rotateDeg || 0;

function changeColor(r, g, b) {
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundImage = `linear-gradient(${rotateDeg}deg, rgba(${r}, ${g}, ${b}, .5) 20%, rgba(${255 - r}, ${255 - g}, ${255 - b}, .5) 95%)`;
}

setInterval(() => {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) {
    if (r === 0) {
      rUp = true;
    }
    if (r === 255) {
      rUp = false;
    }
    if (rUp) {
      r++;
    } else {
      r--;
    }
  }

  if (num === 1) {
    if (g === 0) {
      gUp = true;
    }
    if (g === 255) {
      gUp = false;
    }
    if (gUp) {
      g++;
    } else {
      g--;
    }
  }

  if (num === 2) {
    if (b === 0) {
      bUp = true;
    }
    if (b === 255) {
      bUp = false;
    }
    if (bUp) {
      b++;
    } else {
      b--;
    }
  }

  if (rotateDeg <= 360) {
    rotateDeg += 0.3;
  } else {
    rotateDeg = 0;
  }
  document.body.style.rotateDeg = rotateDeg;
  changeColor(r, g, b);
}, 1);

// //reverse sunset look
// document.body.style.backgroundColor = 'rgb(247, 197, 140)';
// document.body.style.backgroundImage = 'linear-gradient(182.4deg, rgba(247, 197, 140, 0.5) 20%, rgba(8, 58, 115, 0.5) 95%)';

// document.body.style.backgroundColor = 'rgb(145, 246, 174)'
// document.body.style.backgroundImage = 'linear-gradient(152.1deg, rgba(145, 246, 174, 0.5) 20%, rgba(110, 9, 81, 0.5) 95%)'

// document.body.style.backgroundColor = 'rgb(201, 202, 253)'
// document.body.style.backgroundImage = 'linear-gradient(327.3deg, rgba(201, 202, 253, 0.5) 20%, rgba(54, 53, 2, 0.5) 95%)'
