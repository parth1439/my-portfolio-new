function Projects() {
    return (
        <section id="projects" className="projects section">

            <div className="section-heading center">
                <h2>MY PROJECTS</h2>
            </div>

            <div className="projects-grid">

                {/* ShipSmart */}
                <div className="project-card">

                    <div className="project-image">
                        <img src="/Shipsmart.png" alt="ShipSmart Seller" width="300px" />
                    </div>

                    <div className="project-content">

                        <h3>ShipSmart Seller</h3>

                        <p>
                            A web-based seller management application
                            for managing products, orders and shipping
                            operations efficiently.
                        </p>

                        <div className="project-tech">
                            <span>React</span>
                            <span>Java Script</span>
                            <span>Supabase</span>
                            <span>TypeScript</span>
                            <span>Tailwind CSS</span>
                        </div>

                    </div>

                </div>


                {/* Shopify */}
                <div className="project-card">

                    <div className="project-image">
                        <img src="/shopify_store.png" alt="Shopify Store" width="300px" />
                    </div>

                    <div className="project-content">

                        <h3>Shopify Store</h3>

                        <p>
                            An e-commerce store built using Shopify,
                            focused on product management and providing
                            a simple online shopping experience.
                        </p>

                        <div className="project-tech">
                            <span>Shopify</span>
                            <span>E-Commerce</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Projects;
