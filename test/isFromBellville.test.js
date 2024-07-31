import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe("isFromBellville function", function () {
    it("should return true for CY 123", function () {
        assert.equal(isFromBellville('CY 123'), true);
    });

    it("should return false for CJ 123", function () {
        assert.equal(isFromBellville('CJ 123'), false);
    });
});