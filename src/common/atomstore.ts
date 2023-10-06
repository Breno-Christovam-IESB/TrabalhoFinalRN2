import { ItemProps } from "./item-interface";
import { atom } from "jotai";

export const carQuantity = atom<number>(0);
export const carItems = atom<ItemProps[]>([]);

export const carQuantityTotal = atom(get => {
    const quantityItems = get(carItems);
    const quantityTotal = quantityItems.reduce(
        (total, item) => total + (item.quantity || 0),
        0,
    );
    return quantityTotal;
});

export const totalInCar = atom(get => {
    const items = get(carItems);
    const valueTotal = items.reduce((total, item) => {
        const priceItem = (item.price || 0) * (item.quantity || 0);
        return total + priceItem;
    }, 0);
    return valueTotal;
}); 