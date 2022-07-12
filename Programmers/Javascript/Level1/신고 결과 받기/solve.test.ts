import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], string[], number];
type TestCaesAnswer = number[]

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['muzi', 'frodo', 'apeach', 'neo'],
      ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
      2
    ],
    answer: [2, 1, 1, 0],
    description: '문제의 예시와 같습니다.'
  },
  {
    input: [
      ['con', 'ryan'],
      ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
      3
    ],
    answer: [0, 0],
    description: `
      "ryan"이 "con"을 4번 신고했으나, 주어진 조건에 따라 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리합니다.\n
      따라서 "con"은 1회 신고당했습니다. 3번 이상 신고당한 이용자는 없으며, "con"과 "ryan"은 결과 메일을 받지 않습니다.\n
      따라서 [0, 0]을 return 합니다.
    `
  }
];

describe('신고 결과 받기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
