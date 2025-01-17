import { v4 } from 'uuid';

export const HTML_CONTENT = [
	{
		id: v4(),
		title: '¿Para qué sirve HTML?',
		text: 'Es la base de todo, el esqueleto de tu sitio web. Define la estructura y el contenido: encabezados, párrafos, imágenes, tablas… Es el primer paso para construir una página, pero aprender a usarlo de forma eficiente, semántica y optimizada no es cuestión de un par de días.'
	},
	{
		id: v4(),
		title: 'La importancia de la semántica',
		text: 'La semántica en HTML se refiere al uso de etiquetas que tienen un significado claro y específico en el contexto del contenido que envuelven.',
		code: '<div><h1>Hola</h1></div>'
	}
];
