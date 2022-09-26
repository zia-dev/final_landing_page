import './discover.styles.css';
import Button from '../button/button.component'

const Discover = () => {
    return ( 
        <div className="discover-container mb-8">
            <div className="discover-wrapper width-80">
                <span className="dotted"></span> 
                <span className="dotted-vertical"></span>
                <span className="dotted-horizontal"></span>
                <div className="discover-text">
                Discover a better way to manage purchases
                </div>
                <Button buttonType={'orangeBtn'} largeBtn={'largeBtn'}>Get Started Now</Button>
            </div>
        </div>
     );
}
 
export default Discover;