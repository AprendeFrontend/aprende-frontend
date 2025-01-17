import HtmlCodeHighlighter from '../../components/html-code-highlighter/HtmlCodeHighlighter';
import { HTML_CONTENT } from '../../constants/pages-content/html';
import { StyledMainContainer, StyledSection } from '../../styles/common';

const Html = () => {
	return (
		<StyledMainContainer>
			<h1>HTML</h1>
			{HTML_CONTENT.map(({ id, title, text, code }) => (
				<StyledSection key={id}>
					<article>
						<h2>{title}</h2>
						<p>{text}</p>
						{/* Renderizamos el código si está presente */}
						{code && <HtmlCodeHighlighter code={code} />}
					</article>
				</StyledSection>
			))}
		</StyledMainContainer>
	);
};

export default Html;
