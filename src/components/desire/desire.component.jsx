import girl from '../../assets/girl.png';
import './desire.styles.css';
import Button from '../button/button.component';

const Desire = () => {
    return (
        <div className="desire-container mb-20">
            <div className="desire-wrapper width-80">
                <div className="desire-left">
                    <img src={girl} alt="" />
                </div>
                <div className="desire-right">
                    <div className="dr-title">
                        My little garret repair to desire he esteem.
                    </div>
                    <div className="dr-subtitle">
                        Just like we said before, we have tons of features that will helps you to manage you wallet. From income, outcome, montly usage, and etc.
                    </div>
                    <div className="dr-btn">
                        <Button buttonType={'greenBtn'} largeBtn={'largeBtn'}>
                            Try for free
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desire;