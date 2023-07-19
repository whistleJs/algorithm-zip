import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 23,
    answer: 5,
    description: `
      [입출력 예 #1]\n\n
      
      hp가 23이므로, 장군개미 네마리와 병정개미 한마리로 사냥할 수 있습니다. 따라서 5를 return합니다.
    `,
  },
  {
    input: 24,
    answer: 6,
    description: `
      [입출력 예 #2]\n\n
      
      hp가 24이므로, 장군개미 네마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 6을 return합니다.
    `,
  },
  {
    input: 999,
    answer: 201,
    description: `
      [입출력 예 #3]\n\n
      
      hp가 999이므로, 장군개미 199 마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 201을 return합니다.
    `,
  },
];

describe("개미 군단", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
