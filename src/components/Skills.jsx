function Skills() {
    return (
        <section id="skills" className="skills section">

            <div className="section-heading center">

                <p>MY SKILLS</p>

                <h2>
                    Technologies I
                    <span>Work With</span>
                </h2>

            </div>

            <div className="skills-grid">

                {/* Backend */}
                <div className="skill-card">

                    <div className="skill-icon">
                        BE
                    </div>

                    <h3>Backend</h3>

                    <p>
                        Python, Django, Django REST Framework,
                        Node.js, Express.js, Fastapi
                    </p>

                </div>


                {/* Frontend */}
                <div className="skill-card">

                    <div className="skill-icon">
                        FE
                    </div>

                    <h3>Frontend</h3>

                    <p>
                        HTML, CSS, JavaScript,
                        React.js, Bootstrap
                    </p>

                </div>


                {/* Database */}
                <div className="skill-card">

                    <div className="skill-icon">
                        DB
                    </div>

                    <h3>Database</h3>

                    <p>
                        MySQL, MongoDB,
                        SQLite, Postgresql
                    </p>

                </div>

                <div className="skill-card">

                    <div className="skill-icon">
                        AI
                    </div>

                    <h3>AI Tools</h3>

                    <p>
                        ChatGPT, Gemini,
                        Claude, Antigravity, Cursor
                    </p>

                </div>


                {/* Git & Tools */}
                <div className="skill-card">

                    <div className="skill-icon">
                        GT
                    </div>

                    <h3>Git & Tools</h3>

                    <p>
                        Git, GitHub, VS Code
                    </p>

                </div>

            

            <div className="skill-card">

                    <div className="skill-icon">
                        QA
                    </div>
                    <h3>Testing</h3>
                    <p>
                        Postman, Pytest,
                        Jest
                    </p>
                </div>
                </div>

        </section>
    );
}

export default Skills;