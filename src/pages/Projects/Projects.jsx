import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import DissentioCover from '../../assets/dissentio-cover.png';
import MayaComponentsCover from '../../assets/maya-components-cover.png';

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
					<a
						href='https://www.behance.net/gallery/190940569/Restaurant-Table-Reservation-App-(UX-Case-Study)'
						className='projects__wrapper__item'
						target='_blank'
						rel='noopener noreferrer'
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
					</a>

					<a
						href='https://www.behance.net/gallery/199004521/UI-Design-System'
						className='projects__wrapper__item'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={MayaComponentsCover}
							alt='Proyecto'
							className='projects__wrapper__item__img'
						/>
						<div className='projects__wrapper__item__overlay'>
							<h3 className='projects__wrapper__item__overlay__title'>
								Maya Components
							</h3>
						</div>
					</a>

					{/* 
					<div className='projects__wrapper__item'>
						<img
							src={ComingSoonCover}
							alt='Proyecto'
							className='projects__wrapper__item__img'
						/>
					</div> */}
				</div>
			</section>
		</>
	);
}
