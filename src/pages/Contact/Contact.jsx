import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactData } from './data/data';
import { Loader } from '../../components/Loader/Loader';
import LineImg from '../../assets/line.svg';

import './Contact.scss';
import Title from '../../components/Title/Title';

export default function Contact() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1200);
	}, []);

	return loading ? (
		<Loader />
	) : (
		<section className='contact'>
			<Title title="Let's Connect" />
			<div className='contact__links'>
				{contactData.map((item) => {
					return (
						<Link
							key={item.id}
							to={item.path}
							target='_blank'
							className='contact__links__card'
						>
							<img
								src={item.logo}
								alt={item.alt}
								className='contact__links__card__logo'
							/>
							<h4 className='contact__links__card__title'>
								{item.title}
							</h4>
							<p className='contact__links__card__subtitle'>
								{item.subtitle}
							</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
