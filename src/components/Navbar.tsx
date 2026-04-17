import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Systems', path: '/' },
  { label: 'Laboratory', path: '/laboratory' },
  { label: 'Services', path: '/services' },
  { label: 'Archive', path: '/archive' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a1a',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            color: 'white',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              background: '#00ff00',
              borderRadius: '4px',
              color: '#0a0a0a',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            B
          </span>
          <span style={{ display: 'none' }} className="logo-text">Brainige</span>
        </NavLink>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: isActive ? '#00ff00' : '#888',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  position: 'relative',
                  paddingBottom: '4px',
                  borderBottom: isActive ? '1px solid #00ff00' : '1px solid transparent',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = '#ccc';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = '#888';
                }}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#0a0a0a',
            background: '#00ff00',
            padding: '8px 18px',
            borderRadius: '3px',
            textDecoration: 'none',
            transition: 'background 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#00cc00';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#00ff00';
          }}
        >
          Connect
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="mobile-menu-btn"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '56px',
            left: 0,
            right: 0,
            background: '#0d0d0d',
            borderBottom: '1px solid #1a1a1a',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500,
                  color: isActive ? '#00ff00' : '#888',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </NavLink>
            );
          })}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              background: '#00ff00',
              padding: '10px 18px',
              borderRadius: '3px',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '8px',
            }}
          >
            Connect
          </NavLink>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
