var expect = require("chai").expect;
var assert = require("chai").assert;
const { sampleProvinceData } = require("../app/mock");
const { Province } = require("../app/Province");

describe("province", function () {
    let asia;
    this.beforeEach(function() {
        // Every test case has a new test fixture other than a shared test fixture
        // Every test case has a shared test fixture code
        asia = new Province(sampleProvinceData());
    });

    it("shortfall", function () {
        // assert style
        assert.equal(asia.shortfall, 5);
    });

    it("profit", function () {
        // expedt styoe
        expect(asia.profit).equal(230);
    });

    it("change production", function() {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
});