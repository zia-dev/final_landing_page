import './footer.styles.css'
    const Footer = () => {
        return (
            <div className='footer-container'>
              {/* <span className="footer-bg-gradient">
            
              </span> */}
             <div className='footer-row-wrapper width-80'>
                <div className='footer-column'>
                  <div className='footer-column-content first-column'>
                    <h5 className='footer-title'>AR SHAKIR</h5>
                    <p>Finance helps companies  manage payments easily.</p>
                    <div className="footer-icons">
                    <i class="ft-social-icons fa-brands fa-linkedin-in"></i>
                    <i class="ft-social-icons fa-brands fa-facebook-messenger"></i>
                    <i class="ft-social-icons fa-brands fa-twitter"></i>
                    <i class="ft-social-icons fa-solid fa-infinity"></i>    
                    </div>
                  </div>
                </div>
                <div className='footer-column'>
                  <div className='footer-column-content'>
                    <ul>
                    <h5 className='footer-title'>Company</h5>
                        <li href="#">About Us</li>
                        <li href="#">Careers</li>
                        <li href="#">Blog</li>
                        <li href="#">Pricing</li>
                    </ul>
                  </div>
             </div>
             <div className='footer-column'>
                  <div className='footer-column-content'>
                    <ul>
                    <h5 className='footer-title'>Product</h5>
                        <li>Invoicing</li>
                        <li>Contract</li>
                        <li>Accounting</li>
                        <li>Proposal</li>
                    </ul>
                  </div>
             </div>
             <div className='footer-column'>
                  <div className='footer-column-content'>
                   
                    <ul>
                    <h5 className='footer-title'>Resources</h5>
                        <li>Proposal Template</li>
                        <li>Invoice Template</li>
                        <li>Tutorial</li>
                        <li>How to write a contract</li>
                    </ul>
                  </div>
             </div>
             <div className='footer-column contact-column'>
                  <div className='footer-column-content'>
                    <ul>
                    <h5 className='footer-title'>Contact Us</h5>
                    
                        <li> <i class="fa-solid fa-envelope ft-contact-icon"></i>shakir@gmail.com</li>
                        <li><i class="fa-solid fa-phone  ft-contact-icon" ></i>0300-848-8985</li>
                        
                    </ul>
                  </div>
             </div>
            </div>
            <div className='footer-end-row'>
            <a href="https://github.com/zia-dev/" target="_blank" rel="noopener noreferrer">
                <p>Contact Me <i class="ft-social-icons fa-brands fa-github"></i></p>
                </a>
              </div>
            </div>
          )
    }

export default Footer;