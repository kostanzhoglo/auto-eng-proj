// ALA_11 test case reference
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("male has value of 13", function () {
    pm.expect(pm.response.text()).to.include('{"name":"male","value":13}');
});

pm.test("female has value of 12", function () {
    pm.expect(pm.response.text()).to.include('{"name":"female","value":12}');
});
