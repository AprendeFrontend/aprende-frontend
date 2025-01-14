import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Challenges from '../pages/challenges/Challenges';
import Home from '../pages/home/Home';

import Challenge from '../pages/challenge/Challenge';
import Profile from '../pages/profile/Profile';
import Roadmap from '../pages/roadmap/Roadmap';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/challenges' element={<Challenges />} />
				<Route path='/challenge/:level/:id' element={<Challenge />} />
				<Route path='/roadmap' element={<Roadmap />} />
				<Route element={<ProtectedRoute />}>
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Route>
			<Route path='*' element={<Home />} />
		</Routes>
	);
};

export default Router;
