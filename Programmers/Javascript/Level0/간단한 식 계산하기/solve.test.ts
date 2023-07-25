import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '43 + 12',
    answer: 55,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 binomial은 '43 + 12'로 이 식을 계산한 결과인 43 + 12 = 55를 return 합니다.
    `,
  },
  {
    input: '0 - 7777',
    answer: -7777,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 binomial은 '0 - 7777'로 이 식을 계산한 결과인 0 - 7777 = -7777을 return 합니다.
    `,
  },
  {
    input: '40000 * 40000',
    answer: 1600000000,
    description: `
      [입출력 예 #3]\n\n
      
      예제 3번의 binomial은 '40000 * 40000'으로 이 식을 계산한 결과인 40000 x 40000 = 1600000000을 return 합니다.
    `,
  },
];

describe("간단한 식 계산하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
