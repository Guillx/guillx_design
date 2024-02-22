import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import DissentioCover from '../../assets/dissentio-cover.png';
import ComingSoonCover from '../../assets/coming-soon-cover.png';

import './Projects.scss';
import Title from '../../components/Title/Title';

export default function Projects() {
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
			<section className='projects'>
				<Title title='Projects' />
				<div className='projects__wrapper'>
					<Link
						to='https://www.behance.net/gallery/190940569/Restaurant-Table-Reservation-App-(UX-Case-Study)'
						className='projects__wrapper__item'
						target='_blank'
					>
						<img
							src={DissentioCover}
							alt='Proyecto'
							className='projects__wrapper__item__img'
						/>
						<div className='projects__wrapper__item__overlay'>
							<h3 className='projects__wrapper__item__overlay__title'>
								Dissentio
							</h3>
						</div>
					</Link>
					<div className='projects__wrapper__item'>
						<img
							src={ComingSoonCover}
							alt='Proyecto'
							className='projects__wrapper__item__img'
						/>
					</div>
				</div>
			</section>
		</>
	);
}
