import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '1 2 Z 3',
    answer: 4,
    description: `
      [입출력 예 #1]\n\n
      
      본문과 동일합니다.
    `,
  },
  {
    input: '10 20 30 40',
    answer: 100,
    description: `
      [입출력 예 #2]\n\n
      
      10 + 20 + 30 + 40 = 100을 return 합니다.
    `,
  },
  {
    input: '10 Z 20 Z 1',
    answer: 1,
    description: `
      [입출력 예 #3]\n\n
      
      '10 Z 20 Z 1'에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.
    `,
  },
  {
    input: '10 Z 20 Z',
    answer: 0,
    description: `
      [입출력 예 #4]\n\n
      
      설명 생략
    `,
  },
  {
    input: '-1 -2 -3 Z',
    answer: -3,
    description: `
      [입출력 예 #5]\n\n
      
      설명 생략
    `,
  },
];

describe("컨트롤 제트", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
