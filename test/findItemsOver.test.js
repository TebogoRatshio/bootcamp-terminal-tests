import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe("findItemsOver function", function () {
    it("should return items with quantity over 20 from itemList", function() {
        const itemList = [
            {name: "item1", qty: 10},
            {name: "item2", qty: 25},
            {name: "item3", qty: 30}
        ];
        const itemList2 = [
            {name: "item1", qty: 15},
            {name: "item2", qty: 5},
            {name: "item3", qty: 45}
        ];
        const itemList3 = [
            {name: "item1", qty: 22},
            {name: "item2", qty: 18},
            {name: "item3", qty: 50}
        ];

        const results = [
            {name: "item2", qty: 25},
            {name: "item3", qty: 30}
        ];
        const results2 = [
            {name: "item3", qty: 45}
        ];
        const results3 = [
            {name: "item1", qty: 22},
            {name: "item3", qty: 50}
        ];
    });
});
