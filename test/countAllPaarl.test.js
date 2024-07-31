import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe("countAllPaarl function", function () {
    const regNumbers = "CJ 678 543, CA 345 123, CJ 67890, CK 345, CJ 123";
    const regNumbersForPaarl = countAllPaarl(regNumbers);

    it("should find 3 Paarl registration numbers", function() {
        assert.equal(regNumbersForPaarl.length, 3, 'There are 3 Paarl reg numbers.');
    });

    it("should find 'CJ 678 543' as the first Paarl registration number", function() {
        assert.equal(regNumbersForPaarl[0], 'CJ 678 543');
    });

    it("should find 'CJ 67890' as the second Paarl registration number", function() {
        assert.equal(regNumbersForPaarl[1], 'CJ 67890');
    });

    it("should find 'CJ 123' as the third Paarl registration number", function() {
        assert.equal(regNumbersForPaarl[2], 'CJ 123');
    });
});