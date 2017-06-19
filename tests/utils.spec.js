import * as utils from '../src/utils';

describe('utils', function () {

    it('bind unbind', function () {
        let a = {name: 'a'},
            b = {name: 'b'},
            c = {name: 'c'};

        function test(a) {
            let name = this && this.name || 'none';
            return name + a;
        }

        expect(test(3)).toBe('none3');

        let testA = utils.bind(test, a);
        expect(testA(1)).toBe('a1');
        expect(testA(2)).toBe('a2');

        let testB = utils.bind(testA, b);
        expect(testB(1)).not.toBe('a1');
        expect(testB(1)).toBe('b1');

        let testUnbind = utils.unbind(testA);
        expect(testUnbind(2)).toBe('none2');
    });

    it('concat', function () {
        expect(utils.concat(1)).toEqual(jasmine.any(Array));
        expect(utils.concat(1, 1)).toEqual(jasmine.any(Array));
        expect(utils.concat(1, [1, 1])).toEqual(jasmine.any(Array));
        expect(utils.concat([1], 1)).toEqual(jasmine.any(Array));
        expect(utils.concat([1], [1])).toEqual(jasmine.any(Array));
        expect(utils.concat(1, [1, 1])).toEqual([1, 1, 1]);
        expect(utils.concat(1, [1, 1])).toEqual([1, 1, 1]);
        expect(utils.concat([1], 1)).toEqual([1, 1]);
        expect(utils.concat([1], [1])).toEqual([1, 1]);
        expect(utils.concat([1, 1], [1, 1])).toEqual([1, 1, 1, 1]);
    });

    it('each', function () {
        let obj = {
                a: 'a1',
                b: 'b1'
            },
            result = [];

        utils.each(obj, (val, key) => {
            result.push([key, val]);
        });

        expect(result[0][0]).toBe('a');
        expect(result[0][1]).toBe('a1');
        expect(result[1][0]).toBe('b');
        expect(result[1][1]).toBe('b1');
    });
});
