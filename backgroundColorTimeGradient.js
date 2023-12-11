//run in browser console
const rand = max => Math.floor(Math.random() * (max + 1));
let r = document.body.style.backgroundColor?.split("(")[1]?.split(",")[0] || rand(255);
let g = document.body.style.backgroundColor?.split(",")[1]?.split(",")[0] || rand(255);
let b = document.body.style.backgroundColor?.split(",")[2]?.split(")")[0] || rand(255);
let rUp = false;
let gUp = false;
let bUp = false;
let rotateDeg = document.body.style.rotateDeg || rand(360);

const changeColor = (r, g, b) => {
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundImage = `linear-gradient(${rotateDeg}deg, rgba(${r}, ${g}, ${b}, .5) 20%, rgba(${255 - r}, ${255 - g}, ${255 - b}, .5) 95%)`;
}

setInterval(() => {
  const num = rand(2);

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

// document.body.style.backgroundColor = 'rgb(253, 248, 158)'
// document.body.style.backgroundImage = 'linear-gradient(280.8deg, rgba(253, 248, 158, 0.5) 20%, rgba(2, 7, 97, 0.5) 95%)'

/* 
	Challenge: stop colors from changing by writing a line of code in an html input on the screen (running thru eval)
	POC:

	// append code input:
	const input = document.createElement('input')
	document.body.append(input)
	document.body.addEventListener("keydown", (event) => {
		if (event.key === 'Enter') {
			eval(input.value)
		}
	});

	// working user input: 
	for(let i = 0; i < 1000; i++){clearInterval(i)}

*/
