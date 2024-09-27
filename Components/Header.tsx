import React from 'react';
import styles from '../Styles/Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            Northeastern Circle K 
            <p className={styles.subtitle}></p>

        </header>
    )
}