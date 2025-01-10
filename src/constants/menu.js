import { v4 } from 'uuid';

export const MENU_ICONS = {
	HOME: '/assets/images/home.svg',
	CHALLENGES: '/assets/images/swords.svg',
	ARTICLES: '/assets/images/articles.svg',
	PROFILE: '/assets/images/profile.svg'
};

export const MENU_ITEMS = [
	{
		id: v4(),
		text: 'Inicio',
		path: '/',
		icon: MENU_ICONS.HOME
	},
	{
		id: v4(),
		text: 'Desafíos',
		path: '/challenges',
		icon: MENU_ICONS.CHALLENGES
	},
	{
		id: v4(),
		text: 'Artículos',
		path: '/articles',
		icon: MENU_ICONS.ARTICLES
	}
];
