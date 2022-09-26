import './service-card.styles.css'

const ServiceCard = ({ service })    => {
    const { title, img, subtitle, bgColor } = service;

    return (
        <div className={bgColor}>
            {img ?
                (
                    <div className="service-card-img">
                        <img src={img} alt={`${title}`} />
                    </div>
                ) : ''
            }
            <div className="service-card-title">{title}</div>
            <div className="service-card-subtitle">{subtitle}</div>
        </div>

    );



}

export default ServiceCard;