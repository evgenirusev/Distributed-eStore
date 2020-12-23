import * as React from 'react';
import './ColorBox.css';

type ColorBoxProps = {
    color: string;
    borderClass: string;
    selectProductColor: any;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
    color,
    borderClass,
    selectProductColor
}) => {
    return <div className={ borderClass }>
        <span onClick={selectProductColor} className="color-box__color" style={{ backgroundColor: color }}></span>
    </div>
};