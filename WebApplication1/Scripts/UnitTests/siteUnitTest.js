describe('IDNumberValidLength ', function () {
    it('ID Number Length must be 13', function () {
        expect(IsIDNumberCorrectLength("9008015738080")).toEqual(13);
    });
});
describe('IDNumberInValidLength ', function () {
    it('ID Number Length must not be 13', function () {
        expect(IsIDNumberCorrectLength("9008")).not.toEqual(13);
    });
});

describe('IDNumberNumeric ', function () {
    it('ID Number must be just Numbers', function () {
        expect(IsNumbers("aaaaaaaaaaaaa")).toBeFalsy();
    });
});
describe('IDNumberNumeric ', function () {
    it('ID Number must be just Numbers', function () {
        expect(IsNumbers("9008015738080")).toBeTruthy();
    });
});