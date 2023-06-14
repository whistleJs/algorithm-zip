import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['abc', 'aabcc'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      본문과 동일합니다.
    `,
  },
  {
    input: ['tbt', 'tbbttb'],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      'tbbttb'에는 'tbt'가 없으므로 0을 return합니다.
    `,
  },
];

describe("부분 문자열", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
