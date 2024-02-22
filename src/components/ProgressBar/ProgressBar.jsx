import React from 'react';

import './ProgressBar.scss';

export default function ProgressBar({ icon, label, percentage }) {
	return (
		<div className='progress-bar'>
			<div className='progress-bar__item'>
				<div className='progress-bar__item__label-container'>
					{icon ? (
						<span className='progress-bar__item__icon'>{icon}</span>
					) : (
						''
					)}
					<h3 className='progress-bar__item__label'>{label}</h3>
				</div>

				<div className='progress-bar__item__bg-bar'>
					<div
						className='progress-bar__item__progress-bar'
						style={{ width: `${percentage}` }}
					>
						<span className='progress-bar__item__percentage'>
							{percentage}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
