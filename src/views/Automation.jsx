import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PortfolioSlider } from '../components/PortfolioSlider';
import { Pricing } from '../components/Pricing';
import '../styles/Global.css';
import '../styles/Hero.css';
import '../styles/Stats.css';
import '../styles/Services.css';
import '../styles/Process.css';
import '../styles/Work.css';
import '../styles/Reviews.css';
import '../styles/FAQ.css';
import { initInteractions } from "../script/script.js";
import { useEffect } from 'react';
import sample1 from '../assets/sample1.png';
import sample2 from '../assets/sample2.png';
import sample3 from '../assets/sample3.png';

function Automation() {
    useEffect(() => {
        const cleanup = initInteractions();
        return cleanup;
    }, []);

    const portfolioSlides = [
        {
            type: 'portfolio',
            image: sample1,
            title: 'CRM Integration',
            category: 'Sales Automation'
        },
        {
            type: 'portfolio',
            image: sample2,
            title: 'Email Sequences',
            category: 'Marketing'
        },
        {
            type: 'portfolio',
            image: sample3,
            title: 'Chatbot Setup',
            category: 'Customer Support'
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
                                <span className="underline-style">Streamline Work.</span><br />
                                <span className="underline-style">Automate Success.</span>
                            </h1>
                            <p>Eliminate repetitive tasks and scale your business with intelligent automation solutions custom-built for your needs.</p>

                            <div className="hero-side-list">
                                <div className="list-item active">
                                    <div className="bar"></div>
                                    <span>Workflow Automation</span>
                                </div>
                                <div className="list-item">
                                    <span>AI Integration</span>
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
                    <h1>Automation Success Stories</h1>

                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>
                                The automation systems implemented by Vertex have <strong>saved us countless hours</strong>.
                                We can now focus on strategy rather than busy work.
                            </p>
                            <div className="author">
                                <strong>Sarah Jenkins</strong>
                                <span>COO @ TechFlow</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>
                                Vertex <strong>transformed our operations</strong>. The CRM integration works flawlessly,
                                and our sales team is more efficient than ever.
                            </p>
                            <div className="author">
                                <strong>Mark Thompson</strong>
                                <span>Founder @ ScaleUp</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>
                                <strong>Highly recommended!</strong> The automated email sequences have increased our
                                engagement significantly. Professional and effective service.
                            </p>
                            <div className="author">
                                <strong>Elena Rodriguez</strong>
                                <span>Marketing Director @ CreativeCo</span>
                            </div>
                        </div>

                        <div className="review-card mini-review">
                            <p><strong>Huge time saver</strong>, and very easy to work with!</p>
                            <div className="author">
                                <strong>David Chen</strong>
                                <span>CTO @ NextGen</span>
                            </div>
                        </div>

                        <div className="review-card mini-review">
                            <p>
                                <strong>Seamless integration</strong> of our tools.
                            </p>
                            <div className="author">
                                <strong>Alex Wright</strong>
                                <span>Product Manager</span>
                            </div>
                        </div>

                        <div className="review-card mini-review">
                            <p><strong>Best investment</strong> we made this year.</p>
                            <div className="author">
                                <strong>Lisa Wong</strong>
                                <span>CEO @ GrowthLabs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Portfolio Slider */}
            <PortfolioSlider
                title="Our Work"
                subtitle="Automation Projects"
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
                            <h4>Audit & Strategy</h4>
                            <p>We analyze your current workflows to identify bottlenecks and opportunities.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">02</div>
                            <h4>Design Solution</h4>
                            <p>We map out a custom automation architecture tailored to your goals.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">03</div>
                            <h4>Implementation</h4>
                            <p>We build, integrate, and test the automation systems thoroughly.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">04</div>
                            <h4>Optimize & Scale</h4>
                            <p>We monitor performance and refine the system for maximum efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <Pricing />

            {/* FAQ Section */}
            <section className="faq" id="faq">
                <div className="container">
                    <div className="faq-layout">
                        <div className="faq-header-column">
                            <h2>FAQs</h2>
                        </div>

                        <div className="faq-items-column">
                            <div className="faq-item">
                                <div className="faq-question">
                                    What tools do you automate?
                                    <div className="toggle-icon"></div>
                                </div>
                                <div className="faq-answer">
                                    We work with major platforms like Zapier, Make (Integromat), Slack, HubSpot, Salesforce, and custom APIs.
                                </div>
                            </div>

                            <div className="faq-item">
                                <div className="faq-question">
                                    Is it secure?
                                    <div className="toggle-icon"></div>
                                </div>
                                <div className="faq-answer">
                                    Yes, we follow best security practices and ensure data integrity across all integrations.
                                </div>
                            </div>

                            <div className="faq-item">
                                <div className="faq-question">
                                    How long does setup take?
                                    <div className="toggle-icon"></div>
                                </div>
                                <div className="faq-answer">
                                    Timeline varies by complexity, but most initial setups are completed within 2 weeks.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Automation;
