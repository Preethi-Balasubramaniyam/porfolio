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
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Preethi Balasubramaniyam
          </Link>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.headerRight}`}>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/project">Projects & Education</Nav.Link>
            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;