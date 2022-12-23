var result;

function createbox(id) {
	const color = document.getElementById('color');
	color.innerHTML = '';
	if (id == 'easy') {
		for (i = 0; i < 2; i++) {
			create(i);
		}
	} else if (id == 'hard') {
		for (i = 0; i < 3; i++) {
			create(i);
		}
	} else {
		for (i = 0; i < 5; i++) {
			create(i);
		}
	}

	let parentSelector = document.querySelector('.color');
	let random = Math.floor(Math.random() * parentSelector.childElementCount) + 1;
	child = document.querySelector('.color>div:nth-child(' + random + ')');
	result = child.style.backgroundColor;
	document.getElementById('result').innerHTML = result;
}

function create(i) {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var div = document.createElement('div');
	div.setAttribute('class', 'box');
	div.setAttribute('id', i);
	div.setAttribute('onClick', 'check(this.id)');
	div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	document.getElementById('color').appendChild(div);
}

function normalbox() {
	document.getElementById('container').style.backgroundColor =
		'rgb(103, 78, 245)';
}

function destroy() {
	const list = document.getElementById('color');
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
}

async function check(id) {
	var box_id = document.getElementById(id);
	var check = box_id.style.backgroundColor;
	if (check == result) {
		box_id.style.border = '5px solid lime';
		var user_result = document.getElementById('user_result');
		user_result.style.color = 'lime';
		document.getElementById('user_result').innerHTML = 'YOU ARE CORRECT';
		await delay(2000);
		document.getElementById('user_result').innerHTML = '';
		destroy();
	} else {
		box_id.style.border = '5px solid red';
		var user_result = document.getElementById('user_result');
		user_result.style.color = 'rgb(224, 0, 0)';
		document.getElementById('user_result').innerHTML = 'YOU ARE WRONG';
		await delay(2000);
		document.getElementById('user_result').innerHTML = '';
		destroy();
	}
}

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
