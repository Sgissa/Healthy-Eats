import React from "react";
import styles from '@/styles/nav.module.css';

export default function Navbar() {
    return (
        <>
        <nav className={styles.navi}>
            <a href="/" className={styles.link}>Home</a>
            <a href="/about" className={styles.link}>About</a>
            <a href="#" className={styles.link}>Products</a>
            <a href="#" className={styles.link}>Contact</a>
        </nav>
        
        </>
    )
}