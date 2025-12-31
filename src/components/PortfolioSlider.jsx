import { useEffect, useRef } from 'react';
import { initSlider } from './Slider';
import '../styles/slider.css';

export const PortfolioSlider = ({ title = "Our Work", subtitle = "Our Portfolio", slides }) => {
    const sliderRef = useRef(null);
    useEffect(() => {
        const cleanup = initSlider(sliderRef.current);
        return cleanup;
    }, []);

    return (
        <section className="portfolio-slider" ref={sliderRef}>
            <div className="container">
                <div className="portfolio-header">
                    <h3>{title}</h3>
                    <h2>{subtitle}</h2>
                </div>
                <div className="slider-container">
                    <div className="slider-track">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`portfolio-card ${index === 1 ? 'active' : ''}`}
                            >
                                {slide.type === 'review' ? (
                                    <div className="card-content">
                                        <div className="review-card">
                                            <div className="stars">★★★★★</div>
                                            <p dangerouslySetInnerHTML={{ __html: slide.content }}></p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="card-image">
                                            <img src={slide.image} alt={slide.title} />
                                        </div>
                                        <div className="card-content">
                                            <h3>{slide.title}</h3>
                                            <p>{slide.category}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slider-controls">
                    <button className="slider-arrow prev-btn" aria-label="Previous Slide">←</button>
                    <div className="slider-dots-container"></div>
                    <button className="slider-arrow next-btn" aria-label="Next Slide">→</button>
                </div>
            </div>
        </section>
    );
};
