import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 5],
    answer: [2, 4, 6, 8, 10],
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: [4, 3],
    answer: [4, 8, 12],
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: [-4, 2],
    answer: [-4, -8],
    description: `
      [입출력 예 #3]\n\n
      
      설명 없습니다.
    `
  },
];

describe('x만큼 간격이 있는 n개의 숫자', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
