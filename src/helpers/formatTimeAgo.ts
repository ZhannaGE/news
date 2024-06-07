export const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const secondPast = (now.getTime() - date.getTime()) / 1000;

    if (secondPast < 60) {
        return `${Math.floor(secondPast)}с назад`;
    }
    if (secondPast < 3600) {
        return `${Math.floor(secondPast / 60)}м назад`;
    }
    if (secondPast <= 86400) {
        return `${Math.floor(secondPast / 3600)}ч назад`;
    }
    if (secondPast > 86400) {
        const day = Math.floor(secondPast / 86400);
        return day === 1 ? `${day} дней назад` : `${day} дней назад`;
    }
};