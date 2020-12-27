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
    const defaultBorderClass = "color-box__border";

    return <div className="switcher">
        {colors.map((color, index) => {
            const isSelectedBorderClass = index === selectedColorIndex
                ? `${defaultBorderClass}--isSelected`
                : "";
            const borderCssClass = `${defaultBorderClass} ${isSelectedBorderClass}`;
            
            return <ColorBox key={`${productId}-${index}`} color={color}
                borderClass={borderCssClass}
                selectProductColor={() => actionCreators.selectProductColor(productId, index)(store.dispatch, store.getState)}
            />
        })}
    </div>
};