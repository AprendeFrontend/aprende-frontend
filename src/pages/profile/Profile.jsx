import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const username = currentUser?.reloadUserInfo.screenName;
	const profileImage = currentUser?.reloadUserInfo.photoUrl;
	return (
		<>
			<h1>PROFILE</h1>
			<img src={profileImage} alt='' />
			<span>{username}</span>
		</>
	);
};

export default Profile;
