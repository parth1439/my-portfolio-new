import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // idle | sending | success | error
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('sending');

    emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                time: new Date().toLocaleString(),
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            setStatus('error');
        });
};
    return (
        <section id="contact" className="contact section">

            <div className="contact-grid">

                <div className="contact-left">

                    <h2 className="contact-heading">CONTACT</h2>

                    <div className="contact-socials">

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-social-link"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                            </svg>
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-social-link"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
                            </svg>
                            LinkedIn
                        </a>

                    </div>

                    <div className="contact-info-list">

                        <div className="contact-info-item">

                            <div className="contact-icon">
                                @
                            </div>

                            <div>
                                <small>Email</small>
                                <p>parthkacha71@gmail.com</p>
                            </div>

                        </div>

                        <div className="contact-info-item">

                            <div className="contact-icon">
                                #
                            </div>

                            <div>
                                <small>Phone</small>
                                <p>+91 7622893779</p>
                            </div>

                        </div>

                        <div className="contact-info-item">

                            <div className="contact-icon">
                                IN
                            </div>

                            <div>
                                <small>Location</small>
                                <p>Surat, Gujarat, India</p>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="contact-right">

                    <p className="contact-note">Looking forward to hearing from you</p>

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className="form-row">

                            <div className="form-group">
                                <label htmlFor="contact-name">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-phone">Phone</label>
                            <input
                                type="tel"
                                id="contact-phone"
                                name="phone"
                                placeholder="+91 00000 00000"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="primary-btn contact-submit-btn"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "Sending..." : "Submit"}
                        </button>

                        {status === "success" && (
                            <p className="form-status form-status-success">
                                Message sent successfully!
                            </p>
                        )}

                        {status === "error" && (
                            <p className="form-status form-status-error">
                                Failed to send message. Please try again.
                            </p>
                        )}

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;
