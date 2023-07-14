import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [0, 'wsdawsdassw'],
    answer: -1,
    description: `
      [입출력 예 #1]\n\n
      
      수 n은 control에 따라 다음과 같은 순서로 변하게 됩니다.\n
      0 → 1 → 0 → 10 → 0 → 1 → 0 → 10 → 0 → -1 → -2 → -1\n
      따라서 -1을 return 합니다.
    `,
  },
];

describe("수 조작하기 1", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
