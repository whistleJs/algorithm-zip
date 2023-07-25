import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [0, 0, 0, 1],
      1
    ],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      1보다 크면서 원소가 1인 가장 작은 인덱스는 3입니다. 따라서 3을 return 합니다.
    `,
  },
  {
    input: [
      [1, 0, 0, 1, 0, 0],
      4
    ],
    answer: -1,
    description: `
      [입출력 예 #2]\n\n
      
      4번 인덱스 이후에 1은 등장하지 않습니다. 따라서 -1을 return 합니다.
    `,
  },
  {
    input: [
      [1, 1, 1, 1, 0],
      3
    ],
    answer: 3,
    description: `
      [입출력 예 #3]\n\n
      
      3번 인덱스의 값이 1입니다. 따라서 3을 return 합니다.
    `,
  },
];

describe("가까운 1 찾기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
