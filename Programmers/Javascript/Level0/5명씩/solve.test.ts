import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['nami', 'ahri', 'jayce', 'garen', 'ivern', 'vex', 'jinx'],
    answer:	['nami', 'vex'],
    description: `
      [입출력 예 #1]\n\n
      
      앞에서부터 5명씩 두 그룹으로 묶을 수 있습니다. ['nami', 'ahri', 'jayce', 'garen', 'ivern'], ['vex', 'jinx'] 이 두 그룹에서 가장 앞에 서있는 사람들의 이름을 담은 리스트인 ['nami', 'vex']를 return합니다.
    `,
  },
];

describe("5명씩", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
