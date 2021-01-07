import * as React from 'react';
import { ColorBox } from '../';
import { store } from '../../../index';
import { IAppThunkAction, ReduxAction } from '../../../state';

type ColorSwitcherProps = {
    colors: string[];
    selectedColorIndex: number;
    productId: string;
    selectProductColorAction: (productId: string, colorIndex: number) => IAppThunkAction<ReduxAction>;
}

export const ColorSwitcher: React.FC<ColorSwitcherProps> = ({
    colors,
    selectedColorIndex,
    productId,
    selectProductColorAction
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
                selectProductColor={() => selectProductColorAction(productId, index)(store.dispatch, store.getState)}
            />
        })}
    </div>
};