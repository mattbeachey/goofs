//run in browser console

let left = 255
let middle = 255
let right = 255

function changeColor(left, mid, right){
    document.body.style.backgroundColor = `rgb(${left}, ${mid}, ${right})`;
}

let leftUp = false;
let midUp = false;
let rightUp = false;

setInterval(() => {
    const num = Math.floor(Math.random() * 3);

	if(num === 0){
		if(left === 0){
			leftUp = true;
		}
		if(left === 255){
			leftUp = false;
		}
		if(leftUp){
			left++;
		} else {
			left--;
		}
 	}


	if(num === 1){
		if(middle === 0){
			midUp = true;
		}
		if(middle === 255){
			midUp = false;
		}
		if(midUp){
			middle++;
		} else {
			middle--;
		}
 	}

	if(num === 2){
		if(right === 0){
			rightUp = true;
		}
		if(right === 255){
			rightUp = false;
		}
		if(rightUp){
			right++;
		} else {
			right--;
		}
 	}
    
    changeColor(left, middle, right); 
}, 1);