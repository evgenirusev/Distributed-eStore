export type IProduct = Readonly<{
    id: number;
    name: string;
    description: string;
    price: number;
    colors: string[];
    imageURLs: string[];
}>;

export enum ProductsActionTypes {
    REQUEST_ALL_ARRIVAL = 'REQUEST_ALL_ARRIVAL',
    REQUEST_BY_ID_ARRIVAL = 'REQUEST_BY_ID_ARRIVAL'
};

export interface IProductsListState {
    products: IProduct[]
}