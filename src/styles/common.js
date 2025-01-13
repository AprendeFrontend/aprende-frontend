import styled from 'styled-components';

const StyledMainContainer = styled.main`
	padding: 2.25rem 1.5rem;
	background-image: url(/assets/images/bg-shape-1.svg),
		url(/assets/images/bg-shape-2.svg);
	background-repeat: no-repeat;
	background-position:
		0 0,
		100% 150px;
`;

const StyledProfileImage = styled.img`
	width: 50px;
	border-radius: 50%;
`;

export { StyledMainContainer, StyledProfileImage };
