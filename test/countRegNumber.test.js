import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe("countRegNumber function", function() {
    it("should count the number of registration numbers in a string", function() {
        let regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(regCount, 3);

        regCount = countRegNumber('CA 182736');
        assert.equal(regCount, 1);
    });
});