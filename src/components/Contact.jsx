import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], [-100, 50]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const data = {
      ...formData,
      access_key: "e6f06d2f-db66-483d-a453-40ca1208a77b"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Message Sent Successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("Something went wrong!");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="footer" id="contact">
      <div className="section-label">↓ LET'S TALK</div>
      <div className="section-index">#6</div>

      <div style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.h2 
          className="footer-huge"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          BRING YOUR<br />VISION TO LIFE
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--border-subtle)', textAlign: 'left' }}>
        <div style={{ padding: '4rem 2rem', borderRight: '1px solid var(--border-subtle)' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>VIKAS RATHOD</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Exceptional Software Engineer</p>
          
          <form onSubmit={handleSubmit} style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
              style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outline: 'none' }}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleChange}
              style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outline: 'none' }}
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
            />
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
            {status && <p style={{ color: 'var(--accent-primary)', marginTop: '1rem' }}>{status}</p>}
          </form>

        </div>
        
        <div style={{ padding: '4rem 2rem', display: 'flex', gap: '4rem' }}>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>vikas.rathod.tech@gmail.com</li>
              <li>Aundh, Pune, Maharashtra</li>
              <li>+91 9699387499</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Socials</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="https://www.linkedin.com/in/vikas-rathod-4511582a5/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
