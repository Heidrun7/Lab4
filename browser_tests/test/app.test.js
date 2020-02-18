describe('p1 test', function() {
    var arr = ["one", 2, "three"];
    var revArr = ["three", 2, "one"];
    it("Function should return the reversed array", function() {
        chai.expect(p1(arr)).to.deep.equal(revArr);
    });
});
