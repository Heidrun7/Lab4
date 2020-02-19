var expect = require('chai').expect;
const d4 = require("./../app.js");

describe('p1 test', function() {
    var arr = ["one", 2, "three"];
    var revArr = ["three", 2, "one"];
    it("Function should return the reversed array", function() {
        expect(d4.p1(arr)).to.deep.equal(revArr);
    });
});
