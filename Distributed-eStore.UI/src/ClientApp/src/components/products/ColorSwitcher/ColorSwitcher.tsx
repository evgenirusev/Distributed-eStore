import * as React from 'react';
import { ColorBox } from '../';
import { store } from '../../../index';
import { actionCreators } from '../../../state/products/productsActions';

type ColorSwitcherProps = {
    colors: string[];
    selectedColorIndex: number;
    productId: string;
}

export const ColorSwitcher: React.FC<ColorSwitcherProps> = ({
    colors,
    selectedColorIndex,
    productId
}) => {
    const defaultColorBoxClass = "color-box__color";

    return <div className="switcher">
        {colors.map((color, index) => {
            const isSelectedClass = index === selectedColorIndex
                ? `${defaultColorBoxClass}--isSelected`
                : "";
            const colorBoxCssClass = `${defaultColorBoxClass} ${isSelectedClass}`;

            return <ColorBox color={color}
                cssClass={colorBoxCssClass}
                selectProductColor={() => actionCreators.selectProductColor(productId, index)(store.dispatch, store.getState)}
            />
        })}
    </div>
};