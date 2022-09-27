import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['Jane', 'Kim'],
    answer: '김서방은 1에 있다',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  }
];

describe('서울에서 김서방 찾기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
