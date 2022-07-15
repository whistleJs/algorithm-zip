import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], boolean[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [4, 7, 12],
      [true, false, true]
    ],
    answer: 9,
    description: `
      [입출력 예 #1]\n\n
      
      signs가 [true, false, true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.\n
      따라서 세 수의 합인 9를 return 해야 합니다.
    `
  },
  {
    input: [
      [1, 2, 3],
      [false, false, true]
    ],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      signs가 [false, false, true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.\n
      따라서 세 수의 합인 0을 return 해야 합니다.
    `
  },
];

describe('음양 더하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
