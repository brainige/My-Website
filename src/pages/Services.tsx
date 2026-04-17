import { useState } from 'react';
import { Video, Code2, Lightbulb, ChevronDown } from 'lucide-react';

export default function Services() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceCategory: 'Visual Content & Post-Production',
    projectBriefing: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ fullName: '', email: '', serviceCategory: 'Visual Content & Post-Production', projectBriefing: '' });
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '56px' }}>
      {/* Header */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px 64px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '20px' }}>
          OUR CAPABILITIES
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'end',
          }}
          className="services-header-grid"
        >
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(56px, 9vw, 96px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '4px',
              }}
            >
              DIGITAL
            </h1>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(56px, 9vw, 96px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                WebkitTextStroke: '1px rgba(255,255,255,0.15)',
                color: 'transparent',
              }}
            >
              ENGINEERING.
            </h1>
          </div>
          <div>
            <p
              style={{
                fontSize: '14px',
                color: '#777',
                lineHeight: 1.8,
                maxWidth: '380px',
              }}
            >
              High-performance solutions for the modern web. We provide technical excellence across visual media, software architecture, and strategic advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Service 01 - Visual Content */}
      <section
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '64px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="service-grid"
        >
          {/* Left - content */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#1a1a1a',
                  border: '1px solid #252525',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Video size={18} color="#00ff00" />
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  color: '#444',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                SERVICE 01
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '36px',
                color: 'white',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Visual Content &<br />Post-Production
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '28px',
              }}
            >
              Premium post-production for digital creators and brands. From cinematic video sequences to high-conversion thumbnail engineering.
            </p>

            {/* Pricing rows */}
            <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '20px', marginBottom: '24px' }}>
              {[
                { label: 'Photo Editing & Thumbnail Design', price: 'From $15' },
                { label: 'Professional Video Editing', price: 'From $30' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid #1a1a1a',
                  }}
                >
                  <span style={{ fontSize: '13px', color: '#888' }}>{item.label}</span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color: '#00ff00',
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['POST-PRODUCTION', 'COLOR GRADING', 'PHOTOSHOP'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right - image card */}
          <div
            style={{
              background: '#0d0d0d',
              border: '1px solid #1a1a1a',
              borderRadius: '4px',
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative elements */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #1a2a1a 0%, #0d0d0d 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Video size={36} color="#1e3a1e" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#444',
                  marginBottom: '4px',
                }}
              >
                Cinema-Grade Finish
              </div>
              <div style={{ fontSize: '11px', color: '#333' }}>Post-production excellence.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 - Software Architecture */}
      <section
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '64px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="service-grid"
        >
          {/* Left - image card */}
          <div
            style={{
              background: '#0d0d0d',
              border: '1px solid #1a1a1a',
              borderRadius: '4px',
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #1a2a2a 0%, #0d0d0d 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Code2 size={36} color="#1e3a3a" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#444',
                  marginBottom: '4px',
                }}
              >
                Scalable Systems
              </div>
              <div style={{ fontSize: '11px', color: '#333' }}>Robust digital foundations.</div>
            </div>
          </div>

          {/* Right - content */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#1a1a1a',
                  border: '1px solid #252525',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Code2 size={18} color="#aaa" />
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  color: '#444',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                SERVICE 02
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '36px',
                color: 'white',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Software Architecture
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '28px',
              }}
            >
              Bespoke technical solutions for complex requirements. We build scalable, custom applications designed for performance and longevity.
            </p>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {['CUSTOM APP DEV', 'SYSTEM DESIGN', 'FULL-STACK'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  color: '#555',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                STARTING FROM
              </span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '48px',
                  color: 'white',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                $100
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 - Strategic Consulting */}
      <section
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '64px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            <div style={{ flex: 1, minWidth: '260px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#1a1a1a',
                    border: '1px solid #252525',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Lightbulb size={18} color="#ffdd44" />
                </div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px',
                    color: '#444',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  SERVICE 03
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '36px',
                  color: 'white',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              >
                Strategic Consulting
              </h2>
              <p
                style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: 1.8,
                  maxWidth: '400px',
                }}
              >
                Unlock expert insights with our technical advisory sessions. We bridge the gap between business vision and technical execution.
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  color: '#555',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                SESSIONS AT
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', justifyContent: 'flex-end' }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '64px',
                    color: '#00ff00',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  $5
                </span>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '14px',
                    color: '#00ff00',
                    letterSpacing: '0.05em',
                  }}
                >
                  /session
                </span>
              </div>
              <button
                style={{
                  marginTop: '12px',
                  background: 'transparent',
                  border: '1px solid #2a2a2a',
                  color: '#888',
                  padding: '8px 20px',
                  borderRadius: '2px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => {
                  const el = document.getElementById('comms-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                GET A CUSTOM QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing disclaimer */}
      <section
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0,255,0,0.1)',
              border: '1px solid rgba(0,255,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '14px',
              color: '#00ff00',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            i
          </div>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.8 }}>
            Entry-level services start at indicated rates. Final pricing is tailored via{' '}
            <strong style={{ color: '#00ff00', fontWeight: 500 }}>custom quotes</strong>{' '}
            based on specific architectural needs and technical complexity.
          </p>
        </div>
      </section>

      {/* INITIATE SYSTEM COMMS */}
      <section
        id="comms-form"
        style={{
          background: '#080808',
          borderTop: '1px solid #1a1a1a',
          padding: '80px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="comms-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(42px, 6vw, 72px)',
                color: 'white',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              INITIATE<br />SYSTEM<br />COMMS.
            </h2>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.8, marginBottom: '32px' }}>
              Ready to start your project? Fill out the brief and our team will respond with a custom proposal within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '16px' }}>✉</div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    color: '#555',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  BRAINIGEME@GMAIL.COM
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '16px' }}>📍</div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    color: '#555',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  REMOTE // DECENTRALIZED
                </span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            style={{
              background: '#0f0f0f',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              padding: '32px',
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '48px 24px',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#00ff00',
                    marginBottom: '8px',
                  }}
                >
                  Request Transmitted
                </div>
                <p style={{ fontSize: '13px', color: '#666' }}>
                  We'll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="service-form">
                <div>
                  <label htmlFor="service-fullName" className="service-field-label">
                    Full Name
                  </label>
                  <input
                    id="service-fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="service-form-input"
                  />
                </div>

                <div>
                  <label htmlFor="service-email" className="service-field-label">
                    Email Address
                  </label>
                  <input
                    id="service-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="service-form-input"
                  />
                </div>

                <div>
                  <label htmlFor="service-category" className="service-field-label">
                    Service Category
                  </label>
                  <div className="service-select-wrapper">
                    <select
                      id="service-category"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="service-form-select"
                    >
                      <option>Visual Content & Post-Production</option>
                      <option>Software Architecture</option>
                      <option>Strategic Consulting</option>
                      <option>Other / Custom</option>
                    </select>
                    <ChevronDown
                      size={14}
                      color="#555"
                      className="service-select-arrow"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service-briefing" className="service-field-label">
                    Project Briefing
                  </label>
                  <textarea
                    id="service-briefing"
                    name="projectBriefing"
                    value={formData.projectBriefing}
                    onChange={(e) => setFormData({ ...formData, projectBriefing: e.target.value })}
                    placeholder="Outline your requirements..."
                    rows={5}
                    className="service-form-textarea"
                  />
                </div>

                <button type="submit" className="service-submit-button">
                  REQUEST CUSTOM QUOTE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
