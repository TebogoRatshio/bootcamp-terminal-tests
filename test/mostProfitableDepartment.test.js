import assert from "assert";
import mostProfitableDepartment from "../mostProfitableDepartment.js";


const salesData = [
    { department: 'hardware', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'hardware', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'hardware', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'hardware', sales: 12000, day: 'Thursday' },
    { department: 'outdoor', sales: 18007, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'hardware', sales: 7005, day: 'Friday' },
    { department: 'outdoor', sales: 12006, day: 'Friday' },
    { department: 'carpentry', sales: 16109, day: 'Friday' },
];

const salesData2 = [
    { department: 'electronics', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'electronics', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'electronics', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'electronics', sales: 12000, day: 'Thursday' },
    { department: 'outdoor', sales: 18007, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'electronics', sales: 7005, day: 'Friday' },
    { department: 'outdoor', sales: 12006, day: 'Friday' },
    { department: 'carpentry', sales: 16109, day: 'Friday' },
];

describe("mostProfitableDepartment function", function() {
    it("should return 'outdoor' as the most profitable department for dataset 1", function() {
        assert.equal(mostProfitableDepartment(salesData), 'outdoor');
    });

    it("should return 'electronics' as the most profitable department for dataset 2", function() {
        assert.equal(mostProfitableDepartment(salesData2), 'outdoor');
    });
});
