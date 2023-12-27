const addList = document.querySelector('.hero__blocks');

getData();

function getData() {
	let newData = JSON.parse(localStorage.getItem('food')) || [];
	newData.forEach((el) => {
		let p = document.createElement('p');
		p.innerHTML = el.name;
		let d = document.createElement('p');
		d.innerHTML = `${el.price} $`;
		let textPrice = document.createElement('div');
		textPrice.setAttribute('class', 'textprice');
		textPrice.append(p, d);
		let button = document.createElement('button');
		button.innerHTML = 'to order';
		button.setAttribute('class', 'block__order');
		let blockText = document.createElement('div');
		blockText.setAttribute('class', 'block__text');
		blockText.append(textPrice, button);
		let blockImage = document.createElement('img');
		blockImage.setAttribute('class', 'block__image');
		blockImage.src = el.image;
		let block = document.createElement('div');
		block.setAttribute('class', 'block');
		block.append(blockImage, blockText);
		addList.append(block);
	});
}
