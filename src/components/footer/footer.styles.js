import styled from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	box-shadow: 0 -2px 0.25rem rgb(0 0 0 /0.25);
`;

const StyledFooterIcons = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export { StyledFooter, StyledFooterIcons };
