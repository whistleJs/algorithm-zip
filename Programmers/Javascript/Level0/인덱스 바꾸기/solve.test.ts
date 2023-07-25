import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['hello', 1, 2],
    answer: 'hlelo',
    description: `
      [입출력 예 #1]\n\n
      
      'hello'의 1번째 인덱스인 'e'와 2번째 인덱스인 'l'을 바꾸면 'hlelo'입니다.
    `,
  },
  {
    input: ['I love you', 3, 6],
    answer: 'I l veoyou',
    description: `
      [입출력 예 #2]\n\n
      
      'I love you'의 3번째 인덱스 'o'와 ' '(공백)을 바꾸면 'I l veoyou'입니다.
    `,
  },
];

describe("인덱스 바꾸기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
