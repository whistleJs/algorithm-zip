import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 1, 20],
    answer: 19,
    description: `
      [입출력 예 #1]\n\n
      
      본문에서 설명한 예시입니다.
    `
  },
  {
    input: [3, 1, 20],
    answer: 9,
    description: `
      [입출력 예 #2]\n\n
      
      1. 빈 병 20개 중 18개를 마트에 가져가서, 6병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 8(20 - 18 + 6 = 8)개 입니다.\n
      2. 빈 병 8개 중 6개를 마트에 가져가서, 2병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 4(8 - 6 + 2 = 4)개 입니다.\n
      3. 빈 병 4 개중 3개를 마트에 가져가서, 1병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 2(4 - 3 + 1 = 2)개 입니다.\n
      4. 3번의 교환 동안 상빈이는 9(6 + 2 + 1 = 9)병의 콜라를 받았습니다.
    `
  }
];

describe('콜라 문제', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
