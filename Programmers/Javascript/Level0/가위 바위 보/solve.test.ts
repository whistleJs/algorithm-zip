import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '2',
    answer: '0',
    description: `
      [입출력 예 #1]\n\n
      
      '2'는 가위이므로 바위를 나타내는 '0'을 return 합니다.
    `,
  },
  {
    input: '205',
    answer: '052',
    description: `
      [입출력 예 #2]\n\n
      
      '205'는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 '052'를 return합니다.
    `,
  },
];

describe("가위 바위 보", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
