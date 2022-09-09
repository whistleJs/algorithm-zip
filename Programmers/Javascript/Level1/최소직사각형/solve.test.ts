import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[][];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[60, 50], [30, 70], [60, 30], [80, 40]],
    answer: 4000,
    description: `
      [입출력 예 #1]\n\n
      
      문제 예시와 같습니다.
    `,
  },
  {
    input: [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]],
    answer: 120,
    description: `
      [입출력 예 #2]\n\n
      
      명함들을 적절히 회전시켜 겹쳤을 때, 3번째 명함(가로: 8, 세로: 15)이 다른 모든 명함보다 크기가 큽니다. 따라서 지갑의 크기는 3번째 명함의 크기와 같으며, 120(=8 x 15)을 return 합니다.
    `,
  },
  {
    input: [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]],
    answer: 133,
    description: `
      [입출력 예 #3]\n\n
      
      명함들을 적절히 회전시켜 겹쳤을 때, 모든 명함을 포함하는 가장 작은 지갑의 크기는 133(=19 x 7)입니다.
    `,
  }
];

describe('최소직사각형', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
