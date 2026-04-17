import { NavLink } from 'react-router-dom';
import { ArrowRight, Code2, Box, Zap, Brain } from 'lucide-react';

const capabilities = [
  {
    icon: <Code2 size={18} color="#00ff00" />,
    title: 'Core Development',
    desc: 'Custom scripts and enterprise-grade tools engineered for performance.',
    tags: ['PYTHON', 'JAVA', 'C', 'NODE.JS'],
  },
  {
    icon: <Box size={18} color="#aaa" />,
    title: '3D & Web',
    desc: 'Building immersive browser experiences and complex 3D environments utilizing Three.js frameworks.',
    tags: [],
  },
  {
    icon: <Zap size={18} color="#00ff00" />,
    title: 'Automation',
    desc: 'Advanced bots and workflow logic designed to eliminate repetitive manual overhead.',
    tags: [],
  },
  {
    icon: <Brain size={18} color="#aaa" />,
    title: 'AI Integration',
    desc: 'Leveraging local LLMs and neural models to generate intelligent, context-aware utility layers within existing workflows.',
    tags: [],
  },
];



const principles = [
  {
    num: '01',
    title: 'Speed > Complexity',
    desc: 'I prioritize speed and execution over unnecessary complexity. Functional results delivered efficiently.',
  },
  {
    num: '02',
    title: 'Experimental Iteration',
    desc: 'I approach problems with experimentation and iteration. Every failure is a data point for the final solution.',
  },
  {
    num: '03',
    title: 'Practical Outcomes',
    desc: 'I focus on practical outcomes, not just theoretical solutions. Code must work in production environments.',
  },
];

const valueProps = [
  {
    icon: 'A',
    color: '#00ff00',
    title: 'Custom Built',
    desc: "I don't rely off-the-shelf—I build situation-specific solutions designed for your specific bottleneck.",
  },
  {
    icon: '◈',
    color: '#00ff00',
    title: 'AI Augmented',
    desc: 'I actively use AI and automation to improve my own efficiency, delivering more value in less time.',
  },
  {
    icon: '◎',
    color: '#00ff00',
    title: 'Rapid Adaptation',
    desc: 'I learn quickly and adapt to new requirements without friction, even in high-pressure situations.',
  },
];

const bestFitCards = [
  {
    label: 'PROTOCOL A',
    title: 'Automation Tasks',
    desc: 'Bots, custom scripts, and workflow systems designed for zero-touch operation.',
  },
  {
    label: 'PROTOCOL B',
    title: 'Custom Utilities',
    desc: 'Small-to-medium custom tools built to bridge gaps in your existing software stack.',
  },
  {
    label: 'PROTOCOL C',
    title: 'Experimental Ideas',
    desc: 'Unconventional ideas that need rapid execution and technical prototyping.',
  },
  {
    label: 'PROTOCOL D',
    title: 'Fast Turnaround',
    desc: 'Development work that requires high-velocity output without sacrificing code integrity.',
  },
];

export default function Systems() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '56px' }}>
      {/* Hero Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px 100px',
        }}
      >
        {/* Established label */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: '#444',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          ESTABLISHED 2024 / PORTFOLIO V1.0
        </div>

        {/* Hero Headline */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(52px, 10vw, 96px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'white',
            marginBottom: '32px',
          }}
        >
          Utsab Guha —<br />
          <span style={{ color: '#00ff00' }}>Developer | AI<br />Automation |<br />Experimental<br />Systems</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            color: '#888',
            lineHeight: 1.8,
            maxWidth: '420px',
            marginBottom: '48px',
          }}
        >
          I build practical, unconventional solutions using code, automation, and AI workflows. My focus is not just writing code—but leveraging systems to reduce effort, automate processes, and create functional results quickly.
        </p>

        {/* Status indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '0',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00ff00',
              animation: 'pulse-green 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: '#00ff00',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 100px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '32px' }}>
          01 / CAPABILITIES
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2px',
          }}
          className="caps-grid"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="card-hover"
              style={{
                background: '#111',
                border: '1px solid #1e1e1e',
                padding: '32px',
                borderRadius: '2px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: '#1a1a1a',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid #252525',
                }}
              >
                {cap.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'white',
                  marginBottom: '10px',
                }}
              >
                {cap.title}
              </h3>
              <p
                style={{
                  fontSize: '12px',
                  color: '#666',
                  lineHeight: 1.7,
                  marginBottom: cap.tags.length ? '16px' : '0',
                }}
              >
                {cap.desc}
              </p>
              {cap.tags.length > 0 && (
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {cap.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 100px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '32px' }}>
          02 / SELECTED ARTIFACTS
        </div>

        {/* Project 1 - 3D FPS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '80px',
            borderTop: '1px solid #1a1a1a',
            paddingTop: '48px',
          }}
          className="project-grid"
        >
          {/* Dark image placeholder */}
          <div
            style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              aspectRatio: '4/3',
              display: 'flex',
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
                background: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #2a2a2a',
              }}
            >
              <Code2 size={32} color="#333" />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.6)',
                padding: '8px 12px',
                borderRadius: '2px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                color: '#666',
                letterSpacing: '0.08em',
              }}
            >
              BROWSER RENDER SAFE MODE // THREE.JS ENGINE v0.3
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.12em',
                color: '#444',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              CASE STUDY 01
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '28px',
                color: 'white',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              3D FPS Browser Game
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              Built a role-play FPS-style experience using Three.js, focusing on real-time interaction, rendering logic, and gameplay mechanics inside the browser.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['THREE.JS', 'WEBGL', 'JS'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 - WhatsApp Bot */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            borderTop: '1px solid #1a1a1a',
            paddingTop: '48px',
          }}
          className="project-grid"
        >
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.12em',
                color: '#444',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              IN DEVELOPMENT / BETA
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '28px',
                color: 'white',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              WhatsApp Automation Bot
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              Designed a customizable auto-response system using Node.js. Includes intelligent reply handling and human-intervention detection logic.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '0' }}>
              {[
                'INTELLIGENT REPLY HANDLING',
                'HUMAN-INTERVENTION DETECTION',
                'FLEXIBLE CONFIGURATION',
              ].map((f) => (
                <div
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.08em',
                    color: '#00ff00',
                  }}
                >
                  <div
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#00ff00',
                    }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Robot/Bot image placeholder */}
          <div
            style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                background: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #2a2a2a',
              }}
            >
              <Zap size={40} color="#333" />
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 100px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '48px' }}>
          03 / OPERATING PRINCIPLES
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="principles-grid"
        >
          {/* Left - Principles list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {principles.map((p) => (
              <div key={p.num}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '36px',
                    color: '#1e1e1e',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {p.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    color: 'white',
                    marginBottom: '8px',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Value Proposition Card */}
          <div
            style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              padding: '32px',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.15em',
                color: '#444',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              THE VALUE PROPOSITION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {valueProps.map((v) => (
                <div key={v.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '4px',
                      background: 'rgba(0,255,0,0.1)',
                      border: '1px solid rgba(0,255,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#00ff00',
                      flexShrink: 0,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '13px',
                        color: 'white',
                        marginBottom: '4px',
                      }}
                    >
                      {v.title}
                    </div>
                    <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6 }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Fit Projects */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 100px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '48px' }}>
          04 / SYNERGY
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="synergy-grid"
        >
          {/* Left text */}
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '48px',
                color: 'white',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Best Fit<br />Projects
            </h2>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7, marginBottom: '32px' }}>
              I take on a limited number of clients to maintain delivery quality and focus.
            </p>
            <NavLink
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#00ff00',
                color: '#0a0a0a',
                padding: '12px 24px',
                borderRadius: '3px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
            >
              Request Availability <ArrowRight size={14} />
            </NavLink>
          </div>

          {/* Right grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2px',
            }}
          >
            {bestFitCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111',
                  border: '1px solid #1e1e1e',
                  padding: '20px',
                  borderRadius: '2px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px',
                    letterSpacing: '0.1em',
                    color: '#444',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {card.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '13px',
                    color: 'white',
                    marginBottom: '8px',
                  }}
                >
                  {card.title}
                </div>
                <p style={{ fontSize: '11px', color: '#555', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '80px 24px',
          textAlign: 'center',
          background: '#080808',
        }}
      >
        <blockquote
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            color: '#666',
            lineHeight: 1.8,
            fontStyle: 'italic',
          }}
        >
          "I am continuously expanding my capabilities, especially in AI systems and automation. If your project requires flexibility, creativity, and rapid execution, I am a strong fit."
        </blockquote>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .caps-grid { grid-template-columns: 1fr !important; }
          .project-grid { grid-template-columns: 1fr !important; }
          .principles-grid { grid-template-columns: 1fr !important; }
          .synergy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
