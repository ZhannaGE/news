import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews, getCategories } from '../../api/apiNews';
import NewsList from "../../components/NewsList/NewsList.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Categories from "../../components/Categories/Categories.tsx";
import Search from "../../components/Search/Search.tsx";
import {useDebounce} from "../../helpers/hooks/src/shared/hooks/useDebounce.ts";




const Main: React.FC = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [keywords, setKeywords] = useState('');
    const totalPages = 10;
    const pageSize = 10;

    const debouncedKeywords = useDebounce(keywords, 1500);

    const fetchNews = async () => {
        try {
            setIsLoading(true);
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === "All" ? null : selectedCategory,
                keywords: debouncedKeywords,
            });
            setNews(response);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(["All", ...response]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchNews();
    }, [currentPage, selectedCategory, debouncedKeywords]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className={styles.main}>
            <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={(category) => {
                    setSelectedCategory(category);
                    setCurrentPage(1); // Reset page to 1 when category changes
                }}
            />

            <Search keywords={keywords} setKeywords={setKeywords} />

            <NewsBanner isLoading={isLoading} item={news.length > 0 && news[0]} />

            <NewsList isLoading={isLoading}  news={news} />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </main>
    );
};

export default Main;