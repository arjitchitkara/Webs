import { useLayoutEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Logo from './Logo';          // << now resolvable!

const links = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team',     path: '/team' },
  { name: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const { pathname }            = useLocation();

  /* shrink + blur when you scroll 40 px */
  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();                           // fire once on mount
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-2 backdrop-blur-md bg-black/20 border-b border-white/10'
          : 'py-3'
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* ─────────────────── logo ─────────────────── */}
        <Link to="/" className="flex items-center">
  {/* “mix-blend-difference” is the Tailwind class for the effect you wanted */}
  <Logo className="h-16 md:h-20 mix-blend-difference" />
</Link>

        {/* ─────────────── desktop links ─────────────── */}
        <ul className="hidden md:flex space-x-10 text-white">
          {links.map(l => (
            <li key={l.name}>
              <Link
                to={l.path}
                className={clsx(
                  'hover:text-primary transition-colors',
                  pathname === l.path && 'text-primary-foreground font-semibold'
                )}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ─────────────── hamburger ─────────────── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* ─────────────── mobile menu ─────────────── */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {links.map(l => (
              <li key={l.name}>
                <Link
                  to={l.path}
                  className="text-white text-lg"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
