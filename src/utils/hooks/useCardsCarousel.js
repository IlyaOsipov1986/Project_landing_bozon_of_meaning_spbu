import {useCallback, useState} from "react";

const useCardsCarousel = (cards, maxAmountItems = 0) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = cards.length;
    const maxIndex = Math.max(totalItems - maxAmountItems, 0);

    const nextGroup = useCallback(() => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    }, [maxIndex]);

    const prevGroup = useCallback(() => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    }, []);

    const visibleCards = cards.slice(currentIndex, currentIndex + maxAmountItems);

    return { visibleCards, nextGroup, prevGroup };
}   

export default useCardsCarousel;