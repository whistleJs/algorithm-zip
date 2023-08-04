import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '123',
    answer: 6,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 number는 123으로 각 자리 숫자의 합은 6입니다. 6을 9로 나눈 나머지는 6이고, 실제로 123 = 9 x 13 + 6입니다.\n
      따라서 6을 return 합니다.
    `,
  },
  {
    input: '78720646226947352489',
    answer: 2,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 number는 78720646226947352489으로 각자리 숫자의 합은 101입니다. 101을 9로 나눈 나머지는 2이고, 실제로 78720646226947352489 = 9 x 8746738469660816943 + 2입니다.\n
      따라서 2를 return 합니다.
    `,
  },
];

describe("9로 나눈 나머지", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
