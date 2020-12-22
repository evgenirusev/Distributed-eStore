import * as React from 'react';
import { ColorBox } from '../';
import { store } from '../../../index';
import { actionCreators } from '../../../state/products/productsActions';

type ColorSwitcherProps = {
    colors: string[];
    selectedColorIndex: number;
}

export const ColorSwitcher: React.FC<ColorSwitcherProps> = ({
    colors,
    selectedColorIndex
}) => {
    const defaultColorBoxClass = "color-box__color";

    return <div className="switcher">
        {colors.map(c => {
            const isSelectedClass = colors.indexOf(c) === selectedColorIndex
                ? `${defaultColorBoxClass}--isSelected`
                : "";
            const colorBoxCssClass = `${defaultColorBoxClass} ${isSelectedClass}`;

            return <ColorBox color={c} cssClass={colorBoxCssClass} selectProductColor={() => actionCreators.selectProductColor()(store.dispatch, store.getState)} />
        })}
    </div>
};