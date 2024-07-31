import assert from "assert";
import greet from "../greet.js";

describe('greet', function() {
    it('should greet Bob', function() {
        assert.equal(greet('Bob'), 'Hello, Bob');
    });

    it('should greet Sam', function() {
        assert.equal(greet('Sam'), 'Hello, Sam');
    });
});