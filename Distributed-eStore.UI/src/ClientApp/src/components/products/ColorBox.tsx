import * as React from 'react';

type ColorBoxProps = {
    color: string,
    isSelected: boolean
};

export const ColorBox: React.FC<ColorBoxProps> = ({
    color,
    isSelected
}) => {
    const defaultClass = "color-box";
    const isSelectedClass = `${defaultClass}--isSelected`;

    return <div className={`${defaultClass} ${isSelected ?? isSelectedClass}`}>
        <span className="color-box__color" style={{ backgroundColor: color }}></span>
    </div>
};