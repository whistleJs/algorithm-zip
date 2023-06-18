import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 150000,
    answer: 142500,
    description: `
      [입출력 예 #1]\n\n
      
      150,000원에서 5%를 할인한 142,500원을 return 합니다.
    `,
  },
  {
    input: 580000,
    answer: 464000,
    description: `
      [입출력 예 #2]\n\n
      
      580,000원에서 20%를 할인한 464,000원을 return 합니다.
    `,
  },
];

describe("옷가게 할인 받기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
