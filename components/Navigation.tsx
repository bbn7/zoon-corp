import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <div className={styles.navBrand}>
            <Link href="/" className={styles.brandLink} onClick={closeMenu}>
              Zoon Corp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className={`${styles.navList} ${styles.desktopNav}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${router.pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNavContainer}>
            <div className={styles.mobileNavHeader}>
              <Link href="/" className={styles.mobileBrand} onClick={closeMenu}>
                Zoon Corp
              </Link>
              <button
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${router.pathname === item.href ? styles.active : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className={styles.backdrop} 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
