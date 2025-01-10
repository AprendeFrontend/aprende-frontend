import { useContext } from 'react';
import Logout from '../../components/logout/Logout';
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
			<Logout />
		</>
	);
};

export default Profile;
