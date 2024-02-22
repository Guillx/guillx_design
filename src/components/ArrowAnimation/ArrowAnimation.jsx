import { useEffect, useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

import './ArrowAnimation.scss';

export default function ArrowAnimation() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`arrow-animation ${scrolled ? 'hidden' : ''}`}>
			<FaAngleDoubleDown className='arrow-animation__item' />
		</div>
	);
}
