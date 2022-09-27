import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[5, 9, 7, 10], 5],
    answer: [5, 10],
    description: `
      [입출력 예 #1]\n\n
      
      arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
    `
  },
  {
    input: [[2, 36, 1, 3], 1],
    answer: [1, 2, 3, 36],
    description: `
      [입출력 예 #2]\n\n
      
      arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
    `
  },
  {
    input: [[3, 2, 6], 10],
    answer: [-1],
    description: `
      [입출력 예 #3]\n\n
      
      3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
    `
  },
];

describe('나누어 떨어지는 숫자 배열', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
