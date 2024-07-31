import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('yearsAgo function', function() {
    it('should calculate how many years ago 1976 was', function() {
        assert.equal(yearsAgo(1976), new Date().getFullYear() - 1976);
    });

    it('should calculate how many years ago 2000 was', function() {
        assert.equal(yearsAgo(2000), new Date().getFullYear() - 2000);
    });
});