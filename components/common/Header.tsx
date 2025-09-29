import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className={styles.header}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.logo}>
            PB
          </Link>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className={styles.navToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.headerRight}`}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/experience" className={styles.navLink}>Experience</Link>
            <Link href="/tools" className={styles.navLink}>Tools</Link>
            <Link href="/project" className={styles.navLink}>Projects</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;