import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], boolean[]];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['problemsolving', 'practiceguitar', 'swim', 'studygraph'],
      [true, false, true, false],
    ],
    answer: ['practiceguitar', 'studygraph'],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 todo_list 중에서 'problemsolving'과 'swim'은 마쳤고, 'practiceguitar'와 'studygraph'는 아직 마치지 못했으므로 todo_list에서 나온 순서대로 담은 문자열 배열 ['practiceguitar', 'studygraph']를 return 합니다.
    `,
  },
];

describe("할 일 목록", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
