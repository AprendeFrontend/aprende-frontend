import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { StyledLayout } from './layout.styles';

const Layout = () => {
	return (
		<StyledLayout>
			<Header />
			<Outlet />
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
