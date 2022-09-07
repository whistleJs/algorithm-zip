import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number[], number[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [5, [2, 4], [1, 3, 5]],
    answer: 5,
    description: `
      [입출력 예 #1]\n\n
      
      1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.
    `
  },
  {
    input: [5, [2, 4], [3]],
    answer: 4,
    description: `
      [입출력 예 #2]\n\n
      
      3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
    `
  }
];

describe('체육복', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
