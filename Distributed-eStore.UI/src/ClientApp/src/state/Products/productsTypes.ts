import { ProductCategories } from "../../constants";

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
    REQUEST_PRODUCTS_MALE = 'REQUEST_PRODUCTS_MALE',
    REQUEST_PRODUCTS_FEMALE = 'REQUEST_PRODUCTS_FEMALE',
    REQUEST_PRODUCTS_ACCESSORIES = 'REQUEST_PRODUCTS_ACCESSORIES',
    REQUEST_BY_ID_ARRIVAL = 'REQUEST_BY_ID_ARRIVAL',
    SELECT_PRODUCT_COLOR = 'SELECT_PRODUCT_COLOR'
};

export interface IProductsListState {
    categoryToProductMaps: Record<string, Record<string, IProduct>>;
    currentCategory: ProductCategories;
};