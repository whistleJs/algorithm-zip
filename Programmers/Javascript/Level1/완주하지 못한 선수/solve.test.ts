import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], string[]];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['leo', 'kiki', 'eden'],
      ['eden', 'kiki']
    ],
    answer: 'leo',
    description: `
      [입출력 예 #1]\n
      'leo'는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
    `
  },
  {
    input: [
      ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
      ['josipa', 'filipa', 'marina', 'nikola']
    ],
    answer: 'vinko',
    description: `
      [입출력 예 #2]\n
      'vinko'는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
    `
  },
  {
    input: [
      ['mislav', 'stanko', 'mislav', 'ana'],
      ['stanko', 'ana', 'mislav']
    ],
    answer: 'mislav',
    description: `
      [입출력 예 #3]\n
      'mislav'는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
    `
  }
];

describe('완주하지 못한 선수', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
