import parseString, {cellHash} from "../src/parseString";


describe('It Should be a pure function that takes a string of 81 characters and return a nested array of numbers and empty strings',()=>{
    let error = 'Please only pass a string of length 81 and containing "1 - 9 " & " e "';
    it('only accepts strings of length 81',()=>{
        expect(()=>{
            let badString = '1234567891234567891234567891';
            badString = badString + badString + badString;
            parseString(badString)
        }).toThrowError(error);
    });
    it('will reject numbers lower than one',()=>{
        expect(()=>{
            let badString = '103456e891234567891234567891';
            badString = badString + badString + badString;
            parseString(badString)
        }).toThrowError(error);
    });
    it('When passed a string of 81 numbers & "e" it returns a nested array',()=>{
        let testString = '';
        testString = testString.padEnd(81,'1');
        let result = Array(9).fill(Array(9).fill(1));
        expect(parseString(testString)).toEqual(expect.arrayContaining(result));
    });
    describe('Helper Function',()=>{
        describe('cellHash',()=>{
            describe('when passed a string of length one',()=>{
                it('should return a number when passed a number greater than 0 as a string',()=>{
                    expect(cellHash('1')).toBe(1);
                });
                it('should return a space when passed "e"',()=>{
                    expect(cellHash('e')).toBe(' ');
                });
                it('should error when passed 0',()=>{
                    expect(()=>{cellHash('0')}).toThrowError(error);
                });
                it('should error when passed string other than "e"',()=>{
                    expect(()=>{cellHash('f')}).toThrowError(error);
                });


            })
        })
    });
});