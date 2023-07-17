import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [49, 13],
      [70, 11, 2]
    ],
    answer: -1,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번에서는 arr1의 길이는 2이고 arr2의 길이는 3으로 arr2의 길이가 더 깁니다. 따라서 arr2가 arr1보다 크므로 -1을 return 합니다.
    `,
  },
  {
    input: [
      [100, 17, 84, 1],
      [55, 12, 65, 36]
    ],
    answer: 1,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번에서는 arr1의 길이과 arr2의 길이가 4로 같습니다. arr1의 모든 원소의 합은 100 + 17 + 84 + 1 = 202이고 arr2의 모든 원소의 합은 55 + 12 + 65 + 36 = 168으로 arr1의 모든 원소의 합이 더 큽니다.\n
      따라서 arr1이 arr2보다 크므로 1을 return 합니다.
    `,
  },
  {
    input: [
      [1, 2, 3, 4, 5],
      [3, 3, 3, 3, 3]
    ],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      예제 3번에서는 arr1의 길이와 arr2의 길이가 5로 같고 각 배열의 모든 원소의 합 또한 15로 같습니다. 따라서 arr1과 arr2가 같으므로 0을 return 합니다.
    `,
  },
];

describe("배열 비교하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
