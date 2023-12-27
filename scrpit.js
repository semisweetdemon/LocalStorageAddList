const image = document.querySelector('.index__image');
const name = document.querySelector('.index__name');
const price = document.querySelector('.index__price');
const create = document.querySelector('.create');

create.addEventListener('click', () => {
	addData();
});

function addData() {
	let obj = {
		name: name.value,
		price: price.value,
		image: image.value,
	};
	let data = JSON.parse(localStorage.getItem('food')) || [];
	data.push(obj);
	localStorage.setItem('food', JSON.stringify(data));

	image.value = '';
	name.value = '';
	price.value = '';
}
