import { Link } from 'react-router-dom';

import './Button.scss';

export default function Button({ path, type, label }) {
	const buttonClass = `button ${
		type === 'primary' ? 'primary' : 'secondary'
	}`;

	return (
		<Link to={path} className={buttonClass}>
			{label}
		</Link>
	);
}
