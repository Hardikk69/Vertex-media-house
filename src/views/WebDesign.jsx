import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PortfolioSlider } from "../components/PortfolioSlider";
import { Pricing } from "../components/Pricing";
import '../styles/Global.css';
import '../styles/Hero.css';
import '../styles/Stats.css';
import '../styles/Services.css';
import '../styles/Process.css';
import '../styles/Work.css';
import '../styles/Reviews.css';
import '../styles/FAQ.css';
import '../styles/ScrollStack.css';
import '../styles/WebDesign.css';
import { initInteractions } from "../script/script.js";
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'

function WebDesign() {
    useEffect(() => {
        const cleanup = initInteractions();
        return cleanup;
    }, []);

    const reviewSlides = [
        {
            type: "review",
            content:
                'I had a great experience working with Vertex. He was professional, responsive, and very patient throughout the process.',
        },
        {
            type: "review",
            content:
                '[Vertex] delivered exactly what I needed — a clean, professional pitch deck. Communication was smooth.',
        },
        {
            type: "review",
            content:
                'Very professional and responsive. Immediately understood our vision. Looking forward to more projects.',
        },
    ];

    const portfolioSlides = [
        {
            type: "portfolio",
            image: "/src/assets/sample1.png",
            title: "Business Proposal",
            category: "Corporate Finance",
        },
        {
            type: "portfolio",
            image: "/src/assets/sample2.png",
            title: "Investor Pitch Deck",
            category: "Real Estate",
        },
        {
            type: "portfolio",
            image: "/src/assets/sample3.png",
            title: "Sales Strategy",
            category: "Marketing",
        },
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
                                <span className="underline-style"></span>
                                <br />
                                Website Design &
                                <span className="underline-style">Development</span>
                            </h1>
                            <p>
                                Helping brands and creators reach their highest point through
                                design, editing, and technology.
                            </p>

                            <div className="hero-side-list">
                                <div className="list-item active">
                                    <div className="bar"></div>
                                    <span>Pitch Deck Design</span>
                                </div>
                                <div className="list-item">
                                    <span>Video Editing for creators</span>
                                </div>
                            </div>

                            <button className="btn btn-white hero-cta">
                                Book a Discovery Call
                            </button>
                        </div>

                        <div className="hero-visual">
                            <div className="visual-shape"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Slider */}
            <PortfolioSlider
                key="reviews"
                title="What Clients Say"
                subtitle="Reviews"
                slides={reviewSlides}
            />

            {/* Portfolio Slider */}
            <PortfolioSlider
                key="portfolio"
                title="Our Work"
                subtitle="Portfolio"
                slides={portfolioSlides}
            />

            <section className="scroll-stack-section">
                <div className="container scroll-stack-layout">

                    {/* LEFT — Why Us */}
                    <div className="why-us-column">
                        <span className="why-us-label">Our Work</span>
                        <h2>Why Us?</h2>

                        <div className="why-us-boxes">
                            <div className="why-us-box active">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                                quaerat, fuga quod repudiandae vero voluptatibus explicabo dolor
                                fugiat natus soluta quia quos dolorem enim? Ipsa molestias ab
                                recusandae optio saepe?
                            </div>
                            <div className="why-us-box">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                                deserunt possimus laudantium maxime dolorum soluta consequuntur
                                veniam fugit impedit officia dolores exercitationem consequatur
                                similique et, facere eveniet aspernatur esse magni!
                            </div>
                            <div className="why-us-box active">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                                quaerat, fuga quod repudiandae vero voluptatibus explicabo dolor
                                fugiat natus soluta quia quos dolorem enim? Ipsa molestias ab
                                recusandae optio saepe?
                            </div>
                            <div className="why-us-box">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                                deserunt possimus laudantium maxime dolorum soluta consequuntur
                                veniam fugit impedit officia dolores exercitationem consequatur
                                similique et, facere eveniet aspernatur esse magni!
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Your existing ScrollStack (UNCHANGED) */}
                    <div className="scroll-stack-wrapper">
                        <ScrollStack
                            useWindowScroll={true}
                            itemDistance={40}
                            itemStackDistance={20}
                            baseScale={0.9}
                            stackPosition="30%">

                            <ScrollStackItem>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Discovery Phase</h2>
                                    <p>We deeply analyze your brand and goals to create a strategic roadmap for success.</p>
                                </div>
                            </ScrollStackItem>

                            <ScrollStackItem>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Design Strategy</h2>
                                    <p>Creating visual identities that resonate with your target audience.</p>
                                </div>
                            </ScrollStackItem>

                            <ScrollStackItem>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Development & Launch</h2>
                                    <p>Building high-performance assets and launching them with precision.</p>
                                </div>
                            </ScrollStackItem>

                            <ScrollStackItem>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Discovery Phase</h2>
                                    <p>We deeply analyze your brand and goals to create a strategic roadmap for success.</p>
                                </div>
                            </ScrollStackItem>
                        </ScrollStack>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process" id="process">
                <div className="container">
                    <h2>Our Process</h2>
                    <div className="process-steps">
                        <div className="process-line"></div>

                        <div className="step">
                            <div className="step-number">01</div>
                            <h4>Subscribe & get started</h4>
                            <p>Submit as many requests as you want.</p>
                        </div>

                        <div className="step">
                            <div className="step-number">02</div>
                            <h4>Receive your designs</h4>
                            <p>Get designs within a few days.</p>
                        </div>

                        <div className="step">
                            <div className="step-number">03</div>
                            <h4>Revise until perfect</h4>
                            <p>Unlimited revisions.</p>
                        </div>

                        <div className="step">
                            <div className="step-number">04</div>
                            <h4>Scale your business</h4>
                            <p>Use assets to grow.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Pricing />

            {/* FAQ */}
            <section className="faq" id="faq">
                <div className="container">
                    <div className="faq-list">
                        <h2>FAQs</h2>

                        <div className="faq-item">
                            <div className="faq-question">
                                How many years of experience do you have?
                                <div className="toggle-icon"></div>
                            </div>
                            <div className="faq-answer">
                                We have extensive industry experience.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                Do you treat every project with importance?
                                <div className="toggle-icon"></div>
                            </div>
                            <div className="faq-answer">
                                Every project is handled with full dedication.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                What is your process like?
                                <div className="toggle-icon"></div>
                            </div>
                            <div className="faq-answer">
                                Simple, fast, and transparent.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default WebDesign;
