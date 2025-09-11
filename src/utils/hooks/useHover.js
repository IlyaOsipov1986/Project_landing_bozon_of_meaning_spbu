import { useState, useRef, useEffect } from "react";

const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('mouseenter', () => setIsHovered(true));
            node.addEventListener('mouseleave', () => setIsHovered(false));

            return () => {
                node.removeEventListener('mouseenter', () => setIsHovered(true));
                node.removeEventListener('mouseleave', () => setIsHovered(false));
            };
        }
    }, []);

    return [ref, isHovered];
}
export default useHover;