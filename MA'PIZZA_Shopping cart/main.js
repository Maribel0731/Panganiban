let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name: 'Cheeze Pizza',
		tag: 'cheezepizza',
		price: 761,
		inCart: 0
	},
	{
		name: 'Veggie Pizza',
		tag: 'veggiepizza',
		price: 650,
		inCart: 0
	},
	{
		name: 'Pepperoni Pizza',
		tag: 'pepperonipizza',
		price: 890,
		inCart: 0
	},
	{
		name: 'Meat Pizza',
		tag: 'meatpizza',
		price: 799,
		inCart: 0
	},
	{
		name: 'Margherita Pizza',
		tag: 'margheritapizza',
		price: 847,
		inCart: 0
	},
	{
		name: 'BBQ Chicken Pizza',
		tag: 'bbqchickenpizza',
		price: 950,
		inCart: 0
	},
	{
		name: 'Hawaiian Pizza',
		tag: 'hawaiianpizza',
		price: 735,
		inCart: 0
	},
	{
		name: 'Buffalo Pizza',
		tag: 'buffalopizza',
		price: 941,
		inCart: 0
	},
	{
		name: 'Greek Pizza',
		tag: 'greekpizza',
		price: 861,
		inCart: 0
	},
	{
		name: 'New York-Style Pizza',
		tag: 'newyork-stylepizza',
		price: 999,
		inCart: 0
	},
	{
		name: 'Neopolitan Pizza',
		tag: 'neopolitanpizza',
		price: 987,
		inCart: 0
	},
	{
		name: 'Chicago Pizza',
		tag: 'chicagopizza',
		price: 961,
		inCart: 0
	}

];

for (let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', () => {
		cartNum(products[i]);
		totalCost(products[i])
	})
}

function onLoadCartNumbers() {
	let productNum = localStorage.getItem('cartNum');

	if(productNum) {
		document.querySelector('.cart span').textContent = productNum;
	}
}

function cartNum(product) {
	let productNum = localStorage.getItem('cartNum');

	productNum = parseInt(productNum);

	if(productNum) {
		localStorage.setItem('cartNum', productNum + 1);
		document.querySelector('.cart span').textContent = productNum + 1;
	} else {
		localStorage.setItem('cartNum', 1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItem(product);
}

function setItem(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null) {

		if(cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		
		cartItems[product.tag].inCart += 1;
	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
	// console.log("The product price is", product.price);
	let cartCost = localStorage.getItem('totalCost');
	
	console.log("My cartcost is", cartCost);
	console.log(typeof cartCost);

	if(cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}

}

onLoadCartNumbers();
