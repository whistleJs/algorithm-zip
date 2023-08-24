import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['banana', 'ana'],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      'banana'에서 1 ~ 3번 인덱스에서 한 번, 3 ~ 5번 인덱스에서 또 한 번 'ana'가 등장해서 총 두 번 등장합니다. 따라서 2를 return 합니다.
    `,
  },
  {
    input: ['aaaa', 'aa'],
    answer: 3,
    description: `
      [입출력 예 #2]\n\n
      
      'aaaa'에서 0 ~ 2번 인덱스에서 한 번, 1 ~ 3번 인덱스에서 한 번, 2 ~ 4번 인덱스에서 한 번 'aa'가 등장해서 총 세 번 등장합니다. 따라서 3을 return 합니다.
    `,
  },
];

describe("문자열이 몇 번 등장하는지 세기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
