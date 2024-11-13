const sum = require('./sum');


describe('testing sum function', () => {
    test('should result in 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('should result in -5', () => {
        expect(sum(-2, -3)).toBe(-5);
    });
})
