import LineImg from '../../assets/line.svg';

import './Title.scss';

export default function Title({ title }) {
	return (
		<div className='title'>
			<h1 className='title__label'>{title}</h1>
			<img src={LineImg} className='title__line' alt='' />
		</div>
	);
}
