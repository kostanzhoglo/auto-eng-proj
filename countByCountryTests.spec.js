// ALA_10 test case reference
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("NL has value of 5", function () {
    pm.expect(pm.response.text()).to.include('{"name":"NL","value":5}');
});

pm.test("GB has value of 4", function () {
    pm.expect(pm.response.text()).to.include('{"name":"GB","value":4}');
});

pm.test("DK has value of 2", function () {
    pm.expect(pm.response.text()).to.include('{"name":"DK","value":2}');
});

pm.test("CA has value of 2", function () {
    pm.expect(pm.response.text()).to.include('{"name":"CA","value":2}');
});

pm.test("AU has value of 2", function () {
    pm.expect(pm.response.text()).to.include('{"name":"AU","value":2}');
});

pm.test("FI has value of 2", function () {
    pm.expect(pm.response.text()).to.include('{"name":"FI","value":2}');
});

pm.test("DE has value of 2", function () {
    pm.expect(pm.response.text()).to.include('{"name":"DE","value":2}');
});

pm.test("NZ has value of 1", function () {
    pm.expect(pm.response.text()).to.include('{"name":"NZ","value":1}');
});

pm.test("ES has value of 1", function () {
    pm.expect(pm.response.text()).to.include('{"name":"ES","value":1}');
});

pm.test("FR has value of 1", function () {
    pm.expect(pm.response.text()).to.include('{"name":"FR","value":1}');
});

pm.test("IR has value of 1", function () {
    pm.expect(pm.response.text()).to.include('{"name":"IR","value":1}');
});

pm.test("NO has value of 1", function () {
    pm.expect(pm.response.text()).to.include('{"name":"NO","value":1}');
});

pm.test("CH has value of 1", function () {
    pm.expect(pm.response.text()).to.include('{"name":"CH","value":1}');
});
