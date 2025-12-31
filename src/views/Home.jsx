import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import FloatingLines from '../components/FloatingLines';
import '../styles/style.css'
import { Footer } from '../components/Footer'
import { initInteractions } from "../script/script.js";

function Home() {
    useEffect(() => {
        const cleanup = initInteractions();
        return cleanup;
    }, []);

    return (
        <>

            <Navbar />
            <section className="hero" id="home">
                <div className="hero-bg">
                    <FloatingLines
                        lineCount={5}
                        lineDistance={100}
                        bendRadius={1}
                        bendStrength={-1.5}
                    />
                </div>
                <div className="container hero-container">
                    <div className="hero-grid">
                        <div className="hero-text-content">
                            <h1>
                                <span className="underline-style">Creative Solutions.</span><br />
                                <span className="underline-style">Smart Automation.</span>
                            </h1>
                            <p>Helping brands and creators reach their highest point through design, editing, and technology.
                            </p>

                            <div className="hero-side-list">
                                <div className="list-item active">
                                    <div className="bar"></div>
                                    <span><a href="#/pitch-deck">Pitch Deck Design</a></span>
                                </div>
                                <div className="list-item">
                                    <span><a href="#/video-editing">Video Editing for creators</a></span>
                                </div>
                            </div>

                            <button className="btn btn-white hero-cta">Book a Discovery Call</button>
                        </div>

                        <div className="hero-visual">
                            {/* <!-- Visual/Graphic Element --> */}
                            <div className="visual-shape"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats">
                <div className="container stats-grid">
                    <div className="stat-card">
                        <h3>Strategy-First Approach</h3>
                        <p>Every project starts with understanding your goals, audience, and business objectives.</p>
                    </div>
                    <div className="stat-card">
                        <h3>Creative + Technical</h3>
                        <p>Perfect blend of research-driven creative with technical excellence.</p>
                    </div>
                    <div className="stat-card">
                        <h3>Fast Turnaround</h3>
                        <p>Quick iterations using AI to ensure timely delivery without compromising quality.</p>
                    </div>
                </div>
            </section>

            {/* <!-- Services Section --> */}
            <section className="services" id="services">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="services-container">
                        {/* <!-- Service 1: Pitch Deck (Active initially) --> */}
                        <div className="service-card active" data-id="pitch-deck">
                            <div className="service-header">
                                <h3>Pitch Deck Designing</h3>
                                <div className="toggle-dot"></div>
                            </div>
                            <div className="service-details">
                                <p className="service-intro"><strong>What We Offer:</strong></p>
                                <ul>
                                    <li>Investor-ready pitch decks</li>
                                    <li>Business presentations</li>
                                    <li>Sales decks</li>
                                    <li>Corporate storytelling</li>
                                    <li>Visual data representation</li>
                                </ul>
                            </div>
                            <div className="vertical-label">Pitch Deck Designing</div>
                        </div>

                        {/* <!-- Service 2: Video Editing --> */}
                        <div className="service-card" data-id="video-editing">
                            <div className="service-header">
                                <h3>Video Editing</h3>
                                <div className="toggle-dot"></div>
                            </div>
                            <div className="service-details">
                                <p className="service-intro"><strong>What We Offer:</strong></p>
                                <ul>
                                    <li>YouTube vlogs & shorts</li>
                                    <li>Corporate promos</li>
                                    <li>Social media reels</li>
                                    <li>Motion graphics</li>
                                    <li>Color grading</li>
                                </ul>
                            </div>
                            <div className="vertical-label">Video Editing</div>
                        </div>

                        {/* <!-- Service 3: Website Design --> */}
                        <div className="service-card" data-id="website-design">
                            <div className="service-header">
                                <h3>Website Design</h3>
                                <div className="toggle-dot"></div>
                            </div>
                            <div className="service-details">
                                <p className="service-intro"><strong>What We Offer:</strong></p>
                                <ul>
                                    <li>Landing Pages</li>
                                    <li>E-commerce stores</li>
                                    <li>Portfolio sites</li>
                                    <li>UI/UX Design</li>
                                    <li>Webflow development</li>
                                </ul>
                            </div>
                            <div className="vertical-label">Website Design</div>
                        </div>

                        {/* <!-- Service 4: AI & Automations --> */}
                        <div className="service-card" data-id="ai-automation">
                            <div className="service-header">
                                <h3>AI & Automations</h3>
                                <div className="toggle-dot"></div>
                            </div>
                            <div className="service-details">
                                <p className="service-intro"><strong>What We Offer:</strong></p>
                                <ul>
                                    <li>Workflow automation</li>
                                    <li>Chatbot integration</li>
                                    <li>Data scraping</li>
                                    <li>AI content generation</li>
                                    <li>Custom scripts</li>
                                </ul>
                            </div>
                            <div className="vertical-label">AI & Automations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Process Section --> */}
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

            {/* <!-- Work Samples Section --> */}
            <section className="work" id="work">
                <div className="container">
                    <h2>Our Work Samples</h2>
                    <div className="work-filters">
                        <button className="filter-btn active">Pitch Deck</button>
                        <button className="filter-btn">Video Editing</button>
                        <button className="filter-btn">Website Design</button>
                        <button className="filter-btn">AI & Automations</button>
                    </div>
                    <div className="work-grid">
                        {/* <!-- Placeholders for work samples --> */}
                        <div className="work-item"><img src="/src/assets/sample1.png" alt="Work Sample 1" /></div>
                        <div className="work-item"><img src="/src/assets/sample2.png" alt="Work Sample 2" /></div>
                        <div className="work-item"><img src="/src/assets/sample3.png" alt="Work Sample 3" /></div>
                    </div>
                </div>
            </section>

            {/* <!-- Reviews Section --> */}
            <section className="reviews" id="reviews">
                <div className="container">
                    <h2>Our Client Reviews</h2>
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
                            <p>Dhrumil is <strong>so</strong> sexy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- FAQ Section --> */}
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
    )
}

export default Home