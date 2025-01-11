import { StyledFooter, StyledFooterIcons } from './footer.styles';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<StyledFooter>
			<span>©AprendeFrontend {currentYear}</span>
			<StyledFooterIcons>
				<img src='/assets/images/discord.svg' alt='discord icon' />
				<img src='/assets/images/twitter.svg' alt='twitter icon' />
				<img src='/assets/images/instagram.svg' alt='instagram icon' />
				<img src='/assets/images/tiktok.svg' alt='discord tiktokcon' />
			</StyledFooterIcons>
		</StyledFooter>
	);
};

export default Footer;
