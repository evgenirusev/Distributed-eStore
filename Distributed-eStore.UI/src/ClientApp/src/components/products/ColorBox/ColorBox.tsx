import * as React from 'react';
import './ColorBox.css';
import { store } from '../../../index';
import { actionCreators } from '../../../state/products/productsActions';

type ColorBoxProps = {
    color: string;
    isSelected: boolean;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
    color,
    isSelected
}) => {
    const defaultClass = "color-box";
    const isSelectedClass = `${defaultClass}--isSelected`;

    return <div
            onClick={() => actionCreators.selectProductColor()(store.dispatch, store.getState)}
            className={`${defaultClass} ${isSelected ?? isSelectedClass}`}>
        <span className="color-box__color" style={{ backgroundColor: color }}></span>
    </div>
};