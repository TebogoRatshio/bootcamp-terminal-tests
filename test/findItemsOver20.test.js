import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

const itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

const results = [
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 }
];

const itemList2 = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 19 },
    { name: 'bananas', qty: 23 },
    { name: 'apples', qty: 3 },
];

const results2 = [
    { name: 'bananas', qty: 23 }
];

const itemList3 = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 19 },
    { name: 'bananas', qty: 17 },
    { name: 'apples', qty: 3 },
];

const results3 = [];

describe("findItemsOver20 function", function () {
    it("should return items with quantity over 20 from itemList", function() {
        assert.deepEqual(findItemsOver20(itemList), results);
    });

    it("should return items with quantity over 20 from itemList2", function() {
        assert.deepEqual(findItemsOver20(itemList2), results2);
    });

    it("should return an empty array for itemList3 as no items have quantity over 20", function() {
        assert.deepEqual(findItemsOver20(itemList3), results3);
    });
});
