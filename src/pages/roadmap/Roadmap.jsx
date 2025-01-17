import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import { ROADMAP_CONTENT } from '../../constants/pages-content/roadmap';
import { StyledMainContainer, StyledSection } from '../../styles/common';

const Roadmap = () => {
	return (
		<StyledMainContainer>
			<h1>ROADMAP</h1>
			{ROADMAP_CONTENT.map(content => (
				<StyledSection key={content.id}>
					<article>
						<h2>{content.title}</h2>
						<p>{content.text}</p>
						{content.link && (
							<Link to={content.link}>
								<Button>{content.linkText}</Button>
							</Link>
						)}
					</article>
				</StyledSection>
			))}
		</StyledMainContainer>
	);
};

export default Roadmap;
