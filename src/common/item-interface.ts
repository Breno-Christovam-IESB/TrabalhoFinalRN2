export interface ItemProps {
    category: ICategory;
    _id: string;
    name: string;
    unit: string;
    imageUrl: string;
    description: string;
    quantity?: number;
    price: number;
    isFetching: boolean;
}

export interface ICategory {
    id: number;
    name: string;
}