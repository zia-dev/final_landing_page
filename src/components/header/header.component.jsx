import './header.styles.css'
import Button from '../button/button.component';
// import { ReactComponent as header_img } from '';
import images from '../../assets/s.png';


const Header = () => {
    return (
        <div className="header-container">
            <div className="header-wrapper width-80 mb-20">
                <div className="header-left-wrapper">
                    <p className="header-subtitle">Product Growth Solution in Single Platform</p>
                    <h1 className="header-title">Managing business payments has never  been easier</h1>
                    <p className="header-body-text">Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</p>
                    <Button className='btn' buttonType={'greenBtn'} largeBtn={'largeBtn'}>Try for free</Button>
                
                    <div className="header-bottom-wrapper">
                    <div className="hb-user">
                        <h2>195k+ Users </h2>
                        <p className='header-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente?</p>
                    </div>
                    <div className="hb-saved">
                        <h2>$400m+ save </h2>
                        <p className='header-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente?</p>
                    </div>
                </div>
                </div>

                <div className="header-right-wrapper">
                    <img src={images} alt="" />
                </div>
                
            </div>
        </div>
    );
}

export default Header;