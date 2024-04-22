import { useEffect, useState } from 'react';
import ProfilePic from '../../assets/me.jpeg';
import Title from '../../components/Title/Title';
import ArrowAnimation from '../../components/ArrowAnimation/ArrowAnimation';
import Card from '../../components/Card/Card';
import { Loader } from '../../components/Loader/Loader';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { FaGithubAlt } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { experienceData, trainingData } from './data/data';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {
	designSkillsData,
	devSkillsData,
	languagesData,
	softSkillsData,
} from './data/data';

import './About.scss';

export default function About() {
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState('experience');

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1200);
	}, []);

	return loading ? (
		<Loader />
	) : (
		<>
			<section className='about'>
				<div className='about__personal'>
					<div className='about__personal__img'>
						<img src={ProfilePic} alt='' />
					</div>

					<div className='about__personal__description'>
						<Title title='Description' />
						<p className='about__personal__description__text'>
							Hey there! &#128075; I'm <span>Guille</span>, a UX/UI
							Designer and Frontend Developer based in A Coruña,
							Galicia with a passion for creating solutions that
							simplify user tasks. I particularly enjoy working on
							visual design and web layout, transforming ideas into
							beautiful and user-friendly products, but I I also love
							the UX research process: talking to users, empathizing
							with them, and creating solutions that adapt to the
							widest number of people.
							<br /> Beyond technology, I love traveling, taking walks
							in nature and everything related to art and music. I
							play traditional galician percussion and I plan to learn
							how to play piano soon.
						</p>
						<div className='about__personal__description__socials'>
							<a
								href='mailto:guillx.design@gmail.com'
								className='about__personal__description__socials__link'
								target='_blank'
								rel='noreferrer'
							>
								<BiLogoGmail className='about__personal__description__socials__icon' />
							</a>
							<a
								href='https://www.linkedin.com/in/guillermo-gil-vazquez-link'
								className='about__personal__description__socials__link'
								target='_blank'
								rel='noreferrer'
							>
								<FaLinkedinIn className='about__personal__description__socials__icon' />
							</a>
							<a
								href='https://api.whatsapp.com/send?phone=34625440474'
								className='about__personal__description__socials__link'
								target='_blank'
								rel='noreferrer'
							>
								<SiWhatsapp className='about__personal__description__socials__icon' />
							</a>
							<a
								href='https://www.behance.net/guillxgv'
								className='about__personal__description__socials__link'
								target='_blank'
								rel='noreferrer'
							>
								<FaBehance className='about__personal__description__socials__icon' />
							</a>
							<a
								href='https://github.com/Guillx'
								className='about__personal__description__socials__link'
								target='_blank'
								rel='noreferrer'
							>
								<FaGithubAlt className='about__personal__description__socials__icon' />
							</a>
						</div>
					</div>
				</div>

				<ArrowAnimation />
				<Title title='Experience' />
				<div className='about__tabs'>
					<button
						className={`about__tabs__tab ${
							activeTab === 'experience' ? 'active' : ''
						}`}
						onClick={() => handleTabChange('experience')}
					>
						Work
					</button>
					<button
						className={`about__tabs__tab ${
							activeTab === 'training' ? 'active' : ''
						}`}
						onClick={() => handleTabChange('training')}
					>
						Training
					</button>
				</div>

				<div className='about__experience'>
					{activeTab === 'experience' && (
						<div className='about__experience__cards'>
							{experienceData.map((item, index) => (
								<Card
									key={item.id}
									index={item.id}
									img={item.img}
									alt={item.alt}
									date={item.date}
									type={item.type}
									title={item.title}
									company={item.company}
									location={item.location}
									description={item.description}
								/>
							))}
						</div>
					)}
				</div>

				<div className='about__training'>
					{activeTab === 'training' && (
						<div className='about__training__cards'>
							{trainingData.map((item, index) => (
								<Card
									key={item.id}
									index={item.id}
									img={item.img}
									alt={item.alt}
									date={item.date}
									type={item.type}
									title={item.title}
									company={item.company}
									location={item.location}
									description={item.description}
								/>
							))}
						</div>
					)}
				</div>

				<div style={{ marginTop: '80px' }}>
					<Title title='Tools & Skills' />
				</div>
				<div className='about__skills-wrapper'>
					<div className='about__skills'>
						<h2 className='about__skills__title'>
							<MdKeyboardDoubleArrowRight className='about__skills__title__icon' />
							<span className='about__skills__title__text'>
								Design Skills
							</span>
						</h2>
						{designSkillsData.map((item) => {
							return (
								<ProgressBar
									key={item.id}
									icon={item.icon}
									label={item.label}
									percentage={item.percentage}
								/>
							);
						})}
					</div>

					<div className='about__skills'>
						<h2 className='about__skills__title'>
							<MdKeyboardDoubleArrowRight className='about__skills__title__icon' />
							<span className='about__skills__title__text'>
								Dev Skills
							</span>
						</h2>
						{devSkillsData.map((item) => {
							return (
								<ProgressBar
									icon={item.icon}
									label={item.label}
									percentage={item.percentage}
								/>
							);
						})}
					</div>

					<div className='about__skills'>
						<h2 className='about__skills__title'>
							<MdKeyboardDoubleArrowRight className='about__skills__title__icon' />
							<span className='about__skills__title__text'>
								Soft Skills
							</span>
						</h2>
						{softSkillsData.map((item) => {
							return (
								<ProgressBar
									icon={item.icon}
									label={item.label}
									percentage={item.percentage}
								/>
							);
						})}
					</div>

					<div className='about__skills'>
						<h2 className='about__skills__title'>
							<MdKeyboardDoubleArrowRight className='about__skills__title__icon' />
							<span className='about__skills__title__text'>
								Languages
							</span>
						</h2>
						{languagesData.map((item) => {
							return (
								<ProgressBar
									icon={item.icon}
									label={item.label}
									percentage={item.percentage}
								/>
							);
						})}
					</div>
				</div>

				<div className='about__languages'>
					{activeTab === 'languages' && (
						<div className='about__skills__cards'>
							{languagesData.map((item, index) => (
								<div
									key={item.id}
									className='about__skills__cards__card'
								>
									<img
										src={item.img}
										alt={item.alt}
										className='about__skills__cards__card__logo'
									/>
									<h2 className='about__skills__cards__card__title'>
										{item.title}
									</h2>
									<span className='about__skills__cards__card__level'>
										{item.level}
									</span>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
}
