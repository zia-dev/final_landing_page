import './button.styles.css'
const BUTTON_TYPE_CLASSES = {
    orangeBtn: 'orangeBtn',
    greenBtn: 'greenBtn',
    largeBtn: 'largeBtn'

}

const Button = ({ children, buttonType, largeBtn }) => {
    // console.log(BUTTON_TYPE_CLASSES,"BUTTON_TYPE_CLASSES[buttonType]");
    return (<button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${largeBtn != null ? BUTTON_TYPE_CLASSES[largeBtn] : ''}`}
    >
        {children}
    </button>
    );
}

export default Button;