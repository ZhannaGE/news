import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import getNews from '../../api/apiNews';
import NewsList from "../../components/NewsList/NewsList.tsx";

const Main: React.FC = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNews();
    }, []);

    return (
        <main className={styles.main}>
            {/*{news && news.map((item, index) => (*/}
            {news.length > 0 && <NewsBanner item={news[8]} />}
            {/*))}*/}
            <NewsList news={news} />
        </main>
    );
};

export default Main;

