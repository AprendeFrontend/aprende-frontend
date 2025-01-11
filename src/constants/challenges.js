const QR_CODE_COMPONENT = {
	id: 'cc0721b5-4130-4324-851c-b3af98a37963',
	name: 'QR code component',
	description:
		"A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
	image: '/assets/images/challenges/qr-component.webp',
	requirements: 'Hazlo Bien'
};

const PRODUCT_PREVIEW_CART_COMPONENT = {
	id: '321b2fbb-aec8-43d5-9526-5ae14072a312',
	name: 'Product preview cart component',
	description:
		'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
	image: '/assets/images/challenges/product-preview-card-component.webp',
	requirements: 'Hazlo Bien'
};

const PRODUCT_LIST_WITH_CART = {
	id: '96882f60-4145-4f81-901a-e6ad8d108f44',
	name: 'Product list with cart',
	description:
		'Practice updating the UI in multiple places based on user actions. The starter download also includes a JSON file to help you practice populating the DOM dynamically.',
	image: '/assets/images/challenges/product-list-with-cart.webp',
	requirements: 'Hazlo Bien'
};

const CONNECT_FOUR = {
	id: '4b7a9699-1d7f-484e-9eb7-7bddd6018496',
	name: 'Connect Four Game',
	description:
		"Your JS knowledge will be challenged in this fun project, where you'll build a two-player game. You'll write the logic for the game and how to test for win conditions.",
	image: '/assets/images/challenges/connect-four.webp',
	requirements: 'Hazlo Bien'
};

const TRAINEE = [QR_CODE_COMPONENT];
const JUNIOR = [PRODUCT_PREVIEW_CART_COMPONENT];
const MIDDLE = [PRODUCT_LIST_WITH_CART];
const ADVANCED = [CONNECT_FOUR];

export const CHALLENGES = [TRAINEE, JUNIOR, MIDDLE, ADVANCED];
