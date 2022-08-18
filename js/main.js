const products = [
	{
		id: 1,
		title: 'Notebook',
		img: 'https://i.ibb.co/PGGL6NT/notebook.jpg',
		price: 2000
	},
	{
		id: 2,
		title: 'Mouse',
		img: 'https://i.ibb.co/D835TKk/mouse.jpg',
		price: 20
	},
	{
		id: 3,
		title: 'Keyboard',
		img: 'https://i.ibb.co/FmTvTRs/klaviatura.jpg',
		price: 200
	},
	{
		id: 4,
		title: 'Gamepad',
		img: 'https://i.ibb.co/wdvwPbk/gamepad.jpg',
		price: 50
	},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (obj) => {
	return `<div class="product-item">
                <h3>${obj.title}</h3>
					 <img src="${obj.img} alt="${obj.title}">
                <p>${obj.price}</p>
                <button data-productid="${obj}" class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
	const productsList = list.map(item => renderProduct(item));
	console.log(productsList);
	document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);


