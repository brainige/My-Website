import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const archiveItems = [
  {
    year: '2024',
    id: 'ARC-001',
    title: '3D FPS Browser Game',
    category: 'Three.js / WebGL',
    status: 'COMPLETE',
    desc: 'Full role-play FPS experience built in browser with real-time rendering.',
    tags: ['THREE.JS', 'WEBGL', 'JAVASCRIPT'],
    statusColor: '#00ff00',
  },
  {
    year: '2024',
    id: 'ARC-002',
    title: 'WhatsApp Automation Bot',
    category: 'Node.js / AI',
    status: 'BETA',
    desc: 'Intelligent auto-response system with context-aware reply handling.',
    tags: ['NODE.JS', 'AUTOMATION', 'AI'],
    statusColor: '#ffaa00',
  },
  {
    year: '2024',
    id: 'ARC-003',
    title: 'AI Thumbnail Generator',
    category: 'Python / Photoshop',
    status: 'ACTIVE',
    desc: 'Automated high-conversion thumbnail creation pipeline for content creators.',
    tags: ['PYTHON', 'PHOTOSHOP', 'AI'],
    statusColor: '#00ff00',
  },
  {
    year: '2024',
    id: 'ARC-004',
    title: 'Custom Script Library',
    category: 'Python / Node.js',
    status: 'ONGOING',
    desc: 'Collection of enterprise-grade automation scripts for various workflow needs.',
    tags: ['PYTHON', 'NODE.JS', 'SCRIPTS'],
    statusColor: '#4488ff',
  },
  {
    year: '2023',
    id: 'ARC-005',
    title: 'Video Post-Production Suite',
    category: 'Premiere / After Effects',
    status: 'COMPLETE',
    desc: 'Professional editing workflow for cinematic video content and brand reels.',
    tags: ['PREMIERE', 'AFTER EFFECTS', 'COLOR'],
    statusColor: '#00ff00',
  },
  {
    year: '2023',
    id: 'ARC-006',
    title: 'LLM Integration Prototype',
    category: 'Python / Ollama',
    status: 'EXPERIMENTAL',
    desc: 'Local language model integration for on-premise intelligent automation.',
    tags: ['PYTHON', 'OLLAMA', 'LLM'],
    statusColor: '#888',
  },
];

export default function Archive() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '56px' }}>
      {/* Header */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px 56px',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div className="section-label" style={{ marginBottom: '20px' }}>
          PROJECT ARCHIVE
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(40px, 7vw, 72px)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'white',
            }}
          >
            Work Archive
          </h1>
          <p
            style={{
              fontSize: '13px',
              color: '#555',
              maxWidth: '320px',
              lineHeight: 1.8,
              textAlign: 'right',
            }}
          >
            A complete log of systems built, experiments run, and solutions shipped.
          </p>
        </div>
      </section>

      {/* Archive List */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >
        {/* Column headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 160px 100px 100px',
            gap: '16px',
            padding: '20px 0',
            borderBottom: '1px solid #1a1a1a',
          }}
          className="archive-row"
        >
          {['YEAR', 'PROJECT', 'CATEGORY', 'STATUS', ''].map((h) => (
            <div
              key={h}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '8px',
                color: '#333',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {archiveItems.map((item) => (
          <div
            key={item.id}
            className="card-hover"
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 160px 100px 100px',
              gap: '16px',
              padding: '24px 0',
              borderBottom: '1px solid #1a1a1a',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#0d0d0d'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                color: '#333',
              }}
            >
              {item.year}
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'white',
                  marginBottom: '4px',
                }}
              >
                {item.title}
              </div>
              <p style={{ fontSize: '11px', color: '#555', lineHeight: 1.5, marginBottom: '8px' }}>
                {item.desc}
              </p>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ fontSize: '12px', color: '#555' }}>{item.category}</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: item.statusColor,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '8px',
                  color: item.statusColor,
                  letterSpacing: '0.08em',
                }}
              >
                {item.status}
              </span>
            </div>

            <div>
              <ArrowRight size={16} color="#333" />
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#080808',
          borderTop: '1px solid #1a1a1a',
          padding: '64px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '9px',
            color: '#333',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          MORE COMING SOON
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '32px',
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          Have a Project in Mind?
        </h2>
        <p
          style={{
            fontSize: '13px',
            color: '#555',
            marginBottom: '28px',
            lineHeight: 1.7,
          }}
        >
          Let's add your project to the next archive update.
        </p>
        <NavLink
          to="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#00ff00',
            color: '#0a0a0a',
            padding: '12px 28px',
            borderRadius: '3px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Initialize Protocol <ArrowRight size={14} />
        </NavLink>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .archive-row {
            grid-template-columns: 60px 1fr 80px !important;
          }
          .archive-row > div:nth-child(4),
          .archive-row > div:nth-child(5) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
