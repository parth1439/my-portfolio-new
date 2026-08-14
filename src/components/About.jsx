function About() {
    return (
        <section id="about" className="about section">

            <div className="section-heading">

                <p>ABOUT ME</p>

                <h2>
                    Turning Ideas Into
                    <span>Web Applications</span>
                </h2>

            </div>


            <div className="about-grid">

                <div className="about-text">

                    <p>
                        I'm a Full Stack Developer currently working at Prehost Technologies, where I turn ideas into complete, working web applications — from building reliable backend systems and REST APIs to creating clean, responsive frontend interfaces.
                    </p>

                    <p>
                        I work across the stack, connecting APIs, structuring databases such as MySQL, MongoDB, and PostgreSQL, and making sure applications are reliable, maintainable, and practical for real-world use. I enjoy solving problems, building useful features, and continuously improving the way I develop software.
                    </p>

                    <p>
                        Alongside my core development work, I enjoy exploring AI tools and modern technologies that can make the development process smarter and more efficient. I'm always looking to learn, experiment with new technologies, and take on projects that help me grow as a developer.
                    </p>

                </div>


                <div className="about-info">

                    <div className="info-item">
                        <small>Name</small>
                        <strong>Parth Kacha</strong>
                    </div>

                    <div className="info-item">
                        <small>Role</small>
                        <strong>Full Stack Developer</strong>
                    </div>

                    <div className="info-item">
                        <small>Location</small>
                        <strong>Surat, Gujarat, India</strong>
                    </div>

                    <div className="info-item">
                        <small>Education</small>
                        <strong>Diploma in Computer Engineering</strong>
                    </div>

                    {/* <div className="info-item">
                        <small>Focus</small>
                        <strong>Full Stack Python Development</strong>
                    </div> */}

                </div>

            </div>

        </section>
    );
}

export default About;
