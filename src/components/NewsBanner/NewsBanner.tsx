import React from 'react';
import styles from './styles.module.css';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../../components/Image/Image';
import withSkeleton from "../../helpers/hock/withSkeleton.tsx";

type NewsItem = {
    title: string;
    author: string;
    published: string;
    image: string | null;
};

type NewsBannerProps = {
    item: NewsItem;
};

const NewsBanner: React.FC<NewsBannerProps> = ({ item }) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} от {item.author}</p>
        </div>
    );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
