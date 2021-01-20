import { ICartState } from "../cart";

export const loadCartState = (): ICartState | undefined => {
    try {
        const serializedCartState = localStorage.getItem('cartState');
        if (serializedCartState === null) {
            return undefined;
        }

        return JSON.parse(serializedCartState);
    } catch (err) {
        return undefined;
    }
};

export const saveCartToLocalStorage = (cart: ICartState) => {
    try {
        const serializedCart = JSON.stringify(cart);
        localStorage.setItem('cartState', serializedCart);
    } catch {
        // handle
    }
};