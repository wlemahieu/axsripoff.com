/**
 * Global site menu navigation
 */
import styles from '@components/Navigation.module.css';
import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import Link from '@suid/material/Link';

const Navigation: Component = () => {
  const navigate = useNavigate();

  return (
    <nav class={styles.root}>
      <ul class={styles.list}>
        <li>
          <Link onClick={() => navigate('/')}>Complaints</Link>
        </li>
        <li>
          <Link onClick={() => navigate('/about')}>About</Link>
        </li>
        <li>
          <Link onClick={() => navigate('/contact')}>Contact</Link>
        </li>
        <li>
          <Link onClick={() => navigate('/login')}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
