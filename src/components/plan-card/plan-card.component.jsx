import './plan-card.styles.css'
const PlanCard = ({ plan }) => {
    const { id, planName, price, description, btn, clasName } = plan;
    console.log(plan.lists);
    // console.log(lists);
    return (
        <>
            <div className={clasName}>
            <span className={`${(price == '$0') ? 'basic-black-btn' : 'black-btn' }`}>
            Best choice
                </span>
                <div className="plan-type">{planName}</div>
                <div className="plan-price">{`${price}`} <span className='plan-month'>Per month</span></div>
                <div className={`${(price == '$0') ? 'greyColor' : ''} plan-description`}>{description}</div>
                <div className="plan-list">
                    {plan.lists.map((list, key) => {
                        return (
                            <ul className={`${(price == '$0') ? 'greyColor' : 'pro'} lists`}

                                id={`${(price == '$0') ? 'basic-list-' + key : 'pro-list-' + key}`}

                                key={key}>
                                <li>{list.first}</li>
                                {/* <li></li> */}
                            </ul>
                        )
                    })}
                </div>
                <div className={`${(price == '$0') ? 'basic-btn' : 'pro-btn'} plan-btn`}>
                    {btn}
                </div>
            </div>
        </>
    );
}

export default PlanCard;