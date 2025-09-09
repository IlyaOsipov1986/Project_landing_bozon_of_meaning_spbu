import "./RowLeftRightButtons.scss";
import classNames from "classnames";

const RowLeftRightButtons = ({prevGroup, nextGroup, isNotActiveArrow = {} }) => {

    const btnPrevClass = classNames({
        'row-left-right-buttons__btn-prev': true,
        'row-left-right-buttons__not-active-left': isNotActiveArrow.isLeftArrow,
    });

    const btnNextClass = classNames({
        'row-left-right-buttons__btn-next': true,
        'row-left-right-buttons__not-active-right': isNotActiveArrow.isRightArrow,
    });

    return (
        <div className="row-left-right-buttons__container">
            <button onClick={prevGroup} className={btnPrevClass}/>
            <button onClick={nextGroup} className={btnNextClass}/>
        </div>
    )
}

export default RowLeftRightButtons;