export type IProduct = Readonly<{
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
    allProducts: IProduct[],
    currentProducts: IProduct[]
}