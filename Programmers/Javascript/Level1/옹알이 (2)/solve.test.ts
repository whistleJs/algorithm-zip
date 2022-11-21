import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['aya', 'yee', 'u', 'maa'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      ['aya', 'yee', 'u', 'maa']에서 발음할 수 있는 것은 'aya'뿐입니다. 따라서 1을 return합니다.
    `
  },
  {
    input: ['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'],
    answer: 2,
    description: `
      [입출력 예 #2]\n\n
      
      ['ayaye', 'uuuma', 'yeye', 'yemawoo', 'ayaayaa']에서 발음할 수 있는 것은 'aya' + 'ye' = 'ayaye', 'ye' + 'ma' + 'woo' = 'yemawoo'로 2개입니다.\n
      'yeye'는 같은 발음이 연속되므로 발음할 수 없습니다.\n\n

      따라서 2를 return합니다.
    `
  }
];

describe('옹알이 (2)', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
