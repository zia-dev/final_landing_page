import './service.styles.css'
import ServiceCard from '../service-card/service-card.component';
import img1 from '../../assets/ui-checks-grid-1.png';
import img2 from '../../assets/ui-checks-grid-2.png';
import img3 from '../../assets/ui-checks-grid-3.png';
import img4 from '../../assets/ui-checks-grid-4.png';
import img5 from '../../assets/ui-checks-grid-5.png';
import img6 from '../../assets/ui-checks-grid-6.png';
import img7 from '../../assets/ui-checks-grid-7.png';
const Service = () => {
    const services = [
        {
            "id": 1,
            "title": "Project Management",
            "subtitle": "30 options available",
            'img': img1,
            'bgColor': 'service-card-wrapper'
        },
        {
            "id": 2,
            "title": "Web & Mobile Developement",
            "subtitle": "40 options available",
            'img': img2,
            'bgColor': 'service-card-wrapper'

        },
        {
            "id": 3,
            "title": "Customer Support",
            "subtitle": "17 options available",
            'img': img3,
            'bgColor': 'service-card-wrapper'


        },
        {
            "id": 4,
            "title": "Human Resources",
            "subtitle": "21 options available",
            'img': img4,
            'bgColor': 'service-card-wrapper'


        },

        {
            "id": 5,
            "title": "Design & Creatives",
            "subtitle": "13 options available",
            'img': img5,
            'bgColor': 'service-card-wrapper'


        },
        {
            "id": 6,
            "title": "Marketing & Communication",
            "subtitle": "27 options available",
            'img': img6,
            'bgColor': 'service-card-wrapper'


        },

        {
            "id": 7,
            "title": "Business Development",
            "subtitle": "22 options available",
            'img': img7,
            'bgColor': 'service-card-wrapper'


        },
        {
            "id": 8,
            "title": "4+ More",
            "subtitle": "170+ options available",
            'img': null,
            'bgColor': 'service-card-wrapper bgColor'


        },

    ]
    return (
        <div className="servicebox-container">
            <div className='bg-vector'></div>
            <div className="servicebox-wrapper ">
                <div className="servicebox-text-wrapper">
                    <p className="subtitle">
                        Our services
                    </p>
                    <h2 className='title'>Save Time Managing Your Business With Our Best Services</h2>
                </div>
                <div className="service-card-container">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))};
                </div>
            </div>
        </div>
    );
}

export default Service;