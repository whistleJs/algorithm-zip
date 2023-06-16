import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], string[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['a', 'b', 'c'],
      ['com', 'b', 'd', 'p', 'c']
    ],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      'b'와 'c'가 같으므로 2를 return합니다.
    `,
  },
  {
    input: [
      ['n', 'omg'],
      ['m', 'dot']
    ],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      같은 원소가 없으므로 0을 return합니다.
    `,
  },
];

describe("배열의 유사도", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
