function Resume() {
    return (
        <section id="resume" className="resume section">

            <div className="section-heading">

                <p>MY RESUME</p>

                <h2>
                    Education &
                    <span>Experience</span>
                </h2>

            </div>


            <div className="timeline">

                <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <span>Education</span>

                        <h3>
                            Diploma in Computer Engineering
                        </h3>

                        <p>
                            Diploma in Computer Engineering
                            with a focus on software development
                            and programming.
                        </p>

                    </div>

                </div>


                <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <span>Experience</span>

                        <h3>
                            Full Stack Developer
                        </h3>

                        <p>
                            Working with Python, Django,
                            REST API, JavaScript, Node.js,
                            MongoDB and SQL to develop
                            modern web applications.
                        </p>

                    </div>

                </div>

            </div>


            <div className="resume-button">

                <a href="/Parth_cv%20(2).pdf"
                   className="primary-btn"
                   target="_blank"
                   rel="noreferrer">

                    Download Resume

                </a>

            </div>

        </section>
    );
}

export default Resume;
