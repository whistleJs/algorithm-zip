import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['abcdef', 'f'],
    answer: 'abcde',
    description: `
      [입출력 예 #1]\n\n
      
      'abcdef' 에서 'f'를 제거한 'abcde'를 return합니다.
    `,
  },
  {
    input: ['BCBdbe', 'B'],
    answer: 'Cdbe',
    description: `
      [입출력 예 #2]\n\n
      
      'BCBdbe' 에서 'B'를 모두 제거한 'Cdbe'를 return합니다.
    `,
  },
];

describe("특정 문자 제거하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
