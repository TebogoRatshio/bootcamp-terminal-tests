import assert from "assert";
import transportFee from "../transportFee.js";

describe("transportFee function", function() {
    it("should return 'R20' for morning shift", function() {
        assert.equal(transportFee('morning'), 'R20');
    });

    it("should return 'R10' for afternoon shift", function() {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it("should return 'free' for night shift", function() {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});