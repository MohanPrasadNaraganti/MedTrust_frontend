import React from 'react'
import './reviewSlider.css'

function ReviewSlider() {
    return (
        <div>
            <div className="review">
                <h1>What our customers have to say</h1>
                <div className="carousel" data-flickity='{ "wrapAround":true,"autoPlay":true }'>
                    <div className="carousel-cell">
                        <h1>Rohini Roy</h1>
                        <p><q>Very helpful and friendly app in terms of usability and customer support
                                and money saving from the point of medical necessity of every person</q></p>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <div className="carousel-cell">
                        <h1>Sonia</h1>
                        <p><q>Excellent customer service, fast delivery and the packaging of meds were impeccable! Highly satisfied
                                and will definitely recommend</q></p>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <div className="carousel-cell">
                        <h1>Varun chaudhuri</h1>
                        <p><q>Thankyou for such great customer service and quick delivery!</q></p>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                    </div>
                    <div className="carousel-cell">
                        <h1>John Alwyn</h1>
                        <p><q>would recommend it to everyone requiring fast and efficient delivery
                                of medicinal products at doorstep</q></p>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                    </div>
                    <div className="carousel-cell">
                        <h1>Goutham K</h1>
                        <p><q>the app is user friendly and me being an elderly person do not find any
                            any difficulty in using it. they deliver well in time.</q>
                        </p>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReviewSlider
