import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [34, 5, 71, 29, 100, 34],
      123
    ],
    answer: 139,
    description: `
      [입출력 예 #1]\n\n
      
      29를 더한 뒤에 sum 값은 139이고 n 값인 123보다 크므로 139를 return 합니다.
    `,
  },
  {
    input: [
      [58, 44, 27, 10, 100],
      139
    ],
    answer: 239,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 numbers의 마지막 원소 전까지의 원소를 sum에 더하면 139입니다. 139는 n 값인 139보다 크지 않고 마지막 원소인 100을 더하면 139보다 커지므로 239를 return 합니다.
    `,
  },
];

describe("n보다 커질 때까지 더하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
