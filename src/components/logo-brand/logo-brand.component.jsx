import './logo-brand.styles.css'

import logo from '../../assets/Group.png'
import logo1 from '../../assets/Group-1.png'
import logo2 from '../../assets/Group-2.png'
import logo3 from '../../assets/Group-3.png'
import logo4 from '../../assets/Group-4.png'
import logo5 from '../../assets/Group-5.png'
import logo6 from '../../assets/Group-6.png'

const LogoBrand = () => {
    return ( 
        <div className="logobrand-container">
            <div className='logobrand-title width-80' >
            <h2>Over 32k+ software  businesses growing with AR Shakir</h2>
            </div>
            <div className="logbrand-wrapper width-90 mb-20">
                <img className='logbrand-img' src={logo} alt="" />
                <img className='logbrand-img' src={logo1} alt="" />
                <img className='logbrand-img' src={logo2} alt="" />
                <img className='logbrand-img' src={logo3} alt="" />
                <img className='logbrand-img' src={logo4} alt="" />
                <img className='logbrand-img' src={logo5} alt="" />
                <img className='logbrand-img' src={logo6} alt="" />
            </div>
        </div>
     );
}
 
export default LogoBrand;