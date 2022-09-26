import './manage-app.styles.css'
import Button from '../button/button.component';
const ManageApp = () => {
    return (
        <div className="manage-app-container">
            <div className="manage-app-wrapper width-80">
                <div className="manage-app-text">
                    <div className="manage-app-subtitle bg-red">Project Management App</div>
                    <div className="manage-app-title">Download our app and start your free trail to get started today!</div>
                    <div className="manage-app-subtitle">End-to-end payments and financial management in a single solution.</div>
                </div>
                <div className="manage-app-btn-wrapper">
                    <Button buttonType={'greenBtn'} largeBtn={'largeBtn'}>
                        <i className="btn-fa-icons fa-brands fa-apple"></i> PlayStore
                    </Button>
                    <Button buttonType={'orangeBtn'} largeBtn={'largeBtn'}>
                        <i className="btn-fa-icons fa-brands fa-google-play"></i> GooglePlay
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ManageApp;