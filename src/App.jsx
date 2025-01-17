import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/Auth.provider';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

// const rawCode = `<div> <h1>Hola</h1> <p>Soy un<span>párrafo</span></p> </div>`;
// <div>
// 	<h1>Ejemplo de resaltado de código HTML</h1>
// 	<HtmlCodeHighlighter code={rawCode} />
// </div>

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
