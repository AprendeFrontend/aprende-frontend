import { Link } from 'react-router-dom';
import { ICONS } from '../../constants/icons';

const Logo = () => {
	return (
		<Link to='/'>
			<img src={ICONS.LOGO} alt='logo' />
		</Link>
	);
};

export default Logo;
