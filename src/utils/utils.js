//------Функция для переключателй карточек, делает неактивной стрелки если первый или последние элементы--------------------//
export const findFirstElemLastElemForShowArrow = (initialArray, modifiedArray) => {
    const firstElem = initialArray[0];
    const lastElem = initialArray[initialArray.length - 1];

    const isLeftArrow = modifiedArray.includes(firstElem);
    const isRightArrow = modifiedArray.includes(lastElem);

    return { isLeftArrow, isRightArrow };
}