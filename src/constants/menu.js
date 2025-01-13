import { v4 } from 'uuid';
import { ICONS } from './icons';

export const MENU_ITEMS = [
	{
		id: v4(),
		text: 'Inicio',
		path: '/',
		icon: ICONS.HOME
	},
	{
		id: v4(),
		text: 'Desafíos',
		path: '/challenges',
		icon: ICONS.CHALLENGES
	},
	// {
	// 	id: v4(),
	// 	text: 'Clasificación',
	// 	path: '/ranking',
	// 	icon: ICONS.RANKING
	// },
	{
		id: v4(),
		text: 'Artículos',
		path: '/articles',
		icon: ICONS.ARTICLES
	}
];
