import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({ page_number = 1, page_size = 10, category = null }) => {
    try {
        const params = {
            apiKey: API_KEY,
            language: 'ru',
            page_number,
            page_size,
        };
        if (category) {
            params.category = category;
        }
        const response = await axios.get(`${BASE_URL}latest-news`, { params });
        return response.data.news.filter(item => item.image !== "None"); // Фильтрация новостей
    } catch (error) {
        console.error('Ошибка при получении новостей:', error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
                language: 'ru',
            },
        });
        return response.data.categories || []; // Возвращаем пустой массив, если нет данных
    } catch (error) {
        console.error('Ошибка при получении категорий:', error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
};
