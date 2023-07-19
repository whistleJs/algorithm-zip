import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [293, 1000, 395, 678, 94],
      [94, 777, 104, 1000, 1, 12]
    ],
    answer: [293, 395, 678],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 arr의 원소 중 1000과 94가 delete_list에 있으므로 이 두 원소를 삭제한 [293, 395, 678]을 return 합니다.
    `,
  },
  {
    input: [
      [110, 66, 439, 785, 1],
      [377, 823, 119, 43]
    ],
    answer: [110, 66, 439, 785, 1],
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 arr의 원소 중 delete_list에 있는 원소는 없습니다. 따라서 arr 그대로인 [110, 66, 439, 785, 1]을 return 합니다.
    `,
  },
];

describe("배열의 원소 삭제하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
