// import React, { useState, useEffect } from "react";
import './testimonial.styles.css'
import imgright from '../../assets/girl.png'
import stars from '../../assets/stars.png'
import comma from '../../assets/comma.png'
import authoLogo from '../../assets/athor-logo.png'

const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-wrapper width-80">
                <div className="testimonial-top">
                    <div className="testimonial-subheading">testimonial </div>
                    <div className="testimonial-heading">
                        Check what our clients are saying
                    </div>
                </div>
                <div className="testimonial-content">
                    <div className="testimonial-left">
                        <img src={imgright} alt="" />
                    </div>
                    <div className="testimonial-right">
                        <div className="testimonal-review">
                            <div className="comma">
                                <img src={comma} alt="" />
                            </div>
                            <div className="stars">
                                <img src={stars} alt="" />
                            </div>
                        </div>
                        <div className="testimonal-right-heading">
                            Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
                        </div>

                        <div className="author-wrapper">
                            <div className="author-details">
                                <div className="author-name">AR Shakir</div>
                                <div className="author-desig">CEO GetNextDesign</div>
                            </div>
                            <div className="author-logo">
                                <img src={authoLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Testimonial;