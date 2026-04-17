import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid #1a1a1a',
        padding: '48px 24px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '40px',
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: 'white',
              marginBottom: '12px',
            }}
          >
            Utsab Guha
          </div>
          <p
            style={{
              fontSize: '12px',
              color: '#555',
              lineHeight: 1.7,
              maxWidth: '220px',
            }}
          >
            Engineering digital dominance through visual excellence and software architecture.
          </p>
        </div>

        {/* Core Navigation */}
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#444',
              marginBottom: '16px',
            }}
          >
            Core Navigation
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Systems', path: '/' },
              { label: 'Laboratory', path: '/laboratory' },
              { label: 'Services', path: '/services' },
              { label: 'Archive', path: '/archive' },
              { label: 'Contact Portal', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  fontSize: '13px',
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#00ff00'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#666'; }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Network Nodes */}
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#444',
              marginBottom: '16px',
            }}
          >
            Network Nodes
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/brainige' },
              { label: 'Email', href: 'mailto:brainigeme@gmail.com' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '13px',
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#00ff00'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#666'; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid #1a1a1a',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            color: '#333',
            letterSpacing: '0.05em',
          }}
        >
          © 2024 UTSAB GUHA. EXECUTED VIA EXPERIMENTAL SYSTEMS.
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            color: '#333',
            letterSpacing: '0.05em',
          }}
        >
          GITHUB · BRAINIGE
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
