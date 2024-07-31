export default function findItemsOver(itemList, threshold) {
    return itemList.filter(item => item.quantity > threshold);
}