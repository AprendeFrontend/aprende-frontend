import { useContext } from 'react';
import Logout from '../../components/logout/Logout';
import { AuthContext } from '../../contexts/Auth.context';

const Profile = () => {
	const { username, profileImage } = useContext(AuthContext);

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
