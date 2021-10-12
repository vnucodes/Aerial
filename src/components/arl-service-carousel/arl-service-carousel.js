import { useEffect, useRef, useState } from 'react'
import { Carousel } from '../../../node_modules/bootstrap/dist/js/bootstrap.esm'
import './arl-service-carousel.scss'

function ArlServiceCarousel ({media, serviceId}) {    
    
    const carouselRef = useRef(null)
    const [carousel, setCarousel] = useState({})

    useEffect( () => {

        setCarousel( prevCarousel => {
            return new Carousel(carouselRef.current, {
                interval: false,
                ride: 'carousel',
                wrap: false
            })
        })

    }, [] )

    function prevSlide () {
        carousel.prev()
    }

    function nextSlide () {
        carousel.next()
    }

    return ( 
        <div ref={carouselRef}
        id={`service-carousel-${serviceId}`} 
        className="carousel slide me-3 arl-service-carousel"
        data-bs-ride="carousel">
            <div className="carousel-inner">               

                {
                    media.map( (image, imgIndex) => {
                        return (
                            <div key={image.id} className={`carousel-item ${!imgIndex ? 'active' : ''}`}>
                                <img src={image.src} className="d-block w-100" alt={image.id}/>
                            </div>
                        )
                    })
                }

            </div>
            <button id={`service-carousel-${serviceId}-prev`} className="carousel-control-prev" type="button"
            onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button id={`service-carousel-${serviceId}-next`} className="carousel-control-next" type="button"
            onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default ArlServiceCarousel;