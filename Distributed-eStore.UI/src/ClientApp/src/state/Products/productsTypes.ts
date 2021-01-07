export type IProduct = {
    id: string;
    name: string;
    description: string;
    price: number;
    colors: string[];
    imageURLs: string[];
    selectedColorIndex: number;
};

export enum ProductsActionTypes {
    REQUEST_ALL_ARRIVAL = 'REQUEST_ALL_ARRIVAL',
    REQUEST_BY_ID_ARRIVAL = 'REQUEST_BY_ID_ARRIVAL',
    SELECT_PRODUCT_COLOR_FROM_PRODUCT_LIST = 'SELECT_PRODUCT_COLOR_FROM_PRODUCT_LIST',
    SELECT_PRODUCT_COLOR_FROM_PRODUCT_VIEW = 'SELECT_PRODUCT_COLOR_FROM_PRODUCT_VIEW',
};

export interface IProductsListState {
    productIDsToProductsMap: { [key: string]: IProduct };
    selectedProduct: IProduct;
};