import { useState } from "react";
import "./Contact.css";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";
import Button from "../components/Button";
import { personal } from "../data/personal";

// ===== أيقونة Send =====
const SendIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// ===== الحالة الأولية للـ form =====
const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ملاحظة: لا يوجد Backend حاليًا
    // سيتم ربط هذا لاحقًا بخدمة Email أو API
    console.log("Form submitted:", formData);
    alert("Form submission is not connected yet. Please use the email link instead.");
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        {/* ===== Section Title ===== */}
        <SectionTitle
          label="Get in touch"
          title="Have a project in mind?"
        />

        {/* ===== Grid ===== */}
        <div className="contact__grid">
          {/* ===== Left: Info ===== */}
          <div className="contact__info">
            <p className="contact__description">
              I'm always open to discussing new opportunities, interesting
              ideas, or just a friendly chat.
            </p>

            <SocialLinks
              links={personal.contactLinks}
              variant="list"
              className="contact__links"
            />
          </div>

          {/* ===== Right: Form ===== */}
          <form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Row 1: Name + Email */}
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact__input"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="contact__input"
                  required
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="contact__field">
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="contact__input"
                required
              />
            </div>

            {/* Row 3: Message */}
            <div className="contact__field">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                rows="5"
                className="contact__textarea"
                required
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={<SendIcon />}
              iconPosition="right"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;