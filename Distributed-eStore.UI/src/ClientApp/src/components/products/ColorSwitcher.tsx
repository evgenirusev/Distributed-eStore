import * as React from 'react';
import { IApplicationState } from '../../state';
import { connect } from 'react-redux';
import { IProduct } from '../../state/products';

type ColorSwitcherProps = {
    allProducts: IProduct[];
    switcherProductId: string;
}

export const ColorSwitcher: React.FC<ColorSwitcherProps> = ({
    allProducts,
    switcherProductId
}) => {
    return <div className="switcher">

    </div>
};

export default connect((state: IApplicationState) => state.products.products)(ColorSwitcher);