import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [3, 2, 7, 2],
      [4, 6, 5, 1]
    ],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      문제 예시와 같습니다.
    `
  },
  {
    input: [
      [1, 2, 1, 2],
      [1, 10, 1, 2]
    ],
    answer: 7,
    description: `
      [입출력 예 #2]\n\n
      
      두 큐에 담긴 모든 원소의 합은 20입니다. 따라서, 각 큐의 합을 10으로 만들어야 합니다.\n
      queue2에서 1, 10을 순서대로 추출하여 queue1에 추가하고, queue1에서 1, 2, 1, 2와 1(queue2으로부터 받은 원소)을 순서대로 추출하여 queue2에 추가합니다.\n
      그 결과 queue1은 [10], queue2는 [1, 2, 1, 2, 1, 2, 1]가 되며, 각 큐의 원소 합은 10으로 같습니다.\n
      이때 작업 횟수는 7회이며, 이보다 적은 횟수로 목표를 달성하는 방법은 없습니다.\n
      따라서 7를 return 합니다.
    `
  },
  {
    input: [
      [1, 1],
      [1, 5]
    ],
    answer: -1,
    description: `
      [입출력 예 #3]\n\n
      
      어떤 방법을 쓰더라도 각 큐의 원소 합을 같게 만들 수 없습니다. 따라서 -1을 return 합니다.
    `
  },
];

describe('두 큐 합 같게 만들기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
