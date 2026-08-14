function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-left">

                <p className="hello">
                    HELLO, I'M
                </p>

                <h1>
                    Parth <span>Kacha</span>
                </h1>

                <h2>
                     Full Stack Developer
                </h2>

                <p className="hero-text">
                    Full Stack Developer skilled in Python, Django,
                    REST API, Node.js, MongoDB and JavaScript.
                    Passionate about building scalable and
                    user-friendly web applications.
                </p>

                <div className="hero-buttons">

                    <a href="#projects" className="primary-btn">
                        View My Projects
                    </a>

                    <a href="#contact" className="secondary-btn">
                        Contact Me
                    </a>

                </div>

            </div>


            <div className="hero-right">

                <div className="image-circle">
                    <img src="/parth.jpeg" alt="Parth Kacha" />
                </div>

                <div className="experience-card">

                    <strong>2+</strong>

                    <p>
                        Months<br />
                        Experience
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Hero;
