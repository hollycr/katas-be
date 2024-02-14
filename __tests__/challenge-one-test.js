describe('Challenge One', () => {
    test('Return an empty array if no items are added', () => {
        const data = JSON.parse(process.env.TEST_INPUT);
        const func = new Function('return ' + data.userInput)();
        const input = [];
        const expected = [];
        expect(func(input)).toEqual(expected);
    })
})