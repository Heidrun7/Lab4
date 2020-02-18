var expect = require('chai').expect;
const d4 = require("./../app.js");

describe('d4()', function() {
    var arr = ["one", 2, "three"];
    var revArr = ["three", 2, "one"];
    it("p1 test: Function should return the reversed array", function() {
        expect(d4.p1(arr)).to.deep.equal(revArr);
    });
});
