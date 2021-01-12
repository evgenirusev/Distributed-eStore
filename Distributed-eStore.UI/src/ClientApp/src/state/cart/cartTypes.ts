export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CHANGE_QUANTITY = 'CHANGE_QUANTITY',
    PLACE_ORDER = 'PLACE_ORDER'
};  

export interface ICartState {
    productIdToCartProductMap: { [key: string]: ICartProduct };
}

export interface ICartProduct {
    id: string;
    name: string;
    price: number;
    color: string;
    imageURL: string;
    size: string;
    quantity: number;
}