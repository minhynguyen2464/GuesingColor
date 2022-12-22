var result;

function createbox(id) {
	const color = document.getElementById('color');
	color.innerHTML = '';
	if (id == 'easy') {
		for (i = 0; i < 2; i++) {
			create();
		}
	} else if (id == 'hard') {
		for (i = 0; i < 3; i++) {
			create();
		}
	} else {
		for (i = 0; i < 5; i++) {
			create();
		}
	}

	let parentSelector = document.querySelector('.color');
	let random = Math.floor(Math.random() * parentSelector.childElementCount) + 1;
	child = document.querySelector('.color>div:nth-child(' + random + ')');
	result = child.style.backgroundColor;
	document.getElementById('result').innerHTML = result;
}

function create() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var div = document.createElement('div');
	div.setAttribute('class', 'box');
	div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	document.getElementById('color').appendChild(div);
}

function normalbox() {
	document.getElementById('container').style.backgroundColor =
		'rgb(103, 78, 245)';
}

function hoverbox() {}
