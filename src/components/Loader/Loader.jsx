import './Loader.scss';
import LogoImg from '../../assets/logo-gx-simple.svg';

export const Loader = () => {
	return (
		<div className='loader'>
			<img src={LogoImg} alt='' className='loader__icon' />
			<h3 className='loader__text'>Cargando...</h3>
		</div>
	);
};
