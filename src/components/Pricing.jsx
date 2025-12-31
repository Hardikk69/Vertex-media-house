import '../styles/Pricing.css';

export const Pricing = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h3>CLEAR & SIMPLE PRICING</h3>
                    <h2>Simple pricing to level up your brand.</h2>
                </div>
                <div className="pricing-grid">
                    {/* Card 1: Basic */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <h3>Basic</h3>
                            <p>One request at a time. For companies who need on-going design support.</p>
                        </div>
                        <div className="price-tag">$149/ Per Deck</div>
                        <ul className="features-list">
                            <li>1x active task at a time</li>
                            <li>Unlimited revisions</li>
                            <li>Dedicated project manager</li>
                            <li>Daily comms through Slack</li>
                            <li>Work with senior designers</li>
                            <li>2-3 days turn around time</li>
                            <li>Top tier design</li>
                        </ul>
                        <button className="pricing-btn">Book A Call</button>
                    </div>

                    {/* Card 2: Growth */}
                    <div className="pricing-card featured">
                        <div className="card-header">
                            <div className="header-top">
                                <h3>Growth</h3>
                                <span className="badge">Most Popular</span>
                            </div>
                            <p>Double the requests. For companies with increasing design needs. Limited spots.</p>
                        </div>
                        <div className="price-tag">$299/ Per Deck</div>
                        <ul className="features-list">
                            <li>2x active task at a time</li>
                            <li>Unlimited revisions</li>
                            <li>Dedicated project manager</li>
                            <li>Daily comms through Slack</li>
                            <li>Work with senior designers</li>
                            <li>2-3 days turn around time</li>
                            <li>Top tier design</li>
                        </ul>
                        <button className="pricing-btn">Book A Call</button>
                    </div>

                    {/* Card 3: Premium */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <div className="header-top">
                                <h3>Premium</h3>
                                <span className="badge">Best value</span>
                            </div>
                            <p>Perfect if you want to try the subscription out or only have a few one-off tasks.</p>
                        </div>
                        <div className="price-tag">$499/ Per Deck</div>
                        <ul className="features-list">
                            <li>Fixed Scope of work</li>
                            <li>2 rounds of revisions</li>
                            <li>Dedicated project manager</li>
                            <li>Daily comms through Slack</li>
                            <li>1x designer</li>
                            <li>2-5 days turn around time</li>
                            <li>Top tier design</li>
                        </ul>
                        <button className="pricing-btn">Book A Call</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
