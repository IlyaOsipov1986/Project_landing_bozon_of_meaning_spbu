import "./Loader.scss";
import classNames from "classnames";

const Loader = ({ isLarge = false, isBlack = false }) => {

    const loaderClasses = classNames({
        loader: true,
        loader_lg: isLarge,
        loader_black: isBlack,
    });
    
    return (
        <div className={loaderClasses}>
            <span className="loader__bar"></span>
            <span className="loader__bar"></span>
            <span className="loader__bar"></span>
        </div>
    );
};

export default Loader;