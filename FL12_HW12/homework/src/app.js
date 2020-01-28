const rootNode = document.getElementById('root');

const divItem = cl => {
	let item = document.createElement('div');
	cl !== undefined ? item.classList.add(cl) : item;
	return item;  
}
const buttonItem = (text = ' ', cl) => {
	let item = document.createElement('button');
	item.textContent = text;
	cl !== undefined ? item.classList.add(cl) : item;
	return item;  
}
const formItem = () => {
	let item = document.createElement('form');
	//item.setAttribute('type', type);
	return item;  
}
const inputItem = (text = '') => {
	let item = document.createElement('input');
	item.setAttribute('type', 'text');
	item.setAttribute('placeholder', 'text');
	return item;  
}

let mainPage = divItem('main');
mainPage.appendChild(buttonItem('addCard', 'add'));



const addPage = function (argument) {
	let addSet = divItem('addSet');
	addSet.appendChild(inputItem());
	addSet.appendChild(buttonItem('add term', 'term-add'));
	addSet.appendChild(buttonItem('save', 'term-save'));
	addSet.appendChild(buttonItem('cancel', 'term-cancel'));

	return addSet;
}

function newSet(){
	let form = formItem();
	form.appendChild(inputItem('term'));
	form.appendChild(inputItem('description'));
	form.appendChild(buttonItem('remove'));

	return form;
}


rootNode.appendChild(addPage());

let addTerm = document.querySelector('term-add');
