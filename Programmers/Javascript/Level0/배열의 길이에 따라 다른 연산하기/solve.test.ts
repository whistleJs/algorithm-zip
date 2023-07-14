import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [49, 12, 100, 276, 33],
      27
    ],
    answer: [76, 12, 127, 276, 60],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 arr의 길이는 5로 홀수입니다. 따라서 arr의 짝수 인덱스 0, 2, 4에 주어진 n 값인 27을 더하면 [76, 12, 127, 276, 60]이 됩니다. 따라서 [76, 12, 127, 276, 60]를 return 합니다.
    `,
  },
  {
    input: [
      [444, 555, 666, 777],
      100
    ],
    answer: [444, 655, 666, 877],
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 arr의 길이는 4로 짝수입니다. 따라서 arr의 홀수 인덱스 1, 3에 주어진 n 값인 100을 더하면 [444, 655, 666, 877]이 됩니다. 따라서 [444, 655, 666, 877]를 return 합니다.
    `,
  },
];

describe("배열의 길이에 따라 다른 연산하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
