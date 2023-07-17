import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['ABBAA', 'AABB'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      'ABBAA'에서 'A'와 'B'를 서로 바꾸면 'BAABB'입니다. 여기에는 부분문자열 'AABB'가 있기 때문에 1을 return 합니다.
    `,
  },
  {
    input: ['ABAB', 'ABAB'],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      'ABAB'에서 'A'와 'B'를 서로 바꾸면 'BABA'입니다. 여기에는 부분문자열 'BABA'가 없기 때문에 0을 return 합니다.
    `,
  },
];

describe("문자열 바꿔서 찾기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
