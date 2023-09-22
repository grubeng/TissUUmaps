import h5Utils from "../js/utils/h5Utils"
import {expect, test} from '@jest/globals';

test('h5Utils.ts', () => {
     expect(h5Utils.relative_root).toBe('../../');
});