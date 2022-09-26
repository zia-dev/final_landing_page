import './learn-process.styles.css'
import LearnProcesCard from '../learn-process-card/learn-process-card.component';
// import img1 from '../../assets/ui-checks-grid-1.png';
// import img2 from '../../assets/ui-checks-grid-2.png';
// import img3 from '../../assets/ui-checks-grid-3.png';
// import vUp from '../../assets/vector-upward.png';
import brids from '../../assets/learn-more-wing.png';
// import vDown from '../../assets/vector-downward.png';
const LearnProcess = () => {
    const learnProcess = [
        {
            "id": 1,
            "title": "Register",
            "subtitle": "It more shed went up is roof if loud case. Delay music in lived noise an",
            'img': 'fa-solid fa-user',
            'class_name': 'learnProcess-card-wrapper learnProcessCard-bxshoadow',
            'p_img': null
        },

        {
            "id": 2,
            "title": "Complete Setup",
            // "subtitle": "Beyond genius really enough passed is up. Up maids me an ample stood given.",
            "subtitle": "It more shed went up is roof if loud case. Delay music in lived noise an",
            'img': 'fa-solid fa-gear',
            'class_name': 'learnProcess-card-wrapper',
            'p_img': null,


        },
        {
            "id": 3,
            "title": "Utilize App",
            "subtitle": "It more shed went up is roof if loud case. Delay music in lived noise an.",
            // "subtitle": "Certainty say suffering his him collected intention promotion. Hill sold ham men.",
            'img': 'fa-solid fa-arrows-rotate',
            'class_name': 'learnProcess-card-wrapper',
            'p_img': null,


        },

    ];
    return (
        <div className="learnProcess-container">
            <div className="learnProcess-wrapper ">
                <div className="learnProcess-text-wrapper">
                    <img src={brids} alt="" />
                    <h2 className='learnProcess-title'>Learn More About Process
                    </h2>
                    <p className="learnProcess-subtitle">
                        Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably.
                    </p>
                </div>
                <div className="learnProcessCard-container width-80">
                    {learnProcess.map((learnProces, index) => (

                        <LearnProcesCard key={learnProces.id} learnProces={learnProces} />
                    ))};
                </div>
            </div>
        </div>
    );
}

export default LearnProcess;