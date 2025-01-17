import { useEffect, useState } from 'react';

const HtmlCodeHighlighter = ({ code }) => {
	const [formattedCode, setFormattedCode] = useState('');

	useEffect(() => {
		const formatted = formatHtmlManually(code);
		setFormattedCode(formatted);
	}, [code]);

	return <pre>{formattedCode}</pre>;
};

// Función para formatear HTML con indentación correcta
const formatHtmlManually = html => {
	const lines = html.split(/(?=<)/g); // Divide el HTML en segmentos por cada etiqueta de apertura
	let indentSpaces = 0;
	const formattedHtml = lines.map(line => {
		const trimmedLine = line.trim();

		if (trimmedLine.startsWith('</')) {
			// Si es una etiqueta de cierre, reduce la indentación
			indentSpaces = Math.max(indentSpaces - 2, 0);
		}

		const result = ' '.repeat(indentSpaces) + trimmedLine;

		if (
			trimmedLine.startsWith('<') &&
			!trimmedLine.startsWith('</') &&
			!trimmedLine.endsWith('/>') &&
			!trimmedLine.includes('</')
		) {
			// Incrementa la indentación si es una etiqueta de apertura sin cierre en la misma línea
			indentSpaces += 2;
		}

		return result;
	});

	return formattedHtml.join('\n');
};

export default HtmlCodeHighlighter;
