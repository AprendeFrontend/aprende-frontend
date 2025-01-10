import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	padding: 1.5rem;
	box-shadow: 0 2px 0.25rem rgb(0 0 0 /0.25);
	background-color: ${COLORS.grey};
	overflow-x: clip;
`;

export { StyledHeader };
