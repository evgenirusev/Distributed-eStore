import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState, IAppThunkAction, ReduxAction } from '../../../state';
import './ColorBox.css';
import { actionCreators } from '../../../state/products/productsActions';
import { reducer } from '../../../state/products';

type ColorBoxProps = {
    selectProductColor: IAppThunkAction<ReduxAction>;
    products: ReturnType<typeof reducer>;
    color: string;
    isSelected: boolean;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
    color,
    isSelected
}) => {
    const defaultClass = "color-box";
    const isSelectedClass = `${defaultClass}--isSelected`;

    return <div className={`${defaultClass} ${isSelected ?? isSelectedClass}`}>
        <span className="color-box__color" style={{ backgroundColor: color }}></span>
    </div>
};

const mapStateToProps = (state: IApplicationState) => state.products;

export default connect(mapStateToProps, actionCreators.selectProductColor)(ColorBox);