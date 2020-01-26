const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createUlItem (param = false) {
	const ul = document.createElement('ul');
	param ? ul.classList.add('nested') : ul.classList.add('no-nested');
	return ul;	
}

function createListItem () {
	const li = document.createElement('li');
	return li;
}

function createDivItem (parent, text) {
	const div = document.createElement('div'); 
	div.textContent = text;
	return parent.appendChild(div);
}

function createIconItem (parent, text) {
	const icon = document.createElement('i')
	icon.classList.add('material-icons');
	text === ('folder' || 'open_folder') ? icon.classList.add('f-icon'): icon.classList.add('nf-icon');
	icon.textContent = text;
	return parent.appendChild(icon);
}

function createP (parent, text) {
	const p = document.createElement('p');
	p.textContent = text;
	return parent.appendChild(p);
}

function crFolderStructure(arr, rootNode, param = false){
	let mainUl = createUlItem(param)
	for (let elem of arr){
		let li = createListItem();
		console.log(elem.folder);

		if (elem.empty){
			li.classList.add(elem.title);
			createP(li, elem.text);
		} else if (elem.folder === undefined) {
			createIconItem(li, 'insert_drive_file');
			createDivItem(li, elem.title);
		} else if (elem.folder) {
			createIconItem(li, 'folder');
			createDivItem(li, elem.title).classList.add('folder');
			if (elem.children){
				crFolderStructure(elem.children, li, true)
			} else {
				let obj = {
					'empty': true,
					'title': 'empty',
					'text': 'Folder is empty'
				}
				crFolderStructure([obj], li, true);
			}
			createUlItem(li, true);
		} 

		mainUl.appendChild(li);
	}

	rootNode.appendChild(mainUl);
}

crFolderStructure(structure, rootNode);


let folders = document.querySelectorAll('.folder').forEach(addEvent);

function addEvent(el){
	el.addEventListener('click', toggleClass);
	el.addEventListener('click', changeIcon);
}

function toggleClass(e){
	let getCurUl = e.target.parentElement.querySelector('ul');
	getCurUl.classList.toggle('active');
}

function changeIcon(e) {
	let getIcon = e.target.parentElement.querySelector('i');
	console.log(getIcon);
	getIcon.innerHTML === 'folder' ? getIcon.innerHTML += '_open' : getIcon.innerHTML = 'folder';
}

