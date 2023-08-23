import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'abcabcadc',
    answer: 'd',
    description: `
      [입출력 예 #1]\n\n
      
      'abcabcadc'에서 하나만 등장하는 문자는 'd'입니다.
    `,
  },
  {
    input: 'abdc',
    answer: 'abcd',
    description: `
      [입출력 예 #2]\n\n
      
      'abdc'에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 'abcd'를 return 합니다.
    `,
  },
  {
    input: 'hello',
    answer: 'eho',
    description: `
      [입출력 예 #3]\n\n
      
      'hello'에서 한 번씩 등장한 문자는 'heo'이고 이를 사전 순으로 정렬한 'eho'를 return 합니다.
    `,
  },
];

describe("한 번만 등장한 문자", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
