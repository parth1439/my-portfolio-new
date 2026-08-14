function Footer() {
    return (
        <footer>

            <div className="footer-container">

                <div className="footer-col footer-brand">
                    <div className="footer-logo">
                        Parth Kacha
                    </div>

                    <p className="footer-tagline">
                        Python Full Stack Developer
                    </p>
                </div>


                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>

                    <nav className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#resume">Resume</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>


                <div className="footer-col">
                    <h4 className="footer-heading">Connect</h4>

                    <nav className="footer-links footer-social">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                            </svg>
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
                            </svg>
                            LinkedIn
                        </a>

                        <a href="mailto:parthkacha71@gmail.com">
                            <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 6.08a.75.75 0 0 0 .96 0L19.8 6H4.2ZM20 7.83l-6.66 5.55a2.75 2.75 0 0 1-3.68 0L3 7.83V18h17V7.83Z" />
                            </svg>
                            Email
                        </a>
                    </nav>
                </div>

            </div>


            <div className="footer-line"></div>

            <p className="copyright">
                © 2026 Parth Kacha. All Rights Reserved.
            </p>

        </footer>
    );
}

export default Footer;
