export type Product = Readonly<{
    id: number;
    name: string;
    description: string;
    price: number;
}>;

export enum ProductsActionTypes {
    REQUEST_ALL_ARRIVAL = 'REQUEST_ALL_ARRIVAL',
    REQUEST_BY_ID_ARRIVAL = 'REQUEST_BY_ID_ARRIVAL'
};

export interface IProductsState {
    products: Product[]
}