import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe("totalPhoneBill function", function () {
    it("should return 'R7.45' for 'call, sms, call, sms, sms'", function() {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

    it("should return 'R3.40' for 'call, sms'", function() {
        assert.equal(totalPhoneBill('call, sms'), 'R3.40');
    });

    it("should return 'R1.30' for 'sms, sms'", function() {
        assert.equal(totalPhoneBill('sms, sms'), 'R1.30');
    });
});
