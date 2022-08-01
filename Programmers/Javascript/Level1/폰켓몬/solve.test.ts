import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 1, 2, 3],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      문제의 예시와 같습니다.
    `
  },
  {
    input: [3, 3, 3, 2, 2, 4],
    answer: 3,
    description: `
      [입출력 예 #2]\n\n

      6마리의 폰켓몬이 있으므로, 3마리의 폰켓몬을 골라야 합니다.\n
      가장 많은 종류의 폰켓몬을 고르기 위해서는 3번 폰켓몬 한 마리, 2번 폰켓몬 한 마리, 4번 폰켓몬 한 마리를 고르면 되며, 따라서 3을 return 합니다.
    `
  },
  {
    input: [3, 3, 3, 2, 2, 2],
    answer: 2,
    description: `
      [입출력 예 #3]\n\n

      6마리의 폰켓몬이 있으므로, 3마리의 폰켓몬을 골라야 합니다.\n
      가장 많은 종류의 폰켓몬을 고르기 위해서는 3번 폰켓몬 한 마리와 2번 폰켓몬 두 마리를 고르거나, 혹은 3번 폰켓몬 두 마리와 2번 폰켓몬 한 마리를 고르면 됩니다.\n
      따라서 최대 고를 수 있는 폰켓몬 종류의 수는 2입니다.
    `
  }
];

describe('폰켓몬', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
