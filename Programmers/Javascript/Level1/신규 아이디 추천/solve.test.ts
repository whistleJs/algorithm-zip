import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '...!@BaT#*..y.abcdefghijklm',
    answer: 'bat.y.abcdefghi',
    description: `
      [입출력 예 #2]\n
      문제의 예시와 같습니다.
    `
  },
  {
    input: 'z-+.^.',
    answer: 'z--',
    description: `
      [입출력 예 #2]\n
      7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.\n\n

      1단계 변화 없습니다.\n
      2단계 "z-+.^." → "z-.."\n
      3단계 "z-.." → "z-."\n
      4단계 "z-." → "z-"\n
      5단계 변화 없습니다.\n
      6단계 변화 없습니다.\n
      7단계 "z-" → "z--"
    `
  },
  {
    input: '=.=',
    answer: 'aaa',
    description: `
      [입출력 예 #3]\n
      7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.\n\n

      1단계 변화 없습니다.\n
      2단계 "=.=" → "."\n
      3단계 변화 없습니다.\n
      4단계 "." → "" (new_id가 빈 문자열이 되었습니다.)\n
      5단계 "" → "a"\n
      6단계 변화 없습니다.\n
      7단계 "a" → "aaa"
    `
  },
  {
    input: '123_.def',
    answer: '123_.def',
    description: `
      [입출력 예 #4]\n
      1단계에서 7단계까지 거치는 동안 new_id("123_.def")는 변하지 않습니다. 즉, new_id가 처음부터 카카오의 아이디 규칙에 맞습니다.
    `
  },
  {
    input: 'abcdefghijklmn.p',
    answer: 'abcdefghijklmn',
    description: `
      [입출력 예 #5]
      1단계 변화 없습니다.\n
      2단계 변화 없습니다.\n
      3단계 변화 없습니다.\n
      4단계 변화 없습니다.\n
      5단계 변화 없습니다.\n
      6단계 "abcdefghijklmn.p" → "abcdefghijklmn." → "abcdefghijklmn"\n
      7단계 변화 없습니다.
    `
  }
];

describe('신규 아이디 추천', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
