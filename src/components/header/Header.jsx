import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import { StyledHeader } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Menu />
		</StyledHeader>
	);
};

export default Header;
