export const getAllPostsUrl = "/products";
export type Product = Readonly<{
    id: number;
    name: string;
    description: string;
    price: number;
}>;