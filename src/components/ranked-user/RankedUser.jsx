import { StyledProfileImage } from '../../styles/common';
import { StyledRankedUserContainer } from './ranked-user.styles';

const RankedUser = ({ displayName, projects, photoURL }) => {
	return (
		<StyledRankedUserContainer>
			<div>
				<StyledProfileImage src={photoURL} alt='user profile image ' />
				<span>{displayName}</span>
			</div>
			<span>{projects.length}</span>
		</StyledRankedUserContainer>
	);
};

export default RankedUser;
