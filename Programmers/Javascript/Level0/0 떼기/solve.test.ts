import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '0010',
    answer: '10',
    description: `
      [입출력 예 #1]\n\n
      
      '0010'의 가장 왼쪽에 연속으로 등장하는 '0'을 모두 제거하면 '10'이 됩니다.
    `,
  },
  {
    input: '854020',
    answer: '854020',
    description: `
      [입출력 예 #2]\n\n
      
      '854020'는 가장 왼쪽에 0이 없으므로 '854020'을 return합니다.
    `,
  },
];

describe("0 떼기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
