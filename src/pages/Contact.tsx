import { useState } from 'react';
import { ExternalLink, MapPin, Send } from 'lucide-react';

const externalRelays = [
  {
    label: 'LinkedIn',
    icon: '🔗',
    href: 'https://linkedin.com',
    color: '#0077b5',
  },
  {
    label: 'GitHub',
    icon: '⚙',
    href: 'https://github.com/brainige',
    color: '#555',
  },
  {
    label: 'Layers',
    icon: '◈',
    href: '#',
    color: '#ff5500',
  },
  {
    label: 'Direct Mail',
    icon: '✉',
    href: 'mailto:brainigemee@gmail.com',
    color: '#444',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    identity: '',
    endpoint: '',
    subject: '',
    payload: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic input sanitization (trimming)
    const sanitizedData = {
      identity: formData.identity.trim(),
      endpoint: formData.endpoint.trim(),
      subject: formData.subject.trim(),
      payload: formData.payload.trim(),
    };

    // In a real application, we would send sanitizedData to a backend API
    console.log('Form submission received:', sanitizedData);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ identity: '', endpoint: '', subject: '', payload: '' });
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '56px' }}>
      {/* Header */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '64px 24px 56px',
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: '#00ff00',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          STATUS: SYSTEM ONLINE // ACCEPTING INPUTS
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(52px, 10vw, 96px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'white',
            marginBottom: '28px',
          }}
        >
          Establish<br />Connection
        </h1>

        <p
          style={{
            fontSize: '14px',
            color: '#777',
            lineHeight: 1.8,
            maxWidth: '400px',
          }}
        >
          Ready to initialize collaboration protocol. Dispatch your parameters for engineering architecture, strategic design, or full-stack deployment.
        </p>
      </section>

      {/* Main content */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* Left - Form */}
        <div
          style={{
            background: '#0f0f0f',
            border: '1px solid #1e1e1e',
            borderRadius: '4px',
            padding: '36px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00ff00',
                animation: 'pulse-green 2s infinite',
              }}
            />
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '20px',
                color: 'white',
              }}
            >
              System Inquiry Portal
            </h2>
          </div>

          {submitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '48px 24px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(0,255,0,0.1)',
                  border: '1px solid rgba(0,255,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '20px',
                  color: '#00ff00',
                }}
              >
                ✓
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#00ff00',
                  marginBottom: '8px',
                }}
              >
                Transmission Complete
              </div>
              <p style={{ fontSize: '13px', color: '#666' }}>
                Connection request received. Expect response within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
                className="form-row"
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '8px',
                      color: '#444',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    Identity Identifier
                  </label>
                  <input
                    type="text"
                    placeholder="Legal Name / Entity"
                    value={formData.identity}
                    onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '2px',
                      fontSize: '13px',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '8px',
                      color: '#444',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    Communication Endpoint
                  </label>
                  <input
                    type="email"
                    placeholder="email@address.com"
                    value={formData.endpoint}
                    onChange={(e) => setFormData({ ...formData, endpoint: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '2px',
                      fontSize: '13px',
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px',
                    color: '#444',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Protocol Subject
                </label>
                <input
                  type="text"
                  placeholder="Inquiry Classification"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '2px',
                    fontSize: '13px',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px',
                    color: '#444',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Data Payload
                </label>
                <textarea
                  placeholder="Enter detailed project specifications..."
                  value={formData.payload}
                  onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '2px',
                    fontSize: '13px',
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: '#00ff00',
                  color: '#0a0a0a',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: '2px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#00cc00'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#00ff00'; }}
              >
                <Send size={14} />
                Transmit Connection Request
              </button>

              {/* Manual link */}
              <div
                style={{
                  borderTop: '1px solid #1a1a1a',
                  paddingTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ fontSize: '14px' }}>@</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '8px',
                        color: '#444',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '2px',
                      }}
                    >
                      MANUAL COMMUNICATION UPLINK
                    </div>
                    <a
                      href="mailto:brainigemee@gmail.com"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: '13px',
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                      brainigemee@gmail.com
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:brainigemee@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'transparent',
                    border: '1px solid #2a2a2a',
                    color: '#888',
                    padding: '8px 16px',
                    borderRadius: '2px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  LAUNCH MAIL CLIENT <ExternalLink size={10} />
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Right - External Relays + Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* External Relays */}
          <div
            style={{
              background: '#0f0f0f',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              padding: '28px',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '8px',
                color: '#444',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              EXTERNAL RELAYS
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
              }}
            >
              {externalRelays.map((relay) => (
                <a
                  key={relay.label}
                  href={relay.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: '#111',
                    border: '1px solid #1e1e1e',
                    padding: '14px 16px',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#333'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1e1e1e'; }}
                >
                  <span style={{ fontSize: '16px' }}>{relay.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '13px',
                      color: 'white',
                    }}
                  >
                    {relay.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Origin Coordinates */}
          <div
            style={{
              background: '#0f0f0f',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              padding: '28px',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '8px',
                color: '#444',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              ORIGIN COORDINATES
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <MapPin size={16} color="#00ff00" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'white',
                    marginBottom: '4px',
                  }}
                >
                  Remote Node / Decentralized
                </div>
                <div style={{ fontSize: '12px', color: '#555' }}>
                  Synchronized to UTC+1 Temporal Zone
                </div>
              </div>
            </div>
          </div>

          {/* Signal Map visual */}
          <div
            style={{
              background: '#080808',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              aspectRatio: '4/3',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Grid lines */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.15,
              }}
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff00" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Node connections */}
              <line x1="20%" y1="30%" x2="60%" y2="50%" stroke="#00ff00" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
              <line x1="60%" y1="50%" x2="80%" y2="20%" stroke="#00ff00" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
              <line x1="60%" y1="50%" x2="40%" y2="70%" stroke="#00ff00" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
              <circle cx="20%" cy="30%" r="3" fill="#00ff00" opacity="0.6" />
              <circle cx="60%" cy="50%" r="4" fill="#00ff00" opacity="0.8" />
              <circle cx="80%" cy="20%" r="2" fill="#00ff00" opacity="0.4" />
              <circle cx="40%" cy="70%" r="2" fill="#00ff00" opacity="0.4" />
            </svg>

            {/* Signal badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#0f0f0f',
                border: '1px solid #1e1e1e',
                borderRadius: '20px',
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#00ff00',
                  animation: 'pulse-green 2s infinite',
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '8px',
                  color: '#00ff00',
                  letterSpacing: '0.1em',
                }}
              >
                SIGNAL STRENGTH: OPTIMAL
              </span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
