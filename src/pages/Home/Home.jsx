import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
import LineImg from '../../assets/line.svg';
import BlobBackground from '../../assets/blob.png';
import { FaCircle } from 'react-icons/fa';

import './Home.scss';

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1200);
	}, []);

	return loading ? (
		<Loader />
	) : (
		<section className='home' id='home'>
			<img src={BlobBackground} alt='' className='home__blob' />
			<img src={BlobBackground} alt='' className='home__blob2' />
			<img src={BlobBackground} alt='' className='home__blob3' />
			<img src={BlobBackground} alt='' className='home__blob4' />
			<div className='home__landing'>
				<div className='home__subtitle'>
					<h3 className='home__subtitle__text-item'>Guille</h3>
					<FaCircle className='home__subtitle__icon' />
					<h3 className='home__subtitle__text-item'>
						UX & UI Designer
					</h3>
					<FaCircle className='home__subtitle__icon' />
					<h3 className='home__subtitle__text-item'>
						Frontend developer
					</h3>
					<img
						src={LineImg}
						className='home__subtitle__line'
						alt=''
					/>
				</div>

				<div className='home__title'>
					<h1 className='home__title__text-item'>Portfolio</h1>
					<h3 className='home__title__date'>2024</h3>
				</div>

				<div className='home__buttons'>
					<Button type='primary' path='/projects' label='Projects' />
					<Button type='secondary' path='/contact' label='Contact' />
				</div>
			</div>
		</section>
	);
}
