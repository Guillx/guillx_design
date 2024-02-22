import { FaWhatsapp } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaBehanceSquare } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

import './Footer.scss';

export default function Footer() {
	return (
		<footer className='footer'>
			<p>
				© 2024 <span>Guillermo Gil Vázquez</span> | ALL RIGHTS
				RESERVED
			</p>

			<div className='footer__socials'>
				<a
					href='mailto:guillx.design@gmail.com'
					className='footer__socials__link'
					target='_blank'
					rel='noreferrer'
				>
					<BiLogoGmail className='footer__socials__icon' />
				</a>
				<a
					href='https://www.linkedin.com/in/guillermo-gil-vazquez-link'
					className='footer__socials__link'
					target='_blank'
					rel='noreferrer'
				>
					<FaLinkedin className='footer__socials__icon' />
				</a>
				<a
					href='https://api.whatsapp.com/send?phone=34625440474'
					className='footer__socials__link'
					target='_blank'
					rel='noreferrer'
				>
					<FaWhatsapp className='footer__socials__icon' />
				</a>
				<a
					href='https://www.behance.net/guillxgv'
					className='footer__socials__link'
					target='_blank'
					rel='noreferrer'
				>
					<FaBehanceSquare className='footer__socials__icon' />
				</a>
				<a
					href='https://github.com/Guillx'
					className='footer__socials__link'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithubAlt className='footer__socials__icon' />
				</a>
			</div>
		</footer>
	);
}
