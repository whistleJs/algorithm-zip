import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['582', '734'],
    answer: '1316',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 a, b는 각각 582, 734이고 582 + 734 = 1316입니다. 따라서 '1316'을 return 합니다.
    `,
  },
  {
    input: ['18446744073709551615', '287346502836570928366'],
    answer: '305793246910280479981',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 a, b는 각각 18446744073709551615, 287346502836570928366이고 18446744073709551615 + 287346502836570928366 = 305793246910280479981입니다. 따라서 '305793246910280479981'을 return 합니다.
    `,
  },
  {
    input: ['0', '0'],
    answer: '0',
    description: `
      [입출력 예 #3]\n\n
      
      예제 3번의 a, b는 각각 0, 0이고 0 + 0 = 0입니다. 따라서 '0'을 return 합니다.
    `,
  },
];

describe("두 수의 합", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
