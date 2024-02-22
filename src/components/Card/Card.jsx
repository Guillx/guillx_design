import GoogleLogo from '../../assets/google-logo.png';
import { IoMdBriefcase } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';

import './Card.scss';

export default function Card({
	img,
	alt,
	date,
	type,
	title,
	level,
	company,
	location,
	description,
}) {
	return (
		<div className='card'>
			<div className='card__logo'>
				<img src={img} alt={alt} />
			</div>
			<div className='card__content'>
				{date && <h4 className='card__content__date'>{date}</h4>}

				<h2 className='card__content__title'>{title}</h2>

				<div
					style={{
						width: '100%',
						display: 'flex',
						gap: '24px',
						justifyContent: 'center',
					}}
				>
					{company && (
						<p className='card__content__company'>
							<IoMdBriefcase />
							{company}
						</p>
					)}
					{location && (
						<p className='card__content__location'>
							<FaLocationDot />
							{location}
						</p>
					)}
				</div>
				<p className='card__content__description'>{description}</p>
			</div>
		</div>
	);
}
