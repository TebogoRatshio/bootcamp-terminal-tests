export default function findItemsOver20(itemList) {
    return itemList.filter(item => item.qty > 20);
}

const itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

const itemList2 = [
    { name: 'apples', qty: 40 },
    { name: 'pears', qty: 15 },
    { name: 'bananas', qty: 22 },
    { name: 'apples', qty: 3 },
];

const itemList3 = [
    { name: 'apples', qty: 5 },
    { name: 'pears', qty: 8 },
    { name: 'bananas', qty: 12 },
    { name: 'apples', qty: 3 },
];

const results = [
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
];

const results2 = [
    { name: 'apples', qty: 40 },
    { name: 'bananas', qty: 22 },
];

const results3 = [];
