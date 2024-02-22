import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { Loader } from './components/Loader/Loader';

import './App.scss';
import Footer from './components/Footer/Footer';

function App() {
	const location = useLocation();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1200);
	}, []);

	return loading ? (
		<Loader />
	) : (
		<>
			<Navbar />

			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
