import './learn-process-card.styles.css'

// const img = '../../assets/ui-checks-grid-'

const LearnProcesCard = ({ learnProces }) => {
    const { id, title, img, subtitle } = learnProces;

    return (
        <div className={'learnProcessCard-wrapper'}>
            <div className="learnProcessCard-circle">{id}</div>
            <div className="learnProcessCard-img learnProcessCard-bxshoadow">
                <i class={`font-awsome-size ${img}`}></i>
            </div>
            <div className="learnProcessCard-title">{title}</div>
            <div className="learnProcessCard-subtitle">
              <p> {subtitle}</p> 
                </div>
        </div>

    );



}

export default LearnProcesCard;