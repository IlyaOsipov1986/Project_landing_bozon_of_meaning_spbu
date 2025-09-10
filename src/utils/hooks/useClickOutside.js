import { useState, useEffect, useRef } from "react";

const useClickOutside = () => {
    const ref = useRef(null);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpened(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return { ref, isOpened, setIsOpened };
};

export default useClickOutside;
