import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 70,
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      angle이 70이므로 예각입니다. 따라서 1을 return합니다.
    `,
  },
  {
    input: 91,
    answer: 3,
    description: `
      [입출력 예 #2]\n\n
      
      angle이 91이므로 둔각입니다. 따라서 3을 return합니다.
    `,
  },
  {
    input: 180,
    answer: 4,
    description: `
      [입출력 예 #3]\n\n
      
      angle이 180이므로 평각입니다. 따라서 4를 return합니다.
    `,
  },
];

describe("각도기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
