import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '110010101001',
    answer: [3, 8],
    description: `
      [입출력 예 #1]\n\n
      
      1. 제거된 0의 개수: 6개, 제거 후 변횐된 길이: 6, 변환된 결과: 110\n
      2. 제거된 0의 개수: 1개, 제거 후 변횐된 길이: 2, 변환된 결과: 10\n
      3. 제거된 0의 개수: 1개, 제거 후 변횐된 길이: 1, 변환된 결과: 1\n
    `
  },
  {
    input: '01110',
    answer: [3, 3],
    description: `
      [입출력 예 #2]\n\n
      
      1. 제거된 0의 개수: 2개, 제거 후 변횐된 길이: 3, 변환된 결과: 11\n
      2. 제거된 0의 개수: 0개, 제거 후 변횐된 길이: 2, 변환된 결과: 10\n
      3. 제거된 0의 개수: 1개, 제거 후 변횐된 길이: 1, 변환된 결과: 1
    `
  },
  {
    input: '1111111',
    answer: [4, 1],
    description: `
      [입출력 예 #3]\n\n
      
      1. 제거된 0의 개수: 0개, 제거 후 변횐된 길이: 7, 변환된 결과: 111\n
      2. 제거된 0의 개수: 0개, 제거 후 변횐된 길이: 3, 변환된 결과: 11\n
      3. 제거된 0의 개수: 0개, 제거 후 변횐된 길이: 2, 변환된 결과: 10\n
      4. 제거된 0의 개수: 1개, 제거 후 변횐된 길이: 1, 변환된 결과: 1
    `
  },
];

describe('이진 변환 반복하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
