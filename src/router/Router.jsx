import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Challenges from '../pages/challenges/Challenges';
import Home from '../pages/home/Home';

import Challenge from '../pages/challenge/Challenge';
import Profile from '../pages/profile/Profile';
import Ranking from '../pages/ranking/Ranking';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/challenges' element={<Challenges />} />
				<Route path='/challenge/:level/:id' element={<Challenge />} />
				<Route path='/ranking' element={<Ranking />} />
				<Route element={<ProtectedRoute />}>
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
