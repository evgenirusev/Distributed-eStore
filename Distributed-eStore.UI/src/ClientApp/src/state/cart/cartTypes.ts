import { IProduct } from "../products/productsTypes";

export type ICartProduct = IProduct & {
    quantity: number
};

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    INCREMENT_PRODUCT_QUANTITY = 'INCREMENT_PRODUCT_QUANTITY',
    DECREMENT_PRODUCT_QUANTITY = 'DECREMENT_PRODUCT_QUANTITY',
    PLACE_ORDER = 'PLACE_ORDER'
};

export interface ICartListState {
    cartProductIDs: string[];
}