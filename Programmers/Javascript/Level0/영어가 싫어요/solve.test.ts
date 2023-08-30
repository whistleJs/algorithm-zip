import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'onetwothreefourfivesixseveneightnine',
    answer: 123456789,
    description: `
      [입출력 예 #1]\n\n
      
      'onetwothreefourfivesixseveneightnine'를 숫자로 바꾼 123456789를 return합니다.
    `,
  },
  {
    input: 'onefourzerosixseven',
    answer: 14067,
    description: `
      [입출력 예 #2]\n\n
      
      'onefourzerosixseven'를 숫자로 바꾼 14067를 return합니다.
    `,
  },
];

describe("영어가 싫어요", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
