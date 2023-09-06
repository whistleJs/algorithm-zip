import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[0, 1, 1, 2, 2, 3], 3],
    answer: [0, 1, 2],
    description: `
      [입출력 예 #1]\n\n
      
      앞에서부터 서로 다른 k개의 수를 골라내면 [0, 1, 2]가 됩니다. 따라서 [0, 1, 2]를 return 합니다.
    `,
  },
  {
    input: [[0, 1, 1, 1, 1], 4],
    answer: [0, 1, -1, -1],
    description: `
      [입출력 예 #2]\n\n
      
      서로 다른 수의 개수가 2개 뿐이므로 서로 다른 수들을 앞에서부터 차례대로 저장한 [0, 1]에서 이후 2개의 인덱스를 -1로 채워넣은 [0, 1, -1, -1]을 return 합니다.
    `,
  },
];

describe("무작위로 K개의 수 뽑기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
