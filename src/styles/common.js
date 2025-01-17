import styled from 'styled-components';

const StyledMainContainer = styled.main`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 2.25rem 1.5rem;
	background-image: url(/assets/images/bg-shape-1.svg),
		url(/assets/images/bg-shape-2.svg);
	background-repeat: no-repeat;
	background-position:
		0 0,
		100% 150px;
	line-height: 24px;
`;

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const StyledProfileImage = styled.img`
	width: 50px;
	border-radius: 50%;
`;

const StyledPre = styled.pre`
	font-family: monospace;
	background-color: #2e3440;
	color: #d8dee9;
	padding: 1em;
	border-radius: 8px;
	overflow: auto;
`;

export { StyledMainContainer, StyledPre, StyledProfileImage, StyledSection };
