import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MENU_ICONS, MENU_ITEMS } from '../../constants/menu';
import { AuthContext } from '../../contexts/Auth.context';
import Login from '../login/Login';
import Logout from '../logout/Logout';
import {
	StyledHamburger,
	StyledLink,
	StyledMenu,
	StyledMenuItem
} from './menu.styles';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { currentUser, loading } = useContext(AuthContext);
	const { pathname } = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [currentUser, pathname]);

	const menuImage = isOpen
		? '/assets/images/cross.svg'
		: '/assets/images/hamburger.svg';

	return (
		<>
			<StyledHamburger
				src={menuImage}
				alt='menu icon'
				onClick={() => setIsOpen(!isOpen)}
			/>
			<nav>
				<StyledMenu $isOpen={isOpen}>
					{MENU_ITEMS.map(item => (
						<StyledMenuItem key={item.id} $icon={item.icon}>
							<StyledLink to={item.path} onClick={() => setIsOpen(false)}>
								{item.text}
							</StyledLink>
						</StyledMenuItem>
					))}
					{!currentUser && !loading && <Login />}
					{currentUser && !loading && (
						<>
							<StyledMenuItem $icon={MENU_ICONS.PROFILE}>
								<StyledLink to='/profile' onClick={() => setIsOpen(false)}>
									Profile
								</StyledLink>
							</StyledMenuItem>
							<Logout />
						</>
					)}
				</StyledMenu>
			</nav>
		</>
	);
};

export default Menu;
