import * as React from 'react';
import { ColorBox } from './ColorBox';

type ColorSwitcherProps = {
    colors: string[];
}

export const ColorSwitcher: React.FC<ColorSwitcherProps> = ({
    colors
}) => {
    return <div className="switcher">
        {colors.map(c =>
            <ColorBox color={c} isSelected={colors.indexOf(c) === 0} />
        )}
    </div>
};