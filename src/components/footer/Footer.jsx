import { ICONS } from '../../constants/icons';
import { StyledFooter, StyledFooterIcons } from './footer.styles';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<StyledFooter>
			<span>©AprendeFrontend {currentYear}</span>
			<StyledFooterIcons>
				<img src={ICONS.DISCORD} alt='discord icon' />
				<img src={ICONS.TWITTER} alt='twitter icon' />
				<img src={ICONS.INSTAGRAM} alt='instagram icon' />
				<img src={ICONS.TIKTOK} alt='discord tiktokcon' />
			</StyledFooterIcons>
		</StyledFooter>
	);
};

export default Footer;
