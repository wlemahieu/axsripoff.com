/**
 * Default home page view
 */
import { Component } from 'solid-js';
import styles from '@views/Home.module.css';

const Home: Component = () => {
  return (
    <div class={styles.root}>Welcome to a place where you can voice your experience and opinions relating to AXS.</div>
  );
};

export default Home;
