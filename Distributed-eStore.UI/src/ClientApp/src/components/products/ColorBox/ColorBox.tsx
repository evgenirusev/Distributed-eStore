import * as React from 'react';
import './ColorBox.css';

type ColorBoxProps = {
    color: string;
    cssClass: string;
    selectProductColor: any;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
    color,
    cssClass,
    selectProductColor
}) => {
    return <div onClick={selectProductColor} className={cssClass}>
        <span className="color-box__color" style={{ backgroundColor: color }}></span>
    </div>
};