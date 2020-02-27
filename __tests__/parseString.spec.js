import parseString, {cellHash} from "../src/parseString";


describe('It Should be a pure function that takes a string of 81 characters and return a nested array of numbers and empty strings',()=>{
    let error = 'Please only pass a string of length 81 and containing "0 - 9 " & " e "';
    it('only accepts strings of length 81',()=>{
        expect(()=>{
            let badString = '1234567891234567891234567891';
            badString = badString + badString + badString;
            parseString(badString)
        }).toThrowError(error);
    });
    it('will accept numbers lower than one and return a string',()=>{
        let testString = '53007eeee6ee195eeee98eeee6e8eee6eee34ee8e3ee17eee2eee6e6eeee28eeee419ee5eeee8ee79';
        let result = [
            [ 5 , 3 ,' ',' ', 7 ,' ',' ',' ',' '],
            [ 6 ,' ',' ', 1 , 9 ,  5,' ',' ',' '],
            [' ', 9 , 8 ,' ',' ',' ',' ', 6 ,' '],
            [ 8 ,' ',' ',' ', 6 ,' ',' ',' ', 3 ],
            [ 4 ,' ',' ', 8 ,' ', 3 ,' ',' ', 1 ],
            [ 7 ,' ',' ',' ', 2 ,' ',' ',' ', 6 ],
            [' ', 6 ,' ',' ',' ',' ', 2 , 8 ,' '],
            [' ',' ',' ', 4 , 1 , 9 ,' ',' ', 5 ],
            [' ',' ',' ',' ', 8 ,' ',' ', 7 , 9 ],
        ];
        expect(parseString(testString)).toMatchObject(result);

    });
    it('When passed a string of 81 numbers & "e" it returns a nested array',()=>{
        let testString = '53ee7eeee6ee195eeee98eeee6e8eee6eee34ee8e3ee17eee2eee6e6eeee28eeee419ee5eeee8ee79';
        let result = [
            [ 5 , 3 ,' ',' ', 7 ,' ',' ',' ',' '],
            [ 6 ,' ',' ', 1 , 9 ,  5,' ',' ',' '],
            [' ', 9 , 8 ,' ',' ',' ',' ', 6 ,' '],
            [ 8 ,' ',' ',' ', 6 ,' ',' ',' ', 3 ],
            [ 4 ,' ',' ', 8 ,' ', 3 ,' ',' ', 1 ],
            [ 7 ,' ',' ',' ', 2 ,' ',' ',' ', 6 ],
            [' ', 6 ,' ',' ',' ',' ', 2 , 8 ,' '],
            [' ',' ',' ', 4 , 1 , 9 ,' ',' ', 5 ],
            [' ',' ',' ',' ', 8 ,' ',' ', 7 , 9 ],
        ];
        expect(parseString(testString)).toEqual(expect.arrayContaining(result));
    });
    describe('Helper Function',()=>{
        describe('cellHash',()=>{
            describe('when passed a string of length one',()=>{
                it('should return a number when passed a number greater than 0 as a string',()=>{
                    expect(cellHash('1')).toBe(1);
                });
                it('should return a space when passed "e" or "0',()=>{
                    expect(cellHash('e')).toBe(' ');
                    expect(cellHash('0')).toBe(' ');
                });
                it('should error when passed string other than "e"',()=>{
                    expect(()=>{cellHash('f')}).toThrowError(error);
                });
            })
        })
    });
});