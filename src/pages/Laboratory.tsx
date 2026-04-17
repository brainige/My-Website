import { NavLink } from 'react-router-dom';
import { ArrowRight, FlaskConical, GitBranch, Terminal, Box, Zap, Brain } from 'lucide-react';

const experiments = [
  {
    id: 'EXP-001',
    status: 'ACTIVE',
    title: '3D FPS Browser Game',
    category: 'WEBGL / THREE.JS',
    desc: 'Role-play FPS experience running natively in browser. Real-time physics, collision detection, and dynamic rendering pipeline built from scratch.',
    tags: ['THREE.JS', 'WEBGL', 'JAVASCRIPT', 'PHYSICS'],
    statusColor: '#00ff00',
  },
  {
    id: 'EXP-002',
    status: 'IN BETA',
    title: 'WhatsApp Automation Bot',
    category: 'NODE.JS / AI',
    desc: 'Autonomous messaging system with intelligent reply handling, context awareness, and human-intervention escalation protocols.',
    tags: ['NODE.JS', 'WHATSAPP-WEB.JS', 'NLP', 'AUTOMATION'],
    statusColor: '#ffaa00',
  },
  {
    id: 'EXP-003',
    status: 'CONCEPTUAL',
    title: 'Local LLM Workflow Engine',
    category: 'AI / PYTHON',
    desc: 'Experimenting with local language model integration to create context-aware automation pipelines that run entirely on-premise.',
    tags: ['PYTHON', 'OLLAMA', 'LANGCHAIN', 'LOCAL AI'],
    statusColor: '#555',
  },
  {
    id: 'EXP-004',
    status: 'ACTIVE',
    title: 'AI-Powered Thumbnail Engine',
    category: 'PYTHON / PHOTOSHOP API',
    desc: 'Automated thumbnail generation system using AI prompts and post-production scripts for high-conversion visual content at scale.',
    tags: ['PYTHON', 'PHOTOSHOP', 'AI', 'AUTOMATION'],
    statusColor: '#00ff00',
  },
];

const techStack = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'Node.js'] },
  { category: '3D / Visual', items: ['Three.js', 'WebGL', 'Canvas API', 'GLSL Shaders'] },
  { category: 'AI / ML', items: ['Local LLMs', 'Ollama', 'OpenAI API', 'LangChain'] },
  { category: 'Automation', items: ['whatsapp-web.js', 'Puppeteer', 'Selenium', 'Cron Jobs'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Photoshop', 'Premiere Pro', 'After Effects'] },
];

export default function Laboratory() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '56px' }}>
      {/* Header */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px 64px',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div className="section-label" style={{ marginBottom: '20px' }}>
          UTSAB GUHA // LABORATORY
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'end',
          }}
          className="lab-header-grid"
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(48px, 8vw, 80px)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'white',
            }}
          >
            Automating<br />
            <span
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                color: 'transparent',
              }}
            >
              the Future
            </span>
          </h1>

          <div>
            <p
              style={{
                fontSize: '14px',
                color: '#888',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}
            >
              Utsab Guha is an architect of <strong style={{ color: 'white' }}>Practical Engineering</strong> and{' '}
              <strong style={{ color: 'white' }}>Experimental Systems</strong>, bridging the gap between raw logic and digital evolution.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
                }}
              >
                Initiate Connection
              </NavLink>
              <NavLink
                to="/archive"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '3px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  border: '1px solid #2a2a2a',
                }}
              >
                View Full Gallery
              </NavLink>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '48px',
            justifyContent: 'flex-end',
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
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '9px',
              color: '#00ff00',
              letterSpacing: '0.1em',
            }}
          >
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </section>

      {/* What I Do */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '12px' }}>
          CAPABILITIES
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '40px',
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            What I Do
          </h2>
          <p style={{ fontSize: '12px', color: '#555', maxWidth: '340px', textAlign: 'right', lineHeight: 1.7 }}>
            Deploying specialized intelligence across varied environments to solve complex infrastructure challenges.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
          }}
          className="what-grid"
        >
          {[
            {
              icon: <Terminal size={20} color="#00ff00" />,
              title: 'Custom Scripts',
              desc: 'Python, Java, C, Node.js — bespoke logic designed for performance and reliability.',
              tags: ['LOGIC', 'BACKEND'],
            },
            {
              icon: <Box size={20} color="#4499ff" />,
              title: '3D Web Environments',
              desc: 'Immersive experiences utilizing Three.js to redefine digital interactive surfaces.',
              tags: ['THREE.JS', 'GRAPHICS'],
            },
            {
              icon: <Zap size={20} color="#00ff00" />,
              title: 'Automation Systems',
              desc: 'Autonomous bots and structured logic pipelines that eliminate manual friction.',
              tags: ['PYTHON', 'NODEJS'],
            },
            {
              icon: <Brain size={20} color="#aa88ff" />,
              title: 'AI Orchestration',
              desc: 'Implementation of local models and adaptable LLM solutions for intelligence integration.',
              tags: ['AI', 'ADAPTIVE'],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card-hover"
              style={{
                background: '#111',
                border: '1px solid #1e1e1e',
                padding: '24px',
                borderRadius: '2px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: '#161616',
                  border: '1px solid #252525',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  color: 'white',
                  marginBottom: '8px',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '11px', color: '#666', lineHeight: 1.6, marginBottom: '12px' }}>
                {item.desc}
              </p>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiments Log */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '12px' }}>
          CASE STUDIES
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '40px',
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: '40px',
          }}
        >
          Selected Work
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
          }}
          className="exp-grid"
        >
          {experiments.map((exp) => (
            <div
              key={exp.id}
              className="card-hover"
              style={{
                background: '#111',
                border: '1px solid #1e1e1e',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: '180px',
                  background: '#0d0d0d',
                  borderBottom: '1px solid #1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <FlaskConical size={40} color="#1e1e1e" />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: exp.statusColor,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '8px',
                      color: exp.statusColor,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {exp.category}
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px',
                    color: '#333',
                    letterSpacing: '0.08em',
                  }}
                >
                  {exp.id}
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: exp.statusColor,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '9px',
                      color: exp.statusColor,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {exp.status}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'white',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {exp.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.7, marginBottom: '16px' }}>
                  {exp.desc}
                </p>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Principles */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >
        <div className="section-label" style={{ marginBottom: '12px' }}>
          CORE PHILOSOPHY
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="principles-grid-lab"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '40px',
                color: 'white',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Operating Principles
            </h2>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7, marginBottom: '40px' }}>
              My engineering approach is defined by four non-negotiable pillars that ensure the highest quality of output.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { num: '01', title: 'Speed > Complexity', desc: 'Efficient execution beats over-engineered stagnation. I build systems that move fast.' },
                { num: '02', title: 'Experimental Iteration', desc: 'Constant testing and pivoting until the optimal solution is achieved.' },
                { num: '03', title: 'Practical Outcomes', desc: 'Design with utility in mind. Every line of code must serve a specific functional purpose.' },
                { num: '04', title: 'Custom Built (No Templates)', desc: 'Each system is hand-crafted to meet specific environmental demands.' },
              ].map((p) => (
                <div key={p.num} style={{ display: 'flex', gap: '20px' }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '13px',
                      color: '#00ff00',
                      minWidth: '28px',
                    }}
                  >
                    {p.num}
                  </span>
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
                      {p.title}
                    </div>
                    <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <GitBranch size={80} color="#1e1e1e" />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        style={{
          background: '#080808',
          borderTop: '1px solid #1a1a1a',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div className="section-label" style={{ marginBottom: '40px' }}>
            TECHNOLOGY MATRIX
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '32px',
            }}
            className="tech-grid"
          >
            {techStack.map((group) => (
              <div key={group.category}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    color: '#00ff00',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        fontSize: '12px',
                        color: '#555',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Let's Build the System */}
      <section
        style={{
          background: '#00ff00',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div className="section-label" style={{ color: 'rgba(0,0,0,0.4)', marginBottom: '20px' }}>
          SIGNAL TRANSMISSION
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 64px)',
            color: '#0a0a0a',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            WebkitTextStroke: '1px rgba(0,0,0,0.1)',
          }}
        >
          Let's Build the System.
        </h2>
        <NavLink
          to="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#0a0a0a',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '14px',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Initialize Connection <ArrowRight size={16} />
        </NavLink>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .lab-header-grid { grid-template-columns: 1fr !important; }
          .what-grid { grid-template-columns: 1fr 1fr !important; }
          .exp-grid { grid-template-columns: 1fr !important; }
          .principles-grid-lab { grid-template-columns: 1fr !important; }
          .tech-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .what-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}


