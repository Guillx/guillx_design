import GoogleLogo from '../../../assets/google-logo.png';
import SngularLogo from '../../../assets/sngular-logo.jpg';
import HabLogo from '../../../assets/hab-logo.jpg';
import CbsLogo from '../../../assets/cbs-logo.png';
import { SiCanva } from 'react-icons/si';
import { IoLogoJavascript, IoCameraOutline } from 'react-icons/io5';
import { RiUserSearchLine } from 'react-icons/ri';

import {
	FaCss3Alt,
	FaFigma,
	FaHtml5,
	FaPaintBrush,
	FaReact,
	FaWordpressSimple,
} from 'react-icons/fa';

export const experienceData = [
	{
		id: 1,
		img: SngularLogo,
		alt: 'Sngular Logo',
		date: 'August 2021 - February 2023 | 1 year 6 months',
		type: 'Job',
		title: 'Junior Frontend Developer & UI Designer',
		company: 'Corunet (SNGULAR)',
		location: 'Remote / A Coruña',
		description:
			'I contributed to diverse projects using React JS and Figma, including the development of a design system, building data management apps, and designing the UI for a data visualization website.',
	},
	{
		id: 2,
		img: CbsLogo,
		alt: 'Cartel Crazy Burrito Shack Logo',
		date: 'December 2015 - December 2019 | 4 years',
		type: 'Job',
		title: 'Waiter & Kitchen Assistant',
		company: 'Cartel - Crazy Burrito Shack',
		location: 'Zürich',
		description:
			"All the time I've worked as a cook and waiter has helped me to learn and develop different skills, such as customer service, order management, organization, working under pressure and teamwork.",
	},
];

export const trainingData = [
	{
		id: 1,
		img: GoogleLogo,
		alt: 'Google Logo',
		date: 'July 2023 - February 2024 | 8 months',
		type: 'School',
		title: 'Google UX Design Certificate',
		company: 'Google',
		location: 'Remote',
		description:
			'I completed a UX/UI design course, where I learned to carry out the complete process of designing an application, from the empathy phase to presenting a functional prototype.',
	},

	{
		id: 3,
		img: HabLogo,
		alt: 'Hack a Boss Logo',
		date: 'October 2020 - March 2021 | 6 months',
		type: 'School',
		title: 'Full Stack Web Development Bootcamp',
		company: 'Hack a Boss',
		location: 'Remote',
		description:
			'I completed a full-stack web development bootcamp, where I learned HTML, CSS, JavaScript, Node.js, MySQL, and React, while completing the full development of a web application.',
	},
];

export const designSkillsData = [
	{
		label: 'Figma',
		percentage: '70%',
		icon: <FaFigma />,
	},
	{
		label: 'Canva',
		percentage: '50%',
		icon: <SiCanva />,
	},
	{
		label: 'UI Design',
		percentage: '70%',
		icon: <FaPaintBrush />,
	},
	{
		label: 'UX Research',
		percentage: '50%',
		icon: <RiUserSearchLine />,
	},
];

export const devSkillsData = [
	{
		label: 'HTML',
		percentage: '80%',
		icon: <FaHtml5 />,
	},
	{
		label: 'CSS',
		percentage: '70%',
		icon: <FaCss3Alt />,
	},
	{
		label: 'React JS',
		percentage: '50%',
		icon: <FaReact />,
	},
	{
		label: 'JavaScript',
		percentage: '50%',
		icon: <IoLogoJavascript />,
	},
];

export const softSkillsData = [
	{
		label: 'Empathy',
		percentage: '90%',
	},
	{
		label: 'Attention to Detail',
		percentage: '90%',
	},
	{
		label: 'Creativity',
		percentage: '80%',
	},
	{
		label: 'Critical Thinking',
		percentage: '80%',
	},
];

export const languagesData = [
	{
		label: 'Galician',
		percentage: '100%',
	},
	{
		label: 'Spanish',
		percentage: '100%',
	},
	{
		label: 'English',
		percentage: '70%',
	},
	{
		label: 'Italian',
		percentage: '30%',
	},
];
