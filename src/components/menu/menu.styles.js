import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHamburger = styled.img`
	position: absolute;
	top: 2rem;
	right: 1.5rem;
`;

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	position: absolute;
	right: 0;
	top: 80px;
	height: calc(100vh - 80px);
	width: 100%;
	padding: 24px;
	background-color: #fff;
	translate: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};
	transition: translate 0.2s;
`;

const StyledMenuItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;

	&::before {
		content: url(${({ $icon }) => $icon});
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -12px;
		width: 100%;
		height: 1px;
		background-color: ${COLORS.primary};
	}
`;

const StyledLink = styled(NavLink)``;

export { StyledHamburger, StyledLink, StyledMenu, StyledMenuItem };
