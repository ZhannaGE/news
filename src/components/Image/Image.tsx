import React from 'react';
import styles from './styles.module.css';

type ImageProps = {
    image: string | null;
};

const Image: React.FC<ImageProps> = ({ image }) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img src={image} alt="news" className={styles.image} /> : null}
        </div>
    );
};

export default Image;

