import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['olleh', 'hello'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      'olleh'의 순서를 바꾸면 'hello'를 만들 수 있습니다.
    `,
  },
  {
    input: ['allpe', 'apple'],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      'allpe'의 순서를 바꿔도 'apple'을 만들 수 없습니다.
    `,
  },
];

describe("A로 B 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
