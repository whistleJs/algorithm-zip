import { TestCase } from '@util/model';

import solution from './solve';

const TEST_CASES: TestCase<number, number>[] = [
  {
    input: 10,
    answer: 4,
    description: '1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환'
  },
  {
    input: 5,
    answer: 3,
    description: '1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환'
  }
];

describe('소수 찾기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
