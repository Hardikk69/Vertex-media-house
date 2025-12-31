import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PortfolioSlider } from '../components/PortfolioSlider';
import { Pricing } from '../components/Pricing';
import '../styles/Style.css';

function PitchDeck() {
    const reviewSlides = [
        {
            type: 'review',
            content: '"I had a <strong>great experience</strong> working with Vertex. He was <strong>professional, responsive, and very patient</strong> throughout the process, even as the scope evolved. He took my feedback seriously... What stood out most was his willingness to collaborate."'
        },
        {
            type: 'review',
            content: '"[Vertex] was super easy to work with and delivered <strong>exactly what I needed</strong>—a clean, professional pitch deck that matched my vision and branding. <strong>Communication was smooth</strong>... I highly recommend if you\'re looking for someone who can bring clarity and polish to your ideas."'
        },
        {
            type: 'review',
            content: '"[Vertex] <strong>immediately grasped what we are trying to achieve as a company</strong> and delivered the slide decks for both end users and investors. Very professional and responsive. Looking forward to collaborate on other projects."'
        }
    ];

    const portfolioSlides = [
        {
            type: 'portfolio',
            image: '../assets/sample1.png',
            title: 'Business Proposal',
            category: 'Corporate Finance'
        },
        {
            type: 'portfolio',
            image: '../assets/sample2.png',
            title: 'Investor Pitch Deck',
            category: 'Real Estate'
        },
        {
            type: 'portfolio',
            image: '../assets/sample3.png',
            title: 'Sales Strategy',
            category: 'Marketing'
        }
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container hero-container">
                    <div className="hero-grid">
                        <div className="hero-text-content">
                            <h1>
                                <span className="underline-style">Creative Solutions.</span><br />
                                <span className="underline-style">Smart Automation.</span>
                            </h1>
                            <p>Helping brands and creators reach their highest point through design, editing, and technology.</p>

                            <div className="hero-side-list">
                                <div className="list-item active">
                                    <div className="bar"></div>
                                    <span>Pitch Deck Design</span>
                                </div>
                                <div className="list-item">
                                    <span>Video Editing for creators</span>
                                </div>
                            </div>

                            <button className="btn btn-white hero-cta">Book a Discovery Call</button>
                        </div>

                        <div className="hero-visual">
                            <div className="visual-shape"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews" id="reviews">
                <div className="container">
                    <h2>Our Reviews</h2>
                    <h1>Trusted By Our Clients</h1>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>"I had a <strong>great experience</strong> working with Vertex. He was <strong>professional,
                                responsive, and very patient</strong> throughout the process, even as the scope evolved. He
                                took my feedback seriously... What stood out most was his willingness to collaborate."</p>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>"[Vertex] was super easy to work with and delivered <strong>exactly what I needed</strong>—a
                                clean, professional pitch deck that matched my vision and branding. <strong>Communication was
                                    smooth</strong>... I highly recommend if you're looking for someone who can bring clarity
                                and polish to your ideas."</p>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>"[Vertex] <strong>immediately grasped what we are trying to achieve as a company</strong> and
                                delivered the slide decks for both end users and investors. Very professional and responsive.
                                Looking forward to collaborate on other projects."</p>
                        </div>
                        <div className="review-card mini-review">
                            <p><strong>Very professional</strong>, love to work with him!</p>
                        </div>
                        <div className="review-card mini-review">
                            <p>A wonderfully <strong>quick and accurate delivery</strong>. Will beyond expectations.</p>
                        </div>
                        <div className="review-card mini-review">
                            <p>A wonderfully <strong>quick and accurate delivery</strong>. Will beyond expectations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Slider */}
            <PortfolioSlider
                title="Our Work"
                subtitle="Our Portfolio"
                slides={portfolioSlides}
            />

            {/* Process Section */}
            <section className="process" id="process">
                <div className="container">
                    <h2>Our Process</h2>
                    <div className="process-steps">
                        <div className="process-line"></div>
                        <div className="step">
                            <div className="step-number">01</div>
                            <h4>Subscribe & get started</h4>
                            <p>Submit as many requests as you want for a fixed monthly fee.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">02</div>
                            <h4>Receive your designs</h4>
                            <p>Get your designs within a few days on average.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">03</div>
                            <h4>Revise until perfect</h4>
                            <p>We'll revise the designs until you're 100% satisfied.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">04</div>
                            <h4>Scale your business</h4>
                            <p>Use your new assets to grow your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <Pricing />

            {/* FAQ Section */}
            <section className="faq" id="faq">
                <div className="container">
                    <div className="faq-list">
                        <h2>FAQs</h2>
                        <div className="faq-item">
                            <div className="faq-question">How many years of experience do you have? <div className="toggle-icon"></div>
                            </div>
                            <div className="faq-answer">We have significant experience in delivering high-quality design and tech
                                solutions.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">Do you treat every project with importance? <div className="toggle-icon"></div>
                            </div>
                            <div className="faq-answer">We treat every project with the utmost importance and dedication.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">What is your process like? <div className="toggle-icon"></div>
                            </div>
                            <div className="faq-answer">Our process is streamlined for efficiency and quality.</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default PitchDeck;
