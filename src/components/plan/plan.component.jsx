import './plan.styles.css';
import PLANS from '../../plan-data.json'
import PlanCard from '../plan-card/plan-card.component';

const Plan = () => {
    return (
        <div className="plan-container mb-20">
            
            <div className="plan-wrapper">
                <div className="plan-text">
                    <div className="plan-heading">
                    Start today, with free or premium plan, you choose
                    </div>
                    <div className="plan-subheading">
                    With lots of unique and useful features, you can easily manage your wallet easily without any problem.
                    </div>
                </div>
                <div className="plan-card-container">
                <span className={'pricing-background'}>
                </span>
                    {PLANS.map((plan) => (

                        <PlanCard key={plan.id} plan={plan} />
                    ))};
                </div>
            </div>
        </div>
    );
}

export default Plan;