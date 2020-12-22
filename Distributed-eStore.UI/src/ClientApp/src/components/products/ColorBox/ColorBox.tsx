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
    return <span onClick={selectProductColor} className={cssClass} style={{ backgroundColor: color }}></span>
};