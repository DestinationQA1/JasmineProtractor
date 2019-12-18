import * as using from 'jasmine-data-provider';
//const using = require('jasmine-data-provider');
describe("Jasmine test suite", function () {
    function plusProvider() {
        return [
            {a: 2, b: 3, expected: 5},
            {a: 14, b: 15, expected: 29},
            {a: 12, b: 13, expected: 25}
        ];
    }
    using(plusProvider, (data) => {
      
    it('addition test case', () => {
        console.log("Executing parameterized test with " + data.a + " " + data.b);
        var result = data.a + data.b;
        expect(result).toEqual(data.expected);
    });

});
});
