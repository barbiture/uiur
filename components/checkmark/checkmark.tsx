import React from 'react';
import styles from './checkmark.module.css'
const Checkmark = () => {
    return (
        <div className={styles.checkmarkWrapper}>
            <span className={styles.checkmark} />
        </div>
    );
};

export default Checkmark;
