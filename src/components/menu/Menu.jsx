import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ICONS } from '../../constants/icons';
import { MENU_ITEMS } from '../../constants/menu';
import { AuthContext } from '../../contexts/Auth.context';
import { logout } from '../../utils/auth-functions';
import Login from '../login/Login';
import {
	StyledHamburger,
	StyledLink,
	StyledMenu,
	StyledMenuItem
} from './menu.styles';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { areUser } = useContext(AuthContext);
	const { pathname } = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [areUser, pathname]);

	const menuImage = isOpen ? ICONS.CROSS : ICONS.HAMBURGER;

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
						<StyledMenuItem key={item.id}>
							<StyledLink
								to={item.path}
								$icon={item.icon}
								onClick={() => setIsOpen(false)}
							>
								{item.text}
							</StyledLink>
						</StyledMenuItem>
					))}
					{!areUser && <Login />}
					{areUser && (
						<>
							<StyledMenuItem>
								<StyledLink
									to='/profile'
									$icon={ICONS.PROFILE}
									onClick={() => setIsOpen(false)}
								>
									Perfil
								</StyledLink>
							</StyledMenuItem>
							<StyledMenuItem>
								<StyledLink to='/profile' $icon={ICONS.LOGOUT} onClick={logout}>
									Cerrar Sesión
								</StyledLink>
							</StyledMenuItem>
						</>
					)}
				</StyledMenu>
			</nav>
		</>
	);
};

export default Menu;
