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
	{
		id: v4(),
		text: 'Roadmap',
		path: '/roadmap',
		icon: ICONS.ROADMAP,
		submenus: [
			{
				id: v4(),
				text: 'Fundamentos Web',
				path: '/fundamentals',
				icon: ICONS.FUNDAMENTALS
			},
			{
				id: v4(),
				text: 'HTML',
				path: '/html',
				icon: ICONS.HTML
			},
			{
				id: v4(),
				text: 'CSS',
				path: '/css',
				icon: ICONS.CSS
			},
			{
				id: v4(),
				text: 'JavaScript',
				path: '/javascript',
				icon: ICONS.JAVASCRIPT
			}
		]
	}
];
