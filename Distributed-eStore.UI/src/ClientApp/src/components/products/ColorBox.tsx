import * as React from 'react';

type ColorBoxProps = {
    color: string,
    isSelected: boolean
};

export const ColorBox: React.FC<ColorBoxProps> = ({
    color,
    isSelected
}) => {
    return <div className="color-box">
        <span className="color-box__color" style={{ backgroundColor: color }}></span>
    </div>
};