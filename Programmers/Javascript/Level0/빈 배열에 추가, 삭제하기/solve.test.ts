import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], boolean[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [3, 2, 4, 1, 3],
      [true, false, true, false, false],
    ],
    answer: [3, 3, 3, 3, 4, 4, 4, 4],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번에서 X의 변화를 나타내면 다음과 같습니다.\n\n

      1 - true	3	[3, 3, 3, 3, 3, 3]\n
      2	- false	2	[3, 3, 3, 3]\n
      3	- true	4	[3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4]\n
      4	- false	1	[3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4]\n
      5	- false	3	[3, 3, 3, 3, 4, 4, 4, 4]\n\n
      
      따라서 [3, 3, 3, 3, 4, 4, 4, 4]를 return 합니다.
    `,
  },
];

describe("빈 배열에 추가, 삭제하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
